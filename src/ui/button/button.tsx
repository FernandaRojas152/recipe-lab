'use client';

import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from 'react-aria-components';

import styles from './button.module.scss';

interface ButtonProps extends AriaButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  border?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  border = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      data-variant={variant}
      data-size={size}
      data-border={border}
      className={styles.button + (className ? ` ${className}` : '')}
      {...props}
    >
      {children}
    </AriaButton>
  );
}
