// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";
import { ServiceHealthCheck } from "./ServiceHealthCheck";
import { LabelDetail } from "./LabelDetail";


export class ServicePorts extends $dara.Model {
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The protocol. Valid values: TCP and UDP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      port: 'port',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $dara.Model {
  /**
   * @remarks
   * The address details, which can be IP addresses or domain names.
   */
  addresses?: string[];
  /**
   * @remarks
   * The agent service configuration
   */
  agentServiceConfig?: AgentServiceConfig;
  /**
   * @remarks
   * The AI service configurations.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * The creation time (unix timestamp).
   * 
   * @example
   * 1725617840096
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The express type
   * 
   * @example
   * StartExecution
   */
  expressType?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The service group name.
   * 
   * @example
   * publich
   */
  groupName?: string;
  /**
   * @remarks
   * The health check configurations.
   */
  healthCheck?: ServiceHealthCheck;
  /**
   * @remarks
   * The health check status.
   * 
   * Valid values:
   * 
   * *   Unhealthy
   * *   Healthy
   * 
   * @example
   * Healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The label details for service version configuration
   */
  labelDetails?: LabelDetail[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the service.
   * 
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @remarks
   * The outlier endpoints list
   */
  outlierEndpoints?: string[];
  /**
   * @remarks
   * The list of objects containing port details.
   */
  ports?: ServicePorts[];
  /**
   * @remarks
   * The service protocol type.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The function qualifier name.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service unique ID.
   * 
   * @example
   * svc-cr6pk4tlhtgm***
   */
  serviceId?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of unhealthy endpoints.
   */
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * The last modified time (unix timestamp).
   * 
   * @example
   * 1725868548440
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      agentServiceConfig: 'agentServiceConfig',
      aiServiceConfig: 'aiServiceConfig',
      createTimestamp: 'createTimestamp',
      expressType: 'expressType',
      gatewayId: 'gatewayId',
      groupName: 'groupName',
      healthCheck: 'healthCheck',
      healthStatus: 'healthStatus',
      labelDetails: 'labelDetails',
      name: 'name',
      namespace: 'namespace',
      outlierEndpoints: 'outlierEndpoints',
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
      agentServiceConfig: AgentServiceConfig,
      aiServiceConfig: AiServiceConfig,
      createTimestamp: 'number',
      expressType: 'string',
      gatewayId: 'string',
      groupName: 'string',
      healthCheck: ServiceHealthCheck,
      healthStatus: 'string',
      labelDetails: { 'type': 'array', 'itemType': LabelDetail },
      name: 'string',
      namespace: 'string',
      outlierEndpoints: { 'type': 'array', 'itemType': 'string' },
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
    if(this.agentServiceConfig && typeof (this.agentServiceConfig as any).validate === 'function') {
      (this.agentServiceConfig as any).validate();
    }
    if(this.aiServiceConfig && typeof (this.aiServiceConfig as any).validate === 'function') {
      (this.aiServiceConfig as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(Array.isArray(this.labelDetails)) {
      $dara.Model.validateArray(this.labelDetails);
    }
    if(Array.isArray(this.outlierEndpoints)) {
      $dara.Model.validateArray(this.outlierEndpoints);
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

