/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * Copyright 2019-2021 Bloomreach
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

import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { Configuration, PageModel } from '@bloomreach/spa-sdk';
import axios from 'axios';
import { Container, Navbar, Image, Row, Col } from 'react-bootstrap';
import { getCookieConsentValue } from 'react-cookie-consent';
import { useMemo, useState } from 'react';
import { CommerceApiClientFactory, CommerceConnectorProvider } from '@bloomreach/connector-components-react';
import { Cookies, CookiesProvider } from 'react-cookie';
import { initializeSegmentation } from '@bloomreach/segmentation';
import {
  BannerCollection,
  BannerCTA,
  BrCookieConsent,
  BeautyHeader,
  CategoryHighlight,
  ColorsUsed,
  Content,
  ContentPage,
  Images,
  Map,
  Menu,
  MultiBannerCarousel,
  MultipleTitleAndText,
  Navigation,
  PageCatalog,
  PathwaysRecommendations,
  Product,
  ProductGrid,
  ProductHighlight,
  SearchBar,
  SingleBannerCarousel,
  SingleBannerCarouselX,
  SubHeader as subheader,
  TitleAndText,
  Video,
} from '.';
import { CommerceContextProvider } from './CommerceContext';

import styles from './App.module.scss';
import { Meta } from './Meta';
import { CommerceConfig } from '../src/utils';

interface AppProps {
  configuration: Omit<Configuration, 'httpClient'>;
  page: PageModel;
  commerceConfig: CommerceConfig;
  commerceClientFactory?: CommerceApiClientFactory;
  apolloState?: string;
  cookies?: Record<string, string>;
}

export function App({
  configuration,
  page,
  commerceConfig,
  commerceClientFactory,
  apolloState,
  cookies,
}: AppProps): JSX.Element {
  const [, setCookieConsentVal] = useState<boolean>();
  const mapping = {
    BannerCollection,
    BannerCTA,
    BeautyHeader,
    CategoryHighlight,
    Content,
    ContentPage,
    Images,
    Map,
    Menu,
    MultiBannerCarousel,
    Navigation,
    PageCatalog,
    PathwaysRecommendations,
    Product,
    ProductGrid,
    ProductHighlight,
    SingleBannerCarousel,
    SingleBannerCarouselX,
    SearchBar,
    subheader,
    TitleAndText,
    Video,
    'colors-used': ColorsUsed,
    multipletitleandtext: MultipleTitleAndText,
  };

  const updateCookieConsentVal = (val: boolean): void => {
    setCookieConsentVal(val);
  };

  const {
    graphqlServiceUrl,
    connector,
    discoveryAccountId,
    discoveryDomainKey,
    brAccountName: accountEnvId,
  } = commerceConfig;
  const defaultRequestHeaders = undefined;
  const defaultAnonymousCredentials = undefined;

  const factory = useMemo(() => {
    return commerceClientFactory ?? new CommerceApiClientFactory(
      graphqlServiceUrl,
      connector,
      accountEnvId,
      defaultRequestHeaders,
      defaultAnonymousCredentials,
      false,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphqlServiceUrl, connector, accountEnvId, defaultRequestHeaders, defaultAnonymousCredentials]);

  const reactCookies = cookies ? new Cookies(cookies) : undefined;

  initializeSegmentation({
    projectToken: 'bdf1fa20-32aa-11ed-abd8-522f64a49849',
    targetURL: 'https://cloud-api.exponea.com',
  });

  return (
    <CookiesProvider cookies={reactCookies}>
      <CommerceConnectorProvider
        graphqlServiceUrl={graphqlServiceUrl}
        connector={connector}
        accountEnvId={accountEnvId}
        commerceClientFactory={factory}
        apolloState={apolloState}
      >
        <CommerceContextProvider commerceConfig={commerceConfig} commerceClientFactory={factory}>
          <BrPage configuration={{ ...configuration, httpClient: axios as any }} mapping={mapping} page={page}>
            <BrPageContext.Consumer>
              {(contextPage) => (<>
                <Meta page={contextPage!} />

                <BrComponent path="header">
                  <div>
                    <BrComponent />
                  </div>
                </BrComponent>

              <BrComponent path="top">
                <Container as="section" fluid>
                  <BrComponent />
                </Container>
              </BrComponent>
              <Container as="section" className="flex-fill pt-4">
                <Row className="flex-lg-nowrap">
                  <BrComponent path="main">
                    <Col xs="auto" className="flex-fill">
                      <BrComponent />
                    </Col>
                  </BrComponent>
                  <BrComponent path="right">
                    <Col lg="3" className="flex-fill py-lg-2">
                      <BrComponent />
                    </Col>
                  </BrComponent>
                </Row>
              </Container>
              <BrComponent path="bottom">
                <Container as="section" fluid>
                  <BrComponent />
                </Container>
              </BrComponent>
              <BrComponent path="footer">
                <footer className="bg-secondary text-light py-3">
                  <Container>
                    <Row>
                      <Col lg="9" xl="10">
                        <BrComponent />
                      </Col>
                      <Col lg="3" xl="2" className="text-center text-lg-right py-lg-2">
                        &copy; Bloomreach 2021
                      </Col>
                    </Row>
                  </Container>
                  {!contextPage?.isPreview() && <BrCookieConsent csUpdate={updateCookieConsentVal} />}
                </footer>
              </BrComponent>
              </>)}
            </BrPageContext.Consumer>
          </BrPage>
        </CommerceContextProvider>
      </CommerceConnectorProvider>
    </CookiesProvider>
  );
}
