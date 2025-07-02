// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { CertConfig } from "./CertConfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class CreateCustomDomainInput extends $dara.Model {
  authConfig?: AuthConfig;
  certConfig?: CertConfig;
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
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      domainName: 'domainName',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      certConfig: CertConfig,
      domainName: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

