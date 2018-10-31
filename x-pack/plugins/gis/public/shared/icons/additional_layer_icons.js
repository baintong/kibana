/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';

export const FillableCircle = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    style={style}
    viewBox="0 0 16 16"
  >
    <defs>
      <path
        id="fillableCircle"
        d={`M8,15 C11.8659932,15 15,11.8659932 15,8 C15,4.13400675 11.8659932,\
        1 8,1 C4.13400675,1 1,4.13400675 1,8 C1,11.8659932 4.13400675,15 8,\
        15 Z M8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,\
        0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 Z M8,\
        12 C10.209139,12 12,10.209139 12,8 C12,5.790861 10.209139,4 8,\
        4 C5.790861,4 4,5.790861 4,8 C4,10.209139 5.790861,12 8,12 Z M8,\
        11 C6.34314575,11 5,9.65685425 5,8 C5,6.34314575 6.34314575,5 8,\
        5 C9.65685425,5 11,6.34314575 11,8 C11,9.65685425 9.65685425,11 8,\
        11 Z M8,9 C8.55228475,9 9,8.55228475 9,8 C9,7.44771525 8.55228475,7 8,\
        7 C7.44771525,7 7,7.44771525 7,8 C7,8.55228475 7.44771525,9 8,9 Z`}
      />
    </defs>
    <g>
      <ellipse
        id="path3353"
        cx="8.0350437"
        cy="7.9660664"
        rx="7.3820276"
        ry="7.3809776"
        transform="matrix(0.99985753,0.01687955,0,1,0,0)"
      />
    </g>
  </svg>
);

export const FillableVector = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    style={style}
    viewBox="0 0 16 16"
  >
    <path
      id="fillableVector"
      d={`M12.5,11 L12.5,5 L11,5 L11,3.5 L5,3.5 L5,5 L3.5,5 L3.5,11 L5,11 L5,\
      12.5 L11,12.5 L11,11 L12.5,11 Z M13.5,11 L15,11 L15,15 L11,15 L11,\
      13.5 L5,13.5 L5,15 L1,15 L1,11 L2.5,11 L2.5,5 L1,5 L1,1 L5,1 L5,2.5 L11\
      2.5 L11,1 L15,1 L15,5 L13.5,5 L13.5,11 Z M4,4 L4,2 L2,2 L2,4 L4,4 Z M12,\
      4 L14,4 L14,2 L12,2 L12,4 Z M2,14 L4,14 L4,12 L2,12 L2,14 Z M12,14 L14,\
      14 L14,12 L12,12 L12,14 Z`}
    />
    <path
      d={`m 5.049678,11.738983 -0.01917,-0.762712 -0.7627119,-0.01917 \
      -0.7627119,-0.01917 0,-2.9447117 0,-2.9447117 0.7627119,-0.01917 \
      0.7627119,-0.01917 0.019243,-0.7288136 0.019243,-0.7288135 2.9468589,\
      0 2.946859,0 0,0.7457627 0,0.7457627 0.745763,0 0.745762,0 0,2.9491525 \
      0,2.9491527 -0.745762,0 -0.745763,0 0,0.779661 0,0.779661 -2.9469323,\
      0 -2.9469321,0 -0.01917,-0.762712 z`}
      id="path4138"
    />
  </svg>
);