// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccelerationInfo } from "./AccelerationInfo";
import { CustomHealthCheckConfig } from "./CustomHealthCheckConfig";
import { RegistryConfig } from "./RegistryConfig";


export class CustomContainerConfig extends $dara.Model {
  accelerationInfo?: AccelerationInfo;
  /**
   * @example
   * deprecated
   */
  accelerationType?: string;
  /**
   * @example
   * deprecated
   */
  acrInstanceId?: string;
  command?: string[];
  entrypoint?: string[];
  healthCheckConfig?: CustomHealthCheckConfig;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1
   */
  image?: string;
  /**
   * @example
   * 9000
   */
  port?: number;
  registryConfig?: RegistryConfig;
  /**
   * @example
   * stand-sh-registry-vpc.cn-shanghai.cr.aliyuncs.com/fc-demo2/springboot-helloworld@sha256:68d1****0d64d6
   */
  resolvedImageUri?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationInfo: 'accelerationInfo',
      accelerationType: 'accelerationType',
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      entrypoint: 'entrypoint',
      healthCheckConfig: 'healthCheckConfig',
      image: 'image',
      port: 'port',
      registryConfig: 'registryConfig',
      resolvedImageUri: 'resolvedImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationInfo: AccelerationInfo,
      accelerationType: 'string',
      acrInstanceId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      entrypoint: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: CustomHealthCheckConfig,
      image: 'string',
      port: 'number',
      registryConfig: RegistryConfig,
      resolvedImageUri: 'string',
    };
  }

  validate() {
    if(this.accelerationInfo && typeof (this.accelerationInfo as any).validate === 'function') {
      (this.accelerationInfo as any).validate();
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.entrypoint)) {
      $dara.Model.validateArray(this.entrypoint);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
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

