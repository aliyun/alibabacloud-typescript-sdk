// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateRegistryConfig } from "./PublicUpdateTemplateRegistryConfig";


export class PublicUpdateTemplateSandboxConfig extends $dara.Model {
  /**
   * @example
   * cri-abc123
   */
  acrInstanceId?: string;
  /**
   * @example
   * 2
   */
  generation?: number;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my/ns:v1
   */
  image?: string;
  /**
   * @example
   * linux
   */
  osType?: string;
  /**
   * @example
   * /ready
   */
  readyCommand?: string;
  registryConfig?: PublicUpdateTemplateRegistryConfig;
  /**
   * @example
   * acr
   */
  registryType?: string;
  /**
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

