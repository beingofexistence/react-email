import { render } from "@react-email/render";
import { Markdown } from "./markdown";

describe("ReactEmailMarkdown component renders correctly", () => {
  it("renders the markdown in the correct format for browsers", () => {
    const actualOutput = render(
      <Markdown>
        {`
# This is a ~~chair~~ Table
       
| Heading 1 | Heading 2 |
| --------- | --------- |
| Cell 1    | Cell 2    |
| Cell 3    | Cell 4    |
       `}
      </Markdown>
    );
    expect(actualOutput).toMatchInlineSnapshot(`
      "<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><div data-id=\\"react-email-markdown\\">
      <h1 data-id=\\"react-email-heading\\" style=\\"font-weight:500;padding-top:20;font-size:2.5rem\\">This is a <del style=\\"\\">chair</del> Table</h1>
             <table style=\\"\\"><thead style=\\"\\"><tr style=\\"\\"><th style=\\"\\" align=\\"center\\">Heading 1</th><th style=\\"\\" align=\\"center\\">Heading 2</th></tr></thead><tbody style=\\"\\"><tr style=\\"\\"><td style=\\"\\" align=\\"center\\">Cell 1</td><td style=\\"\\" align=\\"center\\">Cell 2</td></tr><tr style=\\"\\"><td style=\\"\\" align=\\"center\\">Cell 3</td><td style=\\"\\" align=\\"center\\">Cell 4</td></tr></tbody></table>       </div>"
    `);
  });

  it("renders the headers in the correct format for browsers", () => {
    const actualOutput = render(
      <Markdown>
        {`
# Heading 1!
## Heading 2!
### Heading 3!
#### Heading 4!
##### Heading 5!
###### Heading 6!
       `}
      </Markdown>
    );
    expect(actualOutput).toMatchInlineSnapshot(`
      "<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><div data-id=\\"react-email-markdown\\">
      <h1 data-id=\\"react-email-heading\\" style=\\"font-weight:500;padding-top:20;font-size:2.5rem\\">Heading 1!</h1>
      <h2 data-id=\\"react-email-heading\\" style=\\"font-weight:500;padding-top:20;font-size:2rem\\">Heading 2!</h2>
      <h3 style=\\"font-weight:500;padding-top:20;font-size:1.75rem\\" data-id=\\"react-email-heading\\">Heading 3!</h3>
      <h4 style=\\"font-weight:500;padding-top:20;font-size:1.5rem\\" data-id=\\"react-email-heading\\">Heading 4!</h4>
      <h5 style=\\"font-weight:500;padding-top:20;font-size:1.25rem\\" data-id=\\"react-email-heading\\">Heading 5!</h5>
      <h6 style=\\"font-weight:500;padding-top:20;font-size:1rem\\" data-id=\\"react-email-heading\\">Heading 6!</h6>
             </div>"
    `);
  });

  it("renders text in the correct format for browsers", () => {
    const actualOutput = render(
      <Markdown>{`**This is sample bold text in markdown** and *this is italic text*`}</Markdown>
    );
    expect(actualOutput).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><div data-id=\\"react-email-markdown\\"><p style=\\"font-weight:bold\\" data-id=\\"react-email-text\\">This is sample bold text in markdown</p> and <p style=\\"font-style:italic\\" data-id=\\"react-email-text\\">this is italic text</p></div>"`
    );
  });

  it("renders links in the correct format for browsers", () => {
    const actualOutput = render(
      <Markdown>{`Link to [React-email](https://react.email)`}</Markdown>
    );
    expect(actualOutput).toMatchInlineSnapshot(
      `"<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><div data-id=\\"react-email-markdown\\">Link to <a href=\\"https://react.email\\" style=\\"color:#007bff;text-decoration:underline;background-color:transparent\\" data-id=\\"react-email-link\\" target=\\"_blank\\">React-email</a></div>"`
    );
  });

  it("renders lists in the correct format for browsers", () => {
    const actualOutput = render(
      <Markdown>
        {`
# Below is a list 

- Item One
- Item Two
- Item Three
       `}
      </Markdown>
    );
    expect(actualOutput).toMatchInlineSnapshot(`
      "<!DOCTYPE html PUBLIC \\"-//W3C//DTD XHTML 1.0 Transitional//EN\\" \\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\\"><div data-id=\\"react-email-markdown\\">
      <h1 data-id=\\"react-email-heading\\" style=\\"font-weight:500;padding-top:20;font-size:2.5rem\\">Below is a list </h1>
      <ul style=\\"\\"><li style=\\"\\">Item One</li>
      <li style=\\"\\">Item Two</li>
      <li style=\\"\\">Item Three</li></ul>
             </div>"
    `);
  });
});
