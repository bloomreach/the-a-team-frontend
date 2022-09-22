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
import { ContainerItem, getContainerItemContent } from '@bloomreach/spa-sdk';
import { BrProps } from '@bloomreach/react-sdk';

import styles from './TitleAndText.module.scss';

interface TitleAndTextCompound {
  title?: string;
  text?: {
    value?: string;
  };
}

export function TitleAndText({ component, page }: BrProps<ContainerItem>): React.ReactElement | null {
  if (component.isHidden()) {
    return page.isPreview() ? <div /> : null;
  }

  let title;
  let text;

  const content = getContainerItemContent<TitleAndTextCompound>(component, page);
  if (content !== null) {
    title = content.title;
    text = content.text;
  }

  return (
    <div>
      <div className="home-pacific-beauty-divider"></div>
      <div className="home-frame11">
        <div className="home-frame1057">
          <div className="home-frame12">
            <div className="home-contenthub">
              <span className="home-text005 pacificBeautyDesktopH1Italic">
                <span>{title}</span>
              </span>
            </div>
            <div className="home-frame14">
              <span className="home-text007 pacificBeautyDesktopH2">
                <span className="home-text008">
                  {text}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
