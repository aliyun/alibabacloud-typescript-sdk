// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";


export class CustomDomainResp extends $dara.Model {
  /**
   * @remarks
   * The HTTPS certificate configuration used by the domain name.
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * The time when the domain name was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1755676800000
   */
  createdAt?: number;
  /**
   * @remarks
   * The description of the custom domain name.
   * 
   * @example
   * Domain name for the sandbox preview environment
   */
  description?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * sandbox.example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The TLS protocol configuration used by the domain name.
   */
  tlsConfig?: TLSConfig;
  /**
   * @remarks
   * The time when the domain name was last updated. The value is a UNIX timestamp in milliseconds.
   * 
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

