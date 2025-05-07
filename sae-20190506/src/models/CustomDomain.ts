// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { RouteConfig } from "./RouteConfig";
import { TLSConfig } from "./Tlsconfig";
import { WAFConfig } from "./Wafconfig";


export class CustomDomain extends $dara.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  keepFullPath?: boolean;
  lastModifiedTime?: string;
  namespaceID?: string;
  protocol?: string;
  requestId?: string;
  routeConfig?: RouteConfig;
  subdomainCount?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      keepFullPath: 'keepFullPath',
      lastModifiedTime: 'lastModifiedTime',
      namespaceID: 'namespaceID',
      protocol: 'protocol',
      requestId: 'requestId',
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
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      keepFullPath: 'boolean',
      lastModifiedTime: 'string',
      namespaceID: 'string',
      protocol: 'string',
      requestId: 'string',
      routeConfig: RouteConfig,
      subdomainCount: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
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
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

