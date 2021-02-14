import React from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { Typography } from '../typography/Typography';
import './Box.scss';

export interface BoxProps {
  variant?: 'classic' | '2.0';
  width: number;
  height: number;
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const peppermintVariant = {
  backgroundColor: '#290829',
  innerBorder: '#393152',
  midBorder: '#6BD6BD',
  outerBorder: '#FFEFAD',
  ring: '#393152'
}

export const Box: React.FC<BoxProps> = ({
  width,
  height,
  variant,
  children,
  label,
  ...props
}) => {

  const resize = width > height ? 'container-width' : 'container-height';

  if(variant && variant === '2.0') {
    return (<div>

    </div>);
  }
  return (   
  <div>
    {label && <div className={"textbox-label"}>{label}</div>}
    <div className={"textbox"} style={{width: width + 15, height: height + 15}}>
    <div className={"box"} style={{width: width + 10, height: height + 10 }}/>
      <div className={"outerBorder"} style={{width, height}}>
        <div className={"innerBox"}>
          <div className={'container'}>
          { //Maintain previous classNames
          children && React.cloneElement(children as ReactElement, {
            className: React.Children.map(children, child => { 
              if(React.isValidElement(child))
              return [child.props.className, resize].join(' ')})})}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
