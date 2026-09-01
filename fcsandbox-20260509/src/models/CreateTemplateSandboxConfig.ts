// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryConfig } from "./CreateTemplateRegistryConfig";
import { CreateTemplateStep } from "./CreateTemplateStep";


export class CreateTemplateSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The Container Registry Enterprise instance ID.
   * 
   * @example
   * cri-abcd1234efgh
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The sandbox generation. A value of 1 indicates the first-generation sandbox. A value of 2 indicates the second-generation sandbox.
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
   * registry.cn-hangzhou.aliyuncs.com/demo/nginx:latest
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
   * The sandbox readiness probe command.
   * 
   * @example
   * curl -sf http://127.0.0.1:8080/healthz
   */
  readyCommand?: string;
  /**
   * @remarks
   * The image repository configuration.
   */
  registryConfig?: CreateTemplateRegistryConfig;
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
   * The sandbox startup command.
   * 
   * @example
   * sleep infinity
   */
  startCommand?: string;
  /**
   * @remarks
   * The list of custom build steps.
   */
  steps?: CreateTemplateStep[];
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
      registryConfig: CreateTemplateRegistryConfig,
      registryType: 'string',
      startCommand: 'string',
      steps: { 'type': 'array', 'itemType': CreateTemplateStep },
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

