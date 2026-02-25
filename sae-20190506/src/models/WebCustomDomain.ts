// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteConfig } from "./RouteConfig";
import { WebCertConfig } from "./WebCertConfig";
import { WebTLSConfig } from "./WebTlsconfig";
import { WebWAFConfig } from "./WebWafconfig";


export class WebCustomDomain extends $dara.Model {
  /**
   * @remarks
   * The time when the custom domain name was created.
   * 
   * @example
   * 2023-03-30T08:02:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The name of the application that is forwarded by the domain name by default.
   * 
   * @example
   * appxxxxx
   */
  defaultForwardingAppName?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the custom domain name was last updated.
   * 
   * @example
   * 2023-03-30T08:02:19Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The ID of the namespace to which the domain name belongs.
   * 
   * @example
   * cn-chengdu
   */
  namespaceId?: string;
  /**
   * @remarks
   * The protocol type that is supported by the custom domain name. HTTP: Only HTTP is supported. HTTPS: Only HTTPS is supported. HTTP, HTTPS: Both HTTP and HTTPS are supported.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The route configurations.
   */
  routeConfig?: RouteConfig;
  /**
   * @remarks
   * The information about the HTTPS certificate.
   */
  webCertConfig?: WebCertConfig;
  /**
   * @remarks
   * The Transport Layer Security (TLS) configurations.
   */
  webTLSConfig?: WebTLSConfig;
  /**
   * @remarks
   * The WAF configurations.
   */
  webWAFConfig?: WebWAFConfig;
  /**
   * @remarks
   * The ID of your Alibaba Cloud account
   * 
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

