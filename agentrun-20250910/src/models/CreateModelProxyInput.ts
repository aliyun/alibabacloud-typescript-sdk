// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProxyConfig } from "./ProxyConfig";


export class CreateModelProxyInput extends $dara.Model {
  /**
   * @remarks
   * Specifies the configuration for Application Real-Time Monitoring Service (ARMS).
   */
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * The number of CPU cores for the proxy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The name of the credential for accessing the model service.
   * 
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @remarks
   * Optional. A custom description for the model proxy.
   * 
   * @example
   * 1
   */
  description?: string;
  /**
   * @remarks
   * The ARN of the execution role the service assumes to act on your behalf.
   * 
   * @example
   * executionRoleArn
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * The version of LiteLLM for the proxy.
   * 
   * @example
   * litellmVersion
   */
  litellmVersion?: string;
  /**
   * @remarks
   * The Log Service (SLS) configuration for the Agent runtime.
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * The memory size for the proxy, in GiB.
   * 
   * This parameter is required.
   * 
   * @example
   * 31
   */
  memory?: number;
  /**
   * @remarks
   * The unique name for the model proxy.
   * 
   * This parameter is required.
   * 
   * @example
   * modelProxyName
   */
  modelProxyName?: string;
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * - `system`: Specifies a system model.
   * 
   * - `deployment`: Specifies a custom deployment model.
   * 
   * @example
   * system
   */
  modelType?: string;
  /**
   * @remarks
   * Specifies the network configuration for the proxy.
   */
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * The configuration settings for the proxy.
   * 
   * This parameter is required.
   */
  proxyConfig?: ProxyConfig;
  /**
   * @remarks
   * Specifies the operational mode of the proxy.
   * 
   * This parameter is required.
   * 
   * @example
   * proxyMode
   */
  proxyMode?: string;
  /**
   * @remarks
   * The ID of the region for the model service.
   * 
   * @example
   * serviceRegionId
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the model proxy.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      armsConfiguration: 'armsConfiguration',
      cpu: 'cpu',
      credentialName: 'credentialName',
      description: 'description',
      executionRoleArn: 'executionRoleArn',
      litellmVersion: 'litellmVersion',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      modelProxyName: 'modelProxyName',
      modelType: 'modelType',
      networkConfiguration: 'networkConfiguration',
      proxyConfig: 'proxyConfig',
      proxyMode: 'proxyMode',
      serviceRegionId: 'serviceRegionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsConfiguration: ArmsConfiguration,
      cpu: 'number',
      credentialName: 'string',
      description: 'string',
      executionRoleArn: 'string',
      litellmVersion: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      modelProxyName: 'string',
      modelType: 'string',
      networkConfiguration: NetworkConfiguration,
      proxyConfig: ProxyConfig,
      proxyMode: 'string',
      serviceRegionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.armsConfiguration && typeof (this.armsConfiguration as any).validate === 'function') {
      (this.armsConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.proxyConfig && typeof (this.proxyConfig as any).validate === 'function') {
      (this.proxyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

