// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccelerationInfo } from "./AccelerationInfo";
import { CustomHealthCheckConfig } from "./CustomHealthCheckConfig";
import { RegistryConfig } from "./RegistryConfig";


export class CustomContainerConfig extends $dara.Model {
  /**
   * @remarks
   * The information about image acceleration.
   */
  accelerationInfo?: AccelerationInfo;
  /**
   * @remarks
   * Specifies whether to enable image acceleration. Valid values: Default: enables image acceleration. None: disables image acceleration.
   * 
   * @example
   * default
   */
  accelerationType?: string;
  /**
   * @remarks
   * The ID of the image repository for the Container Registry Enterprise Edition. You must specify this parameter if you use an image of Container Registry Enterprise Edition.
   * 
   * @example
   * cri-xxxxxxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The startup parameter of the container.
   */
  command?: string[];
  /**
   * @remarks
   * The container startup command.
   */
  entrypoint?: string[];
  /**
   * @remarks
   * The custom health check configurations of the function.
   */
  healthCheckConfig?: CustomHealthCheckConfig;
  /**
   * @remarks
   * The endpoint of the container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1beta1
   */
  image?: string;
  /**
   * @remarks
   * The port on which the HTTP server listens for the Custom Container runtime.
   * 
   * @example
   * 9000
   */
  port?: number;
  /**
   * @remarks
   * registry related
   */
  registryConfig?: RegistryConfig;
  /**
   * @remarks
   * The actual digest version of the deployed image. The code version specified by digest is actually used when the function starts. This parameter is returned by GetFunction and is not required as a parameter.
   * 
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

