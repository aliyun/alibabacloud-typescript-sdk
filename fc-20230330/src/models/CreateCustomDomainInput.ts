// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { CertConfig } from "./CertConfig";
import { CORSConfig } from "./Corsconfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class CreateCustomDomainInput extends $dara.Model {
  /**
   * @remarks
   * Permission authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * HTTPS certificate information.
   */
  certConfig?: CertConfig;
  corsConfig?: CORSConfig;
  /**
   * @remarks
   * Domain name. Enter a custom domain name that has an ICP filing with Alibaba Cloud or has added Alibaba Cloud to the ICP filing information as a service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  isE2B?: boolean;
  /**
   * @remarks
   * Protocol type supported by the domain. HTTP: supports HTTP only. HTTPS: supports HTTPS only. HTTP,HTTPS: supports both HTTP and HTTPS.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * Route table: maps PATHs to functions when accessing the custom domain.
   */
  routeConfig?: RouteConfig;
  /**
   * @remarks
   * TLS configuration information.
   */
  tlsConfig?: TLSConfig;
  /**
   * @remarks
   * Web Application Firewall configuration information.
   */
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      corsConfig: 'corsConfig',
      domainName: 'domainName',
      isE2B: 'isE2B',
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
      domainName: 'string',
      isE2B: 'boolean',
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

