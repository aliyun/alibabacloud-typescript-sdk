// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";


export class UpdateCustomDomainInput extends $dara.Model {
  /**
   * @remarks
   * The new HTTPS certificate configuration for the domain name. When specified, this overwrites the existing configuration.
   */
  certConfig?: CertConfig;
  /**
   * @remarks
   * The new description of the custom domain name.
   * 
   * @example
   * Entry domain name for the sandbox production environment
   */
  description?: string;
  /**
   * @remarks
   * The new TLS protocol configuration for the domain name. When specified, this overwrites the existing configuration.
   */
  tlsConfig?: TLSConfig;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      description: 'description',
      tlsConfig: 'tlsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      description: 'string',
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

