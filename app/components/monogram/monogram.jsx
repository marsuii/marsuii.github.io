import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 314.04 224.68"
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      ref={ref}
      {...props}
    >
      <defs>
        <style>
          {`.cls-1 {
            stroke-width: 0px;
          }`}
        </style>
      </defs>
      <rect className="cls-1" x="186.89" y="110.3" width="127.15" height="22.21" />
      <rect className="cls-1" width="22.21" height="224.68" />
      <path
        className="cls-1"
        d="M126.19,119.23 L115.41,132.51 L111.89,136.86 L108.36,132.51 L97.58,119.23 L31.23,37.44 L31.23,2.19 L69.35,49.17 L111.62,101.27 L111.89,101.6 L118.95,110.3 L126.19,119.23 M211.63,224.53 L211.5,224.68 L183.14,224.68 L115.68,141.53 L144.28,141.53 L159.65,160.47 L211.63,224.53 M307.57,141.53 L240.1,224.68 L211.75,224.68 L211.63,224.53 L278.97,141.53 L307.57,141.53 M238.72,0 L238.72,101.27 L216.51,101.27 L216.51,22.21 L204.91,22.21 L140.76,101.27 L133.44,110.3 L130.56,110.3 L123.23,101.27 L117.69,94.44 L176.3,22.21 L194.32,0 L238.72,0"
      />
      {highlight && (
        <rect className={styles.highlight} x="186.89" y="110.3" width="127.15" height="22.21" />
      )}
    </svg>
  );
});

export default Monogram;
