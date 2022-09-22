/*
 * Copyright 2021 Bloomreach
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { ContainerItem } from '@bloomreach/spa-sdk';
import { BrProps } from '@bloomreach/react-sdk';
import Image from 'next/image';

export function BeautyHeader({ component, page }: BrProps<ContainerItem>): React.ReactElement | null {
  if (component.isHidden()) {
    return page.isPreview() ? <div /> : null;
  }

  const { title } = component.getParameters();
  const [titleFirstPart, titleSecondPart] = title.split(' ');

  return (
    <div className="home-pacific-beauty-global-nav">
    <div className="home-frame155">
      <div className="home-frame160">
        <div className="home-frame156">
          <Image src="/playground_assets/unioni152-j6vqi.svg" alt="UnionI152" className="home-union"
            layout="fixed" width="24" height="14"/>
        </div>
      </div>
      <span className="home-text">
        <span className="home-text001">{ titleFirstPart }</span> <span>{ titleSecondPart }</span>
      </span>
      <div className="home-frame159">
        <div className="home-frame1561">
          <Image src="/playground_assets/unioni152-hp0h.svg" alt="UnionI152" className="home-union1"
            layout="fixed" width="24" height="24"/>

          <div className="home-shopping-basket-icon">
            <div className="home-vector">
              <Image
                src="/playground_assets/vectori152-2hh.svg"
                alt="VectorI152"
                width="24" height="18" />
            </div>
            <div className="home-vector1-2">
              <Image
                src="/playground_assets/vectori152-i0qk.svg"
                alt="VectorI152"
                width="8" height="6"
              />
              <Image
                src="/playground_assets/vectori152-ckzh.svg"
                alt="VectorI152"
                className="home-vector2"
                width="7" height="6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
