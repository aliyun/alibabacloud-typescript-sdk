// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class CreateServiceRequestServiceConfigsValidationOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip AI chat completion verification.
   */
  skipVerifyAIChatCompletion?: boolean;
  static names(): { [key: string]: string } {
    return {
      skipVerifyAIChatCompletion: 'skipVerifyAIChatCompletion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skipVerifyAIChatCompletion: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequestServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The list of domain names or fixed addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The Agent service configuration. This parameter is required when sourceType is set to AGENT.
   */
  agentServiceConfig?: AgentServiceConfig;
  /**
   * @remarks
   * The AI service configuration.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * The list of DNS server addresses.
   */
  dnsServers?: string[];
  /**
   * @remarks
   * The service expression type that identifies the special type or mode of the service.
   * 
   * @example
   * Standard
   */
  expressType?: string;
  /**
   * @remarks
   * The service group name. This parameter is required when sourceType is set to MSE_NACOS.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
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
   * - If sourceType is set to K8S, this parameter specifies the namespace of the Kubernetes service.
   * - If sourceType is set to MSE_NACOS, this parameter specifies the namespace in Nacos.
   * 
   * This parameter is required when sourceType is set to K8S or MSE_NACOS.
   * 
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The service source ID. This parameter is required in multi-Nacos instance scenarios.
   * 
   * @example
   * nacos-instance-001
   */
  sourceId?: string;
  /**
   * @remarks
   * The validation options for service verification configuration.
   */
  validationOptions?: CreateServiceRequestServiceConfigsValidationOptions;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      agentServiceConfig: 'agentServiceConfig',
      aiServiceConfig: 'aiServiceConfig',
      dnsServers: 'dnsServers',
      expressType: 'expressType',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      qualifier: 'qualifier',
      sourceId: 'sourceId',
      validationOptions: 'validationOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      agentServiceConfig: AgentServiceConfig,
      aiServiceConfig: AiServiceConfig,
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      expressType: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      qualifier: 'string',
      sourceId: 'string',
      validationOptions: CreateServiceRequestServiceConfigsValidationOptions,
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
    if(this.validationOptions && typeof (this.validationOptions as any).validate === 'function') {
      (this.validationOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cq7l5s5lhtg***
   */
  gatewayId?: string;
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
   * The list of service configurations. At least one service configuration is required.
   */
  serviceConfigs?: CreateServiceRequestServiceConfigs[];
  /**
   * @remarks
   * The service source. Valid values:
   * - MSE_NACOS: a service in MSE Nacos.
   * - K8S: a service in a Kubernetes cluster of Container Service.
   * - VIP: a fixed address service.
   * - DNS: a DNS domain name service.
   * - FC3: a service in Function Compute.
   * - SAE_K8S_SERVICE: an SAE Kubernetes service.
   * - AI: an AI service.
   * - AGENT: an Agent service.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * xxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      serviceConfigs: 'serviceConfigs',
      sourceType: 'sourceType',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      resourceGroupId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': CreateServiceRequestServiceConfigs },
      sourceType: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

