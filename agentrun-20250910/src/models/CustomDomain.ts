// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";


export class CustomDomain extends $dara.Model {
  /**
   * @remarks
   * HTTPS 证书的信息。
   * 
   * @example
   * {}
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2025-01-10T10:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 域名。填写已在阿里云备案或接入备案的自定义域名名称。
   * 
   * @example
   * example.com
   */
  domainName?: string;
  domainType?: string;
  /**
   * @remarks
   * 域名支持的协议类型：● HTTP：仅支持 HTTP 协议。● HTTPS：仅支持 HTTPS 协议。● HTTP,HTTPS：支持 HTTP 及 HTTPS 协议。
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * 路由表：自定义域名访问时的 PATH 到 资源 的映射。
   * 
   * @example
   * {}
   */
  routeConfig?: RouteConfig;
  /**
   * @remarks
   * TLS 配置信息。
   * 
   * @example
   * {}
   */
  tlsConfig?: TLSConfig;
  /**
   * @remarks
   * 更新时间
   * 
   * @example
   * 2025-01-10T11:45:00Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      createdAt: 'createdAt',
      description: 'description',
      domainName: 'domainName',
      domainType: 'domainType',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      tlsConfig: 'tlsConfig',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      createdAt: 'string',
      description: 'string',
      domainName: 'string',
      domainType: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      tlsConfig: TLSConfig,
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

