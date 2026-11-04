// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryAuthConfig } from "./CreateTemplateRegistryAuthConfig";
import { CreateTemplateRegistryCertConfig } from "./CreateTemplateRegistryCertConfig";
import { CreateTemplateRegistryNetworkConfig } from "./CreateTemplateRegistryNetworkConfig";


export class CreateTemplateRegistryConfig extends $dara.Model {
  /**
   * @remarks
   * The logon credentials for the image repository. No configuration is required when accessing a public repository.
   */
  authConfig?: CreateTemplateRegistryAuthConfig;
  /**
   * @remarks
   * The certificate validation configuration for accessing the image repository.
   */
  certConfig?: CreateTemplateRegistryCertConfig;
  /**
   * @remarks
   * The VPC configuration used to access the image repository. Configuration is required only when the repository is reachable only within a VPC.
   */
  networkConfig?: CreateTemplateRegistryNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: CreateTemplateRegistryAuthConfig,
      certConfig: CreateTemplateRegistryCertConfig,
      networkConfig: CreateTemplateRegistryNetworkConfig,
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

