// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicUpdateTemplateRegistryConfig } from "./PublicUpdateTemplateRegistryConfig";
import { PublicUpdateTemplateStep } from "./PublicUpdateTemplateStep";


export class PublicUpdateTemplateSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise instance.
   * 
   * @example
   * cri-abc123
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The sandbox generation. Valid values: 1: rund. 2: micro.
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
   * The readiness probe command for the micro sandbox. This command is supported only by the second generation.
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
   * The startup command for the micro sandbox. This command is supported only by the second generation.
   * 
   * @example
   * /start-coroutines.sh
   */
  startCommand?: string;
  /**
   * @remarks
   * The list of custom build steps. If you do not specify this parameter, the original steps are retained. If you pass an empty array, the steps are cleared.
   */
  steps?: PublicUpdateTemplateStep[];
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
      steps: 'steps',
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
      steps: { 'type': 'array', 'itemType': PublicUpdateTemplateStep },
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

