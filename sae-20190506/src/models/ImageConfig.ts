// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryConfig } from "./RegistryConfig";


export class ImageConfig extends $dara.Model {
  accelerationType?: string;
  image?: string;
  instanceID?: string;
  registryConfig?: RegistryConfig;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'accelerationType',
      image: 'image',
      instanceID: 'instanceID',
      registryConfig: 'registryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      image: 'string',
      instanceID: 'string',
      registryConfig: RegistryConfig,
    };
  }

  validate() {
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

