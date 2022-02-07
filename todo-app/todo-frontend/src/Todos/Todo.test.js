import { render } from '@testing-library/react';
import Todo from './Todo';

test('renders todo item', () => {
  const todo = {
    text: 'This is a test task',
    done: false,
  };
  const component = render(
    <Todo
      onClickComplete={() => console.log('complete')}
      onClickDelete={() => console.log('delete')}
      todo={todo}
    />
  );
  expect(component.container).toHaveTextContent('This is a test task');
});
