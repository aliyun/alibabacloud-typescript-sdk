// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateRegistryConfig } from "./PublicUpdateTemplateRegistryConfig";


export class PublicUpdateTemplateSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry Enterprise instance.
   * 
   * @example
   * cri-abc123
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The sandbox generation. A value of 1 indicates rund, and a value of 2 indicates micro.
   * 
   * @example
   * 2
   */
  generation?: number;
  /**
   * @remarks
   * The image address.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my/ns:v1
   */
  image?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The micro sandbox readiness probe command. Only the second generation supports this parameter.
   * 
   * @example
   * /ready
   */
  readyCommand?: string;
  /**
   * @remarks
   * The image repository configuration.
   */
  registryConfig?: PublicUpdateTemplateRegistryConfig;
  /**
   * @remarks
   * The image repository type.
   * 
   * @example
   * acr
   */
  registryType?: string;
  /**
   * @remarks
   * The micro sandbox startup command. Only the second generation supports this parameter.
   * 
   * @example
   * /start-coroutines.sh
   */
  startCommand?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      generation: 'generation',
      image: 'image',
      osType: 'osType',
      readyCommand: 'readyCommand',
      registryConfig: 'registryConfig',
      registryType: 'registryType',
      startCommand: 'startCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      generation: 'number',
      image: 'string',
      osType: 'string',
      readyCommand: 'string',
      registryConfig: PublicUpdateTemplateRegistryConfig,
      registryType: 'string',
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

