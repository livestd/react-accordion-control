# react-render-counter
Basic control accordion component

## Installation
```
npm install --save @livestd/react-accordion-control
```

## Usage


you can use custom component for action button and content container

```js
import Accordion, { ControllerPropsRequired, ContainerPropsRequired } from '@livestd/react-accordion-control';

const AccordionCustomController = ({ open, onClick }: ControllerPropsRequired) => (
  <div className={`${open && s.opened}`} onClick={onClick}>Expand</div>
);

const AccordionCostomContainer = ({ open, children }: ContainerPropsRequired) => (
  <div className={`${open && s.opened}`}>{children}</div>;
);

export default () => (
  <Accordion
    title={"title"}
    opened={true} // opened by default
    controller={AccordionCustomController}
    container={AccordionCostomContainer}
    children={"content"}
   />
)
```