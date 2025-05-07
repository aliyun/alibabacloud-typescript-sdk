// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryAuthenticationConfig } from "./RegistryAuthenticationConfig";
import { RegistryCertificateConfig } from "./RegistryCertificateConfig";


export class ImageRegistryConfig extends $dara.Model {
  authConfig?: RegistryAuthenticationConfig;
  certConfig?: RegistryCertificateConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'AuthConfig',
      certConfig: 'CertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: RegistryAuthenticationConfig,
      certConfig: RegistryCertificateConfig,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

