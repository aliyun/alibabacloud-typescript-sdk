// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { CertConfig } from "./CertConfig";
import { CORSConfig } from "./Corsconfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class CustomDomain extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account (primary account).
   * 
   * @example
   * 186851234023****
   */
  accountId?: string;
  /**
   * @remarks
   * The API version of Function Compute.
   * 
   * @example
   * 2023-03-30
   */
  apiVersion?: string;
  /**
   * @remarks
   * The authentication configuration.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The HTTPS certificate configuration.
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * The cross-origin resource sharing (CORS) configuration.
   */
  corsConfig?: CORSConfig;
  /**
   * @remarks
   * The time when the custom domain was created.
   * 
   * @example
   * 2023-03-30T08:02:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  isE2B?: boolean;
  /**
   * @remarks
   * The time when the custom domain was last modified.
   * 
   * @example
   * 2023-03-30T08:02:19Z
   */
  lastModifiedTime?: string;
  /**
   * @remarks
   * The protocols that are supported by the domain name. Valid values: HTTP (HTTP only), HTTPS (HTTPS only), and HTTP,HTTPS (both HTTP and HTTPS).
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The route table that maps paths to functions.
   */
  routeConfig?: RouteConfig;
  /**
   * @remarks
   * The number of subdomains.
   * 
   * @example
   * 1
   */
  subdomainCount?: string;
  /**
   * @remarks
   * The TLS configuration.
   */
  tlsConfig?: TLSConfig;
  /**
   * @remarks
   * The Web Application Firewall (WAF) aconfiguration.
   */
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
      isE2B: 'isE2B',
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
      isE2B: 'boolean',
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

