[{"content":"## Welcome to RTLBook\n\nThis is an interactive coding environment where you can explore the following libraries:\n\n| Name      | Docs |\n| ----------- | ----------- |\n| React      | [docs](https://reactjs.org/)       |\n| @testing-library/react   |  [docs](https://testing-library.com/docs/react-testing-library/intro/)        |\n| @testing-library/user-event |   [docs](https://testing-library.com/docs/user-event/intro)  |\n| @testing-library/react-hooks |  [docs](https://github.com/testing-library/react-hooks-testing-library)  |\n| @testing-library/jest-dom | [docs](https://github.com/testing-library/jest-dom#custom-matchers) |\n| expect |  [docs](https://jestjs.io/docs/expect)  |\n\nIn between each 'cell' there are buttons that can add in a new code editor or a text section.","type":"text","id":"12frm"},{"content":"import { render, screen } from '@testting-libray/react';\n\nfunction ColorList() {\n  return (\n    <ul>\n      <li>Red</li>\n      <li>Blue</li>\n      <li>Green</li>\n    </ul>\n  );\n}\n\nrender(<ColorList />);","type":"code","id":"iw38l"},{"content":"test('getBy, queryBy, findBy, finding 0 elements', () => {\n  render(<ColorList />);\n\n  expect(() => screen.getByRole('textbox').toThrow());\n\n  expect(screen.queryByRole('textbox')).toEqual(null);\n});","type":"code","id":"7pbny"}]