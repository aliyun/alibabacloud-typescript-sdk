// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CertConfig } from "./CertConfig";
import { TLSConfig } from "./Tlsconfig";


export class UpdateCustomDomainInput extends $dara.Model {
  certConfig?: CertConfig;
  description?: string;
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

