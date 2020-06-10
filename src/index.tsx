import React, { useState } from 'react';
import { ReactComponent as ExpandArrow } from './icons/ExpandArrow.svg';

import s from './Accordion.module.scss';

export interface ContainerPropsRequired {
  open?: boolean;
  children?: React.ReactNode;
}
export interface ControllerPropsRequired {
  open?: boolean;
  onClick?: (...args: any) => void;
}

interface Props {
  opened?: boolean;
  className?: string;
  title?: React.ReactNode;
  controller?: React.ComponentType<any & ControllerPropsRequired>;
  container?: React.ComponentType<any & ContainerPropsRequired>;
  children?: React.ReactNode;
}

const AccordionDefaultController = ({ open, onClick }: { open?: boolean; onClick: () => void }) => {
  return (
    <div className={`${s.controller} ${open && s.opened}`} onClick={onClick}>
      <ExpandArrow />
    </div>
  );
};

const AccordionDefaultContainer = ({
  open,
  children,
}: { children?: React.ReactNode } & ContainerPropsRequired) => {
  return <div className={`${s.container} ${open && s.opened}`}>{children}</div>;
};

const Accordion = ({ opened, className, title, controller, container, children }: Props) => {
  const Controller = controller || AccordionDefaultController;
  const Container = container || AccordionDefaultContainer;
  const [open, setOpen] = useState<boolean>(!!opened);
  return (
    <div className={`${s.root} ${className}`}>
      {title}
      <Controller
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      />
      <Container open={open}>{children}</Container>
    </div>
  );
};

export default Accordion;
