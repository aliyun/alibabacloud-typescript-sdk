// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";


export class CustomDomainResp extends $dara.Model {
  certConfig?: CertConfig;
  /**
   * @example
   * 1755676800000
   */
  createdAt?: number;
  /**
   * @example
   * 沙箱预览环境入口域名
   */
  description?: string;
  /**
   * @example
   * sandbox.example.com
   */
  domainName?: string;
  tlsConfig?: TLSConfig;
  /**
   * @example
   * 1755763200000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      createdAt: 'createdAt',
      description: 'description',
      domainName: 'domainName',
      tlsConfig: 'tlsConfig',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      createdAt: 'number',
      description: 'string',
      domainName: 'string',
      tlsConfig: TLSConfig,
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
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

