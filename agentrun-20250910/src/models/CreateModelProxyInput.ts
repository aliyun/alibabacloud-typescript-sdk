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
   */
  cpu?: number;
  credentialName?: string;
  description?: string;
  litellmVersion?: string;
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  memory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  modelProxyName?: string;
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyConfig?: ProxyConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  proxyMode?: string;
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      armsConfiguration: 'armsConfiguration',
      cpu: 'cpu',
      credentialName: 'credentialName',
      description: 'description',
      litellmVersion: 'litellmVersion',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      modelProxyName: 'modelProxyName',
      modelType: 'modelType',
      networkConfiguration: 'networkConfiguration',
      proxyConfig: 'proxyConfig',
      proxyMode: 'proxyMode',
      serviceRegionId: 'serviceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsConfiguration: ArmsConfiguration,
      cpu: 'number',
      credentialName: 'string',
      description: 'string',
      litellmVersion: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      modelProxyName: 'string',
      modelType: 'string',
      networkConfiguration: NetworkConfiguration,
      proxyConfig: ProxyConfig,
      proxyMode: 'string',
      serviceRegionId: 'string',
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

