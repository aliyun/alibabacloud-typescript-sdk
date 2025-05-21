// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiServiceConfig } from "./AiServiceConfig";
import { ServiceHealthCheck } from "./ServiceHealthCheck";
import { ServicePorts } from "./ServicePorts";


export class Service extends $dara.Model {
  addresses?: string[];
  aiServiceConfig?: AiServiceConfig;
  createTimestamp?: number;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * publich
   */
  groupName?: string;
  healthCheck?: ServiceHealthCheck;
  healthStatus?: string;
  name?: string;
  namespace?: string;
  ports?: ServicePorts[];
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  serviceId?: string;
  sourceType?: string;
  unhealthyEndpoints?: string[];
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      aiServiceConfig: 'aiServiceConfig',
      createTimestamp: 'createTimestamp',
      gatewayId: 'gatewayId',
      groupName: 'groupName',
      healthCheck: 'healthCheck',
      healthStatus: 'healthStatus',
      name: 'name',
      namespace: 'namespace',
      ports: 'ports',
      protocol: 'protocol',
      qualifier: 'qualifier',
      resourceGroupId: 'resourceGroupId',
      serviceId: 'serviceId',
      sourceType: 'sourceType',
      unhealthyEndpoints: 'unhealthyEndpoints',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      aiServiceConfig: AiServiceConfig,
      createTimestamp: 'number',
      gatewayId: 'string',
      groupName: 'string',
      healthCheck: ServiceHealthCheck,
      healthStatus: 'string',
      name: 'string',
      namespace: 'string',
      ports: { 'type': 'array', 'itemType': ServicePorts },
      protocol: 'string',
      qualifier: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      sourceType: 'string',
      unhealthyEndpoints: { 'type': 'array', 'itemType': 'string' },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.aiServiceConfig && typeof (this.aiServiceConfig as any).validate === 'function') {
      (this.aiServiceConfig as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    if(Array.isArray(this.unhealthyEndpoints)) {
      $dara.Model.validateArray(this.unhealthyEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

