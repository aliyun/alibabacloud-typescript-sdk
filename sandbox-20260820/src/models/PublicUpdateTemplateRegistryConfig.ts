// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateRegistryAuthConfig } from "./PublicUpdateTemplateRegistryAuthConfig";
import { PublicUpdateTemplateRegistryCertConfig } from "./PublicUpdateTemplateRegistryCertConfig";
import { PublicUpdateTemplateRegistryNetworkConfig } from "./PublicUpdateTemplateRegistryNetworkConfig";


export class PublicUpdateTemplateRegistryConfig extends $dara.Model {
  authConfig?: PublicUpdateTemplateRegistryAuthConfig;
  certConfig?: PublicUpdateTemplateRegistryCertConfig;
  networkConfig?: PublicUpdateTemplateRegistryNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: PublicUpdateTemplateRegistryAuthConfig,
      certConfig: PublicUpdateTemplateRegistryCertConfig,
      networkConfig: PublicUpdateTemplateRegistryNetworkConfig,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

