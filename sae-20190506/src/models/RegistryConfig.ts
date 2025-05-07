// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryAuthConfig } from "./RegistryAuthConfig";
import { RegistryCertConfig } from "./RegistryCertConfig";


export class RegistryConfig extends $dara.Model {
  authConfig?: RegistryAuthConfig;
  certConfig?: RegistryCertConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: RegistryAuthConfig,
      certConfig: RegistryCertConfig,
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

