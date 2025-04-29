// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig";
import { DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig } from "./DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig";


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfig extends $dara.Model {
  /**
   * @remarks
   * The information about the backend service when the backend service is of the Service Discovery type.
   */
  discoveryConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig;
  /**
   * @remarks
   * The EDAS configuration.
   */
  edasConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig;
  /**
   * @remarks
   * The information about the backend service whose type is EventBridge.
   */
  eventBridgeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig;
  /**
   * @remarks
   * The information about the backend service whose type is Function Compute.
   */
  functionComputeConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig;
  /**
   * @remarks
   * The host of the HTTP backend service.
   * 
   * @example
   * www.host.com
   */
  httpTargetHostName?: string;
  /**
   * @remarks
   * The information about the backend service when the backend service is of the Mock type.
   */
  mockConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig;
  /**
   * @remarks
   * The information about the backend service whose type is Object Storage Service (OSS).
   */
  ossConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig;
  /**
   * @remarks
   * The URL of the backend service.
   * 
   * @example
   * 10.0.0.1
   */
  serviceAddress?: string;
  /**
   * @remarks
   * The timeout period of the backend service, in millisecond.
   * 
   * @example
   * 10000
   */
  serviceTimeout?: number;
  /**
   * @remarks
   * The type of the backend service.
   * 
   * @example
   * VPC
   */
  type?: string;
  /**
   * @remarks
   * The information about the backend service when the backend service is of the VPC type.
   */
  vpcConfig?: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig;
  static names(): { [key: string]: string } {
    return {
      discoveryConfig: 'DiscoveryConfig',
      edasConfig: 'EdasConfig',
      eventBridgeConfig: 'EventBridgeConfig',
      functionComputeConfig: 'FunctionComputeConfig',
      httpTargetHostName: 'HttpTargetHostName',
      mockConfig: 'MockConfig',
      ossConfig: 'OssConfig',
      serviceAddress: 'ServiceAddress',
      serviceTimeout: 'ServiceTimeout',
      type: 'Type',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveryConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfig,
      edasConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig,
      eventBridgeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEventBridgeConfig,
      functionComputeConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigFunctionComputeConfig,
      httpTargetHostName: 'string',
      mockConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigMockConfig,
      ossConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigOssConfig,
      serviceAddress: 'string',
      serviceTimeout: 'number',
      type: 'string',
      vpcConfig: DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigVpcConfig,
    };
  }

  validate() {
    if(this.discoveryConfig && typeof (this.discoveryConfig as any).validate === 'function') {
      (this.discoveryConfig as any).validate();
    }
    if(this.edasConfig && typeof (this.edasConfig as any).validate === 'function') {
      (this.edasConfig as any).validate();
    }
    if(this.eventBridgeConfig && typeof (this.eventBridgeConfig as any).validate === 'function') {
      (this.eventBridgeConfig as any).validate();
    }
    if(this.functionComputeConfig && typeof (this.functionComputeConfig as any).validate === 'function') {
      (this.functionComputeConfig as any).validate();
    }
    if(this.mockConfig && typeof (this.mockConfig as any).validate === 'function') {
      (this.mockConfig as any).validate();
    }
    if(this.ossConfig && typeof (this.ossConfig as any).validate === 'function') {
      (this.ossConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

