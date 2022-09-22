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

interface TitleAndTextCompound {
  title?: string;
  text?: {
    value?: string;
  };
}

interface MultipleTitleAndTextCompound {
  titleandtext: TitleAndTextCompound[];
}

export function MultipleTitleAndText({ component, page }: BrProps<ContainerItem>): React.ReactElement | null {
  if (component.isHidden()) {
    return page.isPreview() ? <div /> : null;
  }

  let multiple;

  const content = getContainerItemContent<MultipleTitleAndTextCompound>(component, page);
  if (content !== null) {
    multiple = content.titleandtext;
  }

  return (
    <div className="home-frame1048">
      <div className="home-frame598">
        <div className="home-frame607">
        {multiple?.map((cg, index) => (
          <div className="home-frame605 home-frame605-dude" key={ index }>
            <div className="home-frame542">
              <span className="home-text061 pacificBeautyDesktopH2">
                <span>{ cg.title }</span>
              </span>
            </div>
            <span className="home-text063 pacificBeautyDesktopBodymedium">
              <span>
                {cg.text}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
