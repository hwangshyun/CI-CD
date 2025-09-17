import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from '.'

test('input미입력시 x버튼 안보이는지 테스트', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    const deleteButton = screen.queryByRole('button')

    expect(input).toHaveValue('')
    expect(deleteButton).not.toBeInTheDocument()
})

test('input입력시 x버튼 보이나 테스트', () => {
    render(<Input defaultValue='입력됨' />)

    const input = screen.getByRole('textbox')
    const deleteButton = screen.getByRole('button', { name: '입력값 지우기' })

    expect(input).toHaveValue('입력됨')
    expect(deleteButton).toBeInTheDocument()
})

test('버튼이 클릭되면 인풋밸류 사라지는지 테스트', () => {
    render(<Input defaultValue='입력돼있음' />);

    const input = screen.getByRole('textbox')
    const deleteButton = screen.getByRole('button');

    fireEvent.click(deleteButton);

    expect(input).toHaveValue('');
    expect(deleteButton).not.toBeInTheDocument()
})