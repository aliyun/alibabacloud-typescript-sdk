// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class UpdateServiceRequestHealthCheckConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable health checks for the service.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of normal HTTP status codes returned in responses. This parameter is required when the protocol is HTTP.
   */
  expectedStatuses?: string[];
  /**
   * @remarks
   * The healthy threshold for health checks.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The domain name for health checks. This parameter is optional and can be configured when the protocol is HTTP.
   * 
   * @example
   * dev.itemcener.com
   */
  httpHost?: string;
  /**
   * @remarks
   * The request path for health checks. This parameter is required when the protocol is HTTP.
   * 
   * @example
   * /healthz
   */
  httpPath?: string;
  /**
   * @remarks
   * The health check interval. Unit: seconds.
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * The protocol used for health checks.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The response timeout period for health checks. Unit: seconds.
   * 
   * @example
   * 2
   */
  timeout?: number;
  /**
   * @remarks
   * The unhealthy threshold for health checks.
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
   * The initial isolation duration after a node is ejected, such as 30 seconds. The isolation time is calculated as k × base_ejection_time, where the initial value of k is 1. The isolation time increases with each ejection by incrementing k by 1, and gradually decreases when consecutive health checks succeed by decrementing k by 1.
   * 
   * @example
   * 30
   */
  baseEjectionTime?: number;
  /**
   * @remarks
   * Specifies whether to enable outlier detection.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The panic threshold. When the proportion of healthy nodes in the service is greater than the panic threshold, health checks take effect normally, and requests are sent only to healthy nodes, not to ejected nodes. When the proportion of healthy nodes is less than or equal to the panic threshold, health checks are effectively disabled, and requests are sent to all nodes, including ejected ones.
   * 
   * @example
   * 1
   */
  failurePercentageMinimumHosts?: number;
  /**
   * @remarks
   * The failure rate threshold. When the proportion of failed requests for a node reaches this threshold, the system triggers the ejection mechanism for the node.
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
   * The port number.
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
   * The list of domain names or static addresses.
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
   * The list of KMS reference names to append. This parameter is only available in Reference mode. KMS content is not read.
   * 
   * @example
   * ["my-kms-ref"]
   */
  apiKeyReferencesToAdd?: string[];
  /**
   * @remarks
   * The list of API keys to append. This parameter is only available in Custom API Key mode for AI services. It must be used with fully masked apiKeys or omitted apiKeys. Existing keys are not read or returned.
   * 
   * @example
   * ["sk-xxxxxxxx"]
   */
  apiKeysToAdd?: string[];
  /**
   * @remarks
   * The DNS server addresses.
   */
  dnsServers?: string[];
  /**
   * @remarks
   * The expected configuration revision for conditional updates of the AI service. If this parameter is not provided, backward compatibility with legacy calls is maintained. If the version changes, the Conflict.ServiceConfigurationChanged error is returned.
   * 
   * @example
   * 7e4f52a9b0c34d16a268e913f5c2087b
   */
  expectedConfigRevision?: string;
  /**
   * @remarks
   * The health check configuration of the service.
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
   * The model provider ID.
   * 
   * @example
   * mp-xxx****
   */
  modelProviderId?: string;
  /**
   * @remarks
   * The parameter settings for passive health checks.
   */
  outlierDetectionConfig?: UpdateServiceRequestOutlierDetectionConfig;
  /**
   * @remarks
   * The port information.
   */
  ports?: UpdateServiceRequestPorts[];
  /**
   * @remarks
   * The protocol of the service.
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
      apiKeyReferencesToAdd: 'apiKeyReferencesToAdd',
      apiKeysToAdd: 'apiKeysToAdd',
      dnsServers: 'dnsServers',
      expectedConfigRevision: 'expectedConfigRevision',
      healthCheckConfig: 'healthCheckConfig',
      healthyPanicThreshold: 'healthyPanicThreshold',
      modelProviderId: 'modelProviderId',
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
      apiKeyReferencesToAdd: { 'type': 'array', 'itemType': 'string' },
      apiKeysToAdd: { 'type': 'array', 'itemType': 'string' },
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      expectedConfigRevision: 'string',
      healthCheckConfig: UpdateServiceRequestHealthCheckConfig,
      healthyPanicThreshold: 'number',
      modelProviderId: 'string',
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
    if(Array.isArray(this.apiKeyReferencesToAdd)) {
      $dara.Model.validateArray(this.apiKeyReferencesToAdd);
    }
    if(Array.isArray(this.apiKeysToAdd)) {
      $dara.Model.validateArray(this.apiKeysToAdd);
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

