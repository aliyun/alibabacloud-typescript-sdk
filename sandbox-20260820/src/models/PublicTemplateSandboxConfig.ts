// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRegistryConfig } from "./PublicTemplateRegistryConfig";


export class PublicTemplateSandboxConfig extends $dara.Model {
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
  registryConfig?: PublicTemplateRegistryConfig;
  /**
   * @example
   * /usr/local/bin/start.sh
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
      registryConfig: PublicTemplateRegistryConfig,
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

