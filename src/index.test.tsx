import React from 'react'
import { render, screen } from '@testing-library/react'
import BubblePreloader from './'

describe('BubblePreloader Component', () => {
  test('renders without crashing', () => {
    render(<BubblePreloader />)

    expect(screen.getByTestId('bubble-loader')).toBeInTheDocument()
  })

  test('applies custom className if provided', () => {
    render(<BubblePreloader className='johnny' />)
    const element = screen.getByTestId('bubble-loader')
    const classes = [...element.classList]

    expect(classes.includes('johnny')).toBe(true)
  })

  test('renders bubbles with custom sizes', () => {
    const { container } = render(<BubblePreloader bubble={{ width: '2rem', height: '2rem' }} />)
    const bubbles = container.querySelectorAll('.bubble1, .bubble2, .bubble3')

    bubbles.forEach((bubble) => {
      expect(bubble).toHaveStyle('width: 2rem')
      expect(bubble).toHaveStyle('height: 2rem')
    })
  })

  test('renders bubbles with custom colors', () => {
    const customColors = ['rgb(100, 100, 100)', 'rgb(150, 150, 150)', 'rgb(200, 200, 200)']
    const { container } = render(<BubblePreloader colors={customColors} />)
    const bubbles = container.querySelectorAll('.bubble1, .bubble2, .bubble3')

    expect(bubbles[0]).toHaveStyle(`background-color: ${customColors[0]}`)
    expect(bubbles[1]).toHaveStyle(`background-color: ${customColors[1]}`)
    expect(bubbles[2]).toHaveStyle(`background-color: ${customColors[2]}`)
  })

  test('applies correct animation speed', () => {
    const customSpeed = 2.5
    const { container } = render(<BubblePreloader animation={{ speed: customSpeed }} />)
    const bubbles = container.querySelectorAll('.bubble1, .bubble2, .bubble3')

    bubbles.forEach((bubble) => {
      expect(bubble).toHaveStyle(`animation: bouncedelay ${customSpeed}s ease-in-out infinite both`)
    })
  })
})
