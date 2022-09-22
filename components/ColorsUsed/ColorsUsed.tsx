/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
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
import Image from 'next/image';
import { ContainerItem, getContainerItemContent, ImageSet, Reference } from '@bloomreach/spa-sdk';
import { BrProps } from '@bloomreach/react-sdk';

interface ColorGroup {
  imagelink: Reference,
  colorname: string;
  productid: string;
  discountprice: string;
  originalprice: string;
}

interface ColorsUsedCompound {
  title?: string;
  colorgroup: ColorGroup[];
}

export function ColorsUsed({ component, page }: BrProps<ContainerItem>): React.ReactElement | null {
  let title;
  let colorgroup;
  const content = getContainerItemContent<ColorsUsedCompound>(component, page);
  if (content !== null) {
    title = content.title;
    colorgroup = content.colorgroup;
  }

  if (component.isHidden()) {
    return page.isPreview() ? <div /> : null;
  }

  const imageUrl = (image: Reference): string => {
    const x = page.getContent<ImageSet>(image.$ref);
    if (!x) {
      return '';
    }

    const y = x.getOriginal();
    if (!y) {
      return '';
    }
    return y.getUrl() || '';
  };

  return (
    <div>
          <div className="home-pacific-beauty-divider1"></div>
          <div className="home-pacific-beauty-productgrid">
            <div className="home-frame121">
              <span className="home-text014 pacificBeautyDesktopH2">
                <span>{ title }</span>
              </span>
              <div className="hello">
              {colorgroup?.map((cg) => (
                <div className="home-frame120" key={cg.productid}>
                  <div className="home-pacific-beauty-product">
                    <div className="home-group54">
                      {cg.imagelink && cg.imagelink.$ref && (
                        <Image src={imageUrl(cg.imagelink)} alt="link" layout="fill"/>
                      )}
                    </div>
                    <span className="home-text016">
                      <span className="home-text017">{cg.colorname}</span>
                      <span className="home-text018"></span>
                      <span>{cg.productid}</span>
                    </span>
                    <div className="home-frame1049">
                      <div className="home-frame1037">
                        <span className="home-text020"><span>{cg.discountprice}</span></span>
                      </div>
                      <span className="home-text022"><span>{cg.originalprice}</span></span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
    </div>
  );
}
