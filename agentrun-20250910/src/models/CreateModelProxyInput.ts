// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ArmsConfiguration } from "./ArmsConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProxyConfig } from "./ProxyConfig";


export class CreateModelProxyInput extends $dara.Model {
  armsConfiguration?: ArmsConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * credentialName
   * 
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @example
   * 1
   */
  description?: string;
  /**
   * @example
   * executionRoleArn
   */
  executionRoleArn?: string;
  /**
   * @remarks
   * litellmVersion
   * 
   * @example
   * litellmVersion
   */
  litellmVersion?: string;
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 31
   */
  memory?: number;
  /**
   * @remarks
   * modelProxyName
   * 
   * This parameter is required.
   * 
   * @example
   * modelProxyName
   */
  modelProxyName?: string;
  /**
   * @example
   * system
   */
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * ProxyConfig
   * 
   * This parameter is required.
   */
  proxyConfig?: ProxyConfig;
  /**
   * @remarks
   * proxyMode
   * 
   * This parameter is required.
   * 
   * @example
   * proxyMode
   */
  proxyMode?: string;
  /**
   * @remarks
   * serviceRegionId
   * 
   * @example
   * serviceRegionId
   */
  serviceRegionId?: string;
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

