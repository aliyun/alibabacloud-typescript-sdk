// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { CertConfig } from "./CertConfig";
import { CORSConfig } from "./Corsconfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class CustomDomain extends $dara.Model {
  accountId?: string;
  /**
   * @example
   * 2023-03-30
   */
  apiVersion?: string;
  authConfig?: AuthConfig;
  certConfig?: CertConfig;
  corsConfig?: CORSConfig;
  /**
   * @example
   * 2023-03-30T08:02:19Z
   */
  createdTime?: string;
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
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  /**
   * @example
   * 1
   */
  subdomainCount?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      corsConfig: 'corsConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      subdomainCount: 'subdomainCount',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      authConfig: AuthConfig,
      certConfig: CertConfig,
      corsConfig: CORSConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      subdomainCount: 'string',
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

