// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryConfig } from "./RegistryConfig";
import { Step } from "./Step";


export class MicroSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise Edition image repository instance. It is used in combination with MicroSandbox images. This parameter is optional. If it is not provided, the server resolves it on demand.
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image address.
   */
  image?: string;
  /**
   * @remarks
   * The operating system type.
   */
  osType?: string;
  /**
   * @remarks
   * The ready command.
   */
  readyCommand?: string;
  /**
   * @remarks
   * The image repository configuration.
   */
  registryConfig?: RegistryConfig;
  /**
   * @remarks
   * The startup command.
   */
  startCommand?: string;
  /**
   * @remarks
   * The build steps.
   */
  steps?: Step[];
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      image: 'image',
      osType: 'osType',
      readyCommand: 'readyCommand',
      registryConfig: 'registryConfig',
      startCommand: 'startCommand',
      steps: 'steps',
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
      steps: { 'type': 'array', 'itemType': Step },
    };
  }

  validate() {
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

