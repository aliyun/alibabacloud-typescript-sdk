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

export class ServiceVersionsLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * version
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceVersions extends $dara.Model {
  /**
   * @remarks
   * The list of version labels.
   */
  labels?: ServiceVersionsLabels[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ServiceVersionsLabels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $dara.Model {
  /**
   * @remarks
   * The address information, including IP addresses or domain name lists.
   */
  addresses?: string[];
  /**
   * @remarks
   * The agent service configuration.
   */
  agentServiceConfig?: AgentServiceConfig;
  /**
   * @remarks
   * The AI service configuration.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1725617840096
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The CloudFlow execution mode.
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
   * The health check configuration.
   */
  healthCheck?: ServiceHealthCheck;
  /**
   * @remarks
   * The health check status. Valid values: Healthy and Unhealthy.
   * 
   * @example
   * Healthy
   */
  healthStatus?: string;
  /**
   * @remarks
   * The label information of the service.
   */
  labelDetails?: LabelDetail[];
  /**
   * @example
   * mp-xxxx
   */
  modelProviderId?: string;
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
   * The namespace.
   * 
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @remarks
   * The circuit-broken endpoints.
   */
  outlierEndpoints?: string[];
  /**
   * @remarks
   * The list of port information.
   */
  ports?: ServicePorts[];
  /**
   * @remarks
   * The service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The function qualifier.
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
   * The unique ID of the service.
   * 
   * @example
   * svc-cr6pk4tlhtgm***
   */
  serviceId?: string;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The unhealthy endpoints.
   */
  unhealthyEndpoints?: string[];
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1725868548440
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The list of service versions.
   */
  versions?: ServiceVersions[];
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
      modelProviderId: 'modelProviderId',
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
      versions: 'versions',
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
      modelProviderId: 'string',
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
      versions: { 'type': 'array', 'itemType': ServiceVersions },
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
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

