// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerConfiguration extends $dara.Model {
  /**
   * @remarks
   * 阿里云容器镜像服务（ACR）的实例ID或名称
   * 
   * @example
   * cri-xxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * 在容器中运行的命令（例如：[\"python3\", \"app.py\"]）
   * 
   * @example
   * python3,app.py
   */
  command?: string[];
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/my-namespace/agent-runtime:latest
   */
  image?: string;
  /**
   * @remarks
   * 容器镜像的来源类型，支持ACR（阿里云容器镜像服务）、ACREE（阿里云容器镜像服务企业版）、CUSTOM（自定义镜像仓库）
   * 
   * @example
   * ACR
   */
  imageRegistryType?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      image: 'image',
      imageRegistryType: 'imageRegistryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      imageRegistryType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

