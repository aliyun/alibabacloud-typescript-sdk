// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryConfig } from "./RegistryConfig";


export class MicroSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise Edition image repository instance. Used in pair with MicroSandbox images. This parameter is optional. If not provided, the server resolves it as needed.
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image address.
   */
  image?: string;
  osType?: string;
  readyCommand?: string;
  /**
   * @remarks
   * The image repository configuration.
   */
  registryConfig?: RegistryConfig;
  startCommand?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      image: 'image',
      osType: 'osType',
      readyCommand: 'readyCommand',
      registryConfig: 'registryConfig',
      startCommand: 'startCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      image: 'string',
      osType: 'string',
      readyCommand: 'string',
      registryConfig: RegistryConfig,
      startCommand: 'string',
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

