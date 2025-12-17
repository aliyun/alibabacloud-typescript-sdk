// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class UpdateServiceRequestHealthCheckConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  expectedStatuses?: string[];
  /**
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @example
   * dev.itemcener.com
   */
  httpHost?: string;
  /**
   * @example
   * /healthz
   */
  httpPath?: string;
  /**
   * @example
   * 2
   */
  interval?: number;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @example
   * 2
   */
  timeout?: number;
  /**
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
  baseEjectionTime?: number;
  enable?: boolean;
  failurePercentageMinimumHosts?: number;
  failurePercentageThreshold?: number;
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
  name?: string;
  port?: number;
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
  addresses?: string[];
  agentServiceConfig?: AgentServiceConfig;
  aiServiceConfig?: AiServiceConfig;
  dnsServers?: string[];
  healthCheckConfig?: UpdateServiceRequestHealthCheckConfig;
  healthyPanicThreshold?: number;
  outlierDetectionConfig?: UpdateServiceRequestOutlierDetectionConfig;
  ports?: UpdateServiceRequestPorts[];
  /**
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

