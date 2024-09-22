import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';

describe('Teste para o componente Post', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar dois comentários à lista', () => {
        render(<Post />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('submit-button');

        // Inserir o primeiro comentário
        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        // Verificar se o primeiro comentário foi adicionado
        let comments = screen.getAllByTestId('comment-item');
        expect(comments.length).toBe(1);
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

        // Inserir o segundo comentário
        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        // Verificar se o segundo comentário foi adicionado
        comments = screen.getAllByTestId('comment-item');
        expect(comments.length).toBe(2);
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});