// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRegistryNetworkConfig } from "./PublicTemplateRegistryNetworkConfig";


export class PublicTemplateRegistryConfig extends $dara.Model {
  networkConfig?: PublicTemplateRegistryNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkConfig: PublicTemplateRegistryNetworkConfig,
    };
  }

  validate() {
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

