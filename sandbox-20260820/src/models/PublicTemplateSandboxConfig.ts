// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRegistryConfig } from "./PublicTemplateRegistryConfig";
import { PublicTemplateStep } from "./PublicTemplateStep";


export class PublicTemplateSandboxConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry Enterprise instance. This parameter is required when registryType is set to acree.
   * 
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The sandbox generation. Valid values: 1 (first generation) and 2 (second generation). Default value: 1.
   * 
   * @example
   * 1
   */
  generation?: number;
  /**
   * @remarks
   * The address of the sandbox base image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12
   */
  image?: string;
  /**
   * @remarks
   * The operating system type of the second-generation sandbox. Valid values: linux-amd64, android-36-osworld, and windows-osworld.
   * 
   * @example
   * linux-amd64
   */
  osType?: string;
  /**
   * @remarks
   * The readiness probe command for the sandbox. A successful execution indicates that the sandbox is ready to receive requests. This parameter is supported only by first-generation sandboxes.
   * 
   * @example
   * curl -sf http://127.0.0.1:49983/health
   */
  readyCommand?: string;
  /**
   * @remarks
   * The configuration used to access the image repository. For security reasons, only the network configuration is returned in query responses, and logon credentials are not returned.
   */
  registryConfig?: PublicTemplateRegistryConfig;
  /**
   * @remarks
   * The startup command for the sandbox container. This parameter is supported only by first-generation sandboxes.
   * 
   * @example
   * /usr/local/bin/start.sh
   */
  startCommand?: string;
  /**
   * @remarks
   * The list of custom build steps.
   */
  steps?: PublicTemplateStep[];
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      generation: 'generation',
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
      generation: 'number',
      image: 'string',
      osType: 'string',
      readyCommand: 'string',
      registryConfig: PublicTemplateRegistryConfig,
      startCommand: 'string',
      steps: { 'type': 'array', 'itemType': PublicTemplateStep },
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

