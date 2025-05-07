// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteConfig } from "./RouteConfig";
import { WebCertConfig } from "./WebCertConfig";
import { WebTLSConfig } from "./WebTlsconfig";
import { WebWAFConfig } from "./WebWafconfig";


export class WebCustomDomain extends $dara.Model {
  /**
   * @example
   * 2023-03-30T08:02:19Z
   */
  createdTime?: string;
  /**
   * @example
   * appxxxxx
   */
  defaultForwardingAppName?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2023-03-30T08:02:19Z
   */
  lastModifiedTime?: string;
  namespaceId?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  webCertConfig?: WebCertConfig;
  webTLSConfig?: WebTLSConfig;
  webWAFConfig?: WebWAFConfig;
  /**
   * @example
   * 123xxxxxx
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      defaultForwardingAppName: 'DefaultForwardingAppName',
      domainName: 'DomainName',
      lastModifiedTime: 'LastModifiedTime',
      namespaceId: 'NamespaceId',
      protocol: 'Protocol',
      routeConfig: 'RouteConfig',
      webCertConfig: 'WebCertConfig',
      webTLSConfig: 'WebTLSConfig',
      webWAFConfig: 'WebWAFConfig',
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      defaultForwardingAppName: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      namespaceId: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      webCertConfig: WebCertConfig,
      webTLSConfig: WebTLSConfig,
      webWAFConfig: WebWAFConfig,
      accountId: 'string',
    };
  }

  validate() {
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.webCertConfig && typeof (this.webCertConfig as any).validate === 'function') {
      (this.webCertConfig as any).validate();
    }
    if(this.webTLSConfig && typeof (this.webTLSConfig as any).validate === 'function') {
      (this.webTLSConfig as any).validate();
    }
    if(this.webWAFConfig && typeof (this.webWAFConfig as any).validate === 'function') {
      (this.webWAFConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

