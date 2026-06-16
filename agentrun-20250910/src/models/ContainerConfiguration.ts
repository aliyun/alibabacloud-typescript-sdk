// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryConfig } from "./RegistryConfig";


export class ContainerConfiguration extends $dara.Model {
  /**
   * @remarks
   * The instance ID or name of Alibaba Cloud Container Registry (ACR).
   * 
   * @example
   * cri-xxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The sandbox entrypoint command. For example: [\\"python3\\", \\"app.py\\"].
   * 
   * @example
   * python3,app.py
   */
  command?: string[];
  /**
   * @remarks
   * The container image URI.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my-namespace/agent-runtime:latest
   */
  image?: string;
  /**
   * @remarks
   * The source of the container image. Valid values: ACR (Alibaba Cloud Container Registry), ACREE (Alibaba Cloud Container Registry Enterprise Edition), and CUSTOM (a custom image repository).
   * 
   * @example
   * ACR
   */
  imageRegistryType?: string;
  /**
   * @remarks
   * The listening port for the sandbox runtime.
   * 
   * @example
   * 5000
   */
  port?: number;
  /**
   * @remarks
   * 自定义镜像仓库的配置信息，当imageRegistryType为CUSTOM时使用
   * 
   * @example
   * {}
   */
  registryConfig?: RegistryConfig;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      image: 'image',
      imageRegistryType: 'imageRegistryType',
      port: 'port',
      registryConfig: 'registryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      imageRegistryType: 'string',
      port: 'number',
      registryConfig: RegistryConfig,
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

