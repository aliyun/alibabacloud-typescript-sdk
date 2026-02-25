// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteConfig } from "./RouteConfig";
import { WebCertConfig } from "./WebCertConfig";
import { WebTLSConfig } from "./WebTlsconfig";
import { WebWAFConfig } from "./WebWafconfig";


export class CreateWebCustomDomainInput extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which data is forwarded by the domain name by default.
   * 
   * @example
   * demo-app
   */
  defaultForwardingAppName?: string;
  /**
   * @remarks
   * The domain name. Enter a custom domain name that has obtained an Internet content provider (ICP) filing in the Alibaba Cloud ICP Filing system, or a custom domain name whose ICP filing information includes Alibaba Cloud as a service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The protocol type that is supported by the custom domain name. Valid values:
   * 
   * *   **HTTP**: Only HTTP is supported.
   * *   **HTTPS**: Only HTTPS is supported.
   * *   **HTTP,HTTPS**: Both HTTP and HTTPS are supported.
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
   * The Web Application Firewall (WAF) configurations.
   */
  webWAFConfig?: WebWAFConfig;
  static names(): { [key: string]: string } {
    return {
      defaultForwardingAppName: 'DefaultForwardingAppName',
      domainName: 'DomainName',
      protocol: 'Protocol',
      routeConfig: 'RouteConfig',
      webCertConfig: 'WebCertConfig',
      webTLSConfig: 'WebTLSConfig',
      webWAFConfig: 'WebWAFConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardingAppName: 'string',
      domainName: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      webCertConfig: WebCertConfig,
      webTLSConfig: WebTLSConfig,
      webWAFConfig: WebWAFConfig,
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

