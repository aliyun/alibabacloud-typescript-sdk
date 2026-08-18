// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { CertConfig } from "./CertConfig";
import { CORSConfig } from "./Corsconfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class UpdateCustomDomainInput extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The HTTPS certificate information.
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * The CORS configuration.
   */
  corsConfig?: CORSConfig;
  /**
   * @remarks
   * The protocol type supported by the domain name. Valid values:
   * - HTTP: Only the HTTP protocol is supported.
   * - HTTPS: Only the HTTPS protocol is supported.
   * - HTTP,HTTPS: Both HTTP and HTTPS protocols are supported.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The route table that maps paths to functions when the custom domain name is accessed.
   */
  routeConfig?: RouteConfig;
  /**
   * @remarks
   * The TLS configuration information.
   */
  tlsConfig?: TLSConfig;
  /**
   * @remarks
   * The Web Application Protection configuration information.
   */
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      corsConfig: 'corsConfig',
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
      corsConfig: CORSConfig,
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
    if(this.corsConfig && typeof (this.corsConfig as any).validate === 'function') {
      (this.corsConfig as any).validate();
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

