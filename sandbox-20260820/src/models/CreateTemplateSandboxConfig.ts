// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRegistryConfig } from "./CreateTemplateRegistryConfig";
import { CreateTemplateStep } from "./CreateTemplateStep";


export class CreateTemplateSandboxConfig extends $dara.Model {
  /**
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12
   */
  image?: string;
  /**
   * @example
   * linux-amd64
   */
  osType?: string;
  /**
   * @example
   * curl -sf http://127.0.0.1:49983/health
   */
  readyCommand?: string;
  registryConfig?: CreateTemplateRegistryConfig;
  /**
   * @example
   * acree
   */
  registryType?: string;
  /**
   * @example
   * /usr/local/bin/start.sh
   */
  startCommand?: string;
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

