// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RouteConfig } from "./RouteConfig";
import { WebCertConfig } from "./WebCertConfig";
import { WebTLSConfig } from "./WebTlsconfig";
import { WebWAFConfig } from "./WebWafconfig";


export class CreateWebCustomDomainInput extends $dara.Model {
  defaultForwardingAppName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  webCertConfig?: WebCertConfig;
  webTLSConfig?: WebTLSConfig;
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

