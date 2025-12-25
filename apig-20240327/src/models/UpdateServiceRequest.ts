// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class UpdateServiceRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable health checks.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The normal status codes to be returned. This parameter is required if the health check protocol is HTTP.
   */
  expectedStatuses?: string[];
  /**
   * @remarks
   * The healthy threshold.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Optional. This parameter is available if the health check protocol is HTTP.
   * 
   * @example
   * dev.itemcener.com
   */
  httpHost?: string;
  /**
   * @remarks
   * The request path of health checks. This parameter is required if the health check protocol is HTTP.
   * 
   * @example
   * /healthz
   */
  httpPath?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The protocol over which the system performs health checks.
   * 
   * Valid values:
   * 
   * *   TCP
   * *   HTTP
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The timeout period for a health check response. Unit: seconds
   * 
   * @example
   * 2
   */
  timeout?: number;
  /**
   * @remarks
   * The unhealthy threshold.
   * 
   * @example
   * 22
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      expectedStatuses: 'expectedStatuses',
      healthyThreshold: 'healthyThreshold',
      httpHost: 'httpHost',
      httpPath: 'httpPath',
      interval: 'interval',
      protocol: 'protocol',
      timeout: 'timeout',
      unhealthyThreshold: 'unhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      expectedStatuses: { 'type': 'array', 'itemType': 'string' },
      healthyThreshold: 'number',
      httpHost: 'string',
      httpPath: 'string',
      interval: 'number',
      protocol: 'string',
      timeout: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.expectedStatuses)) {
      $dara.Model.validateArray(this.expectedStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestOutlierDetectionConfig extends $dara.Model {
  /**
   * @remarks
   * The initial isolation duration after a node is isolated (e.g., 30 seconds). The isolation time is calculated as: k \\* base_ejection_time (with k initially set to 1). Each subsequent isolation increases the isolation time (k is incremented by 1), while consecutive healthy checks gradually decrease the isolation time (k is decremented by 1).
   * 
   * @example
   * 30
   */
  baseEjectionTime?: number;
  /**
   * @remarks
   * enable
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The panic threshold.
   * 
   * When the proportion of healthy nodes in the service is greater than the panic threshold, health checks take effect normally, and requests are only sent to healthy nodes, not to ejected nodes. When the proportion of healthy nodes in the service is less than or equal to the panic threshold, health checks are effectively disabled, and requests are sent to all nodes, including those that have been ejected nodes.
   * 
   * @example
   * 1
   */
  failurePercentageMinimumHosts?: number;
  /**
   * @remarks
   * When the request failure rate of a node reaches this threshold, the system triggers the isolation mechanism of the node.
   * 
   * @example
   * 80
   */
  failurePercentageThreshold?: number;
  /**
   * @remarks
   * The detection interval.
   * 
   * @example
   * 30
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      baseEjectionTime: 'baseEjectionTime',
      enable: 'enable',
      failurePercentageMinimumHosts: 'failurePercentageMinimumHosts',
      failurePercentageThreshold: 'failurePercentageThreshold',
      interval: 'interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseEjectionTime: 'number',
      enable: 'boolean',
      failurePercentageMinimumHosts: 'number',
      failurePercentageThreshold: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequestPorts extends $dara.Model {
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * catalog
   */
  name?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * TCP|UDP
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

export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The list of domain names or fixed addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The agent service configurations.
   */
  agentServiceConfig?: AgentServiceConfig;
  /**
   * @remarks
   * The AI service configurations.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * A DNS service address.
   */
  dnsServers?: string[];
  /**
   * @remarks
   * The health check configurations.
   */
  healthCheckConfig?: UpdateServiceRequestHealthCheckConfig;
  /**
   * @remarks
   * The health check threshold.
   * 
   * @example
   * 80
   */
  healthyPanicThreshold?: number;
  /**
   * @remarks
   * The passive health check configurations.
   */
  outlierDetectionConfig?: UpdateServiceRequestOutlierDetectionConfig;
  /**
   * @remarks
   * The port information.
   */
  ports?: UpdateServiceRequestPorts[];
  /**
   * @remarks
   * The service protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      agentServiceConfig: 'agentServiceConfig',
      aiServiceConfig: 'aiServiceConfig',
      dnsServers: 'dnsServers',
      healthCheckConfig: 'healthCheckConfig',
      healthyPanicThreshold: 'healthyPanicThreshold',
      outlierDetectionConfig: 'outlierDetectionConfig',
      ports: 'ports',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      agentServiceConfig: AgentServiceConfig,
      aiServiceConfig: AiServiceConfig,
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: UpdateServiceRequestHealthCheckConfig,
      healthyPanicThreshold: 'number',
      outlierDetectionConfig: UpdateServiceRequestOutlierDetectionConfig,
      ports: { 'type': 'array', 'itemType': UpdateServiceRequestPorts },
      protocol: 'string',
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
    if(Array.isArray(this.dnsServers)) {
      $dara.Model.validateArray(this.dnsServers);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(this.outlierDetectionConfig && typeof (this.outlierDetectionConfig as any).validate === 'function') {
      (this.outlierDetectionConfig as any).validate();
    }
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

