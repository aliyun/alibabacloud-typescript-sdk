// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";


export class CreateCustomDomainInput extends $dara.Model {
  /**
   * @remarks
   * The HTTPS certificate configuration used by the domain name.
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * The description of the custom domain name.
   * 
   * @example
   * Entry domain name for the sandbox preview environment
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
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      description: 'description',
      domainName: 'domainName',
      tlsConfig: 'tlsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      description: 'string',
      domainName: 'string',
      tlsConfig: TLSConfig,
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

