// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { ProxyConfig } from "./ProxyConfig";


export class ModelProxy extends $dara.Model {
  cpu?: number;
  createdAt?: string;
  credentialName?: string;
  description?: string;
  endpoint?: string;
  functionName?: string;
  lastUpdatedAt?: string;
  litellmVersion?: string;
  logConfiguration?: LogConfiguration;
  memory?: number;
  modelProxyId?: string;
  modelProxyName?: string;
  modelType?: string;
  networkConfiguration?: NetworkConfiguration;
  proxyConfig?: ProxyConfig;
  proxyMode?: string;
  serviceRegionId?: string;
  status?: string;
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      createdAt: 'createdAt',
      credentialName: 'credentialName',
      description: 'description',
      endpoint: 'endpoint',
      functionName: 'functionName',
      lastUpdatedAt: 'lastUpdatedAt',
      litellmVersion: 'litellmVersion',
      logConfiguration: 'logConfiguration',
      memory: 'memory',
      modelProxyId: 'modelProxyId',
      modelProxyName: 'modelProxyName',
      modelType: 'modelType',
      networkConfiguration: 'networkConfiguration',
      proxyConfig: 'proxyConfig',
      proxyMode: 'proxyMode',
      serviceRegionId: 'serviceRegionId',
      status: 'status',
      statusReason: 'statusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      createdAt: 'string',
      credentialName: 'string',
      description: 'string',
      endpoint: 'string',
      functionName: 'string',
      lastUpdatedAt: 'string',
      litellmVersion: 'string',
      logConfiguration: LogConfiguration,
      memory: 'number',
      modelProxyId: 'string',
      modelProxyName: 'string',
      modelType: 'string',
      networkConfiguration: NetworkConfiguration,
      proxyConfig: ProxyConfig,
      proxyMode: 'string',
      serviceRegionId: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
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

