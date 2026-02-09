// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class CreateServiceRequestServiceConfigsValidationOptions extends $dara.Model {
  /**
   * @remarks
   * Skip AI chat completion verification
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
   * The list of domain names or fixed IP addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * Agent service configuration
   */
  agentServiceConfig?: AgentServiceConfig;
  /**
   * @remarks
   * The AI service configurations.
   */
  aiServiceConfig?: AiServiceConfig;
  /**
   * @remarks
   * The list of DNS service addresses.
   */
  dnsServers?: string[];
  /**
   * @remarks
   * Express type
   * 
   * @example
   * Standard
   */
  expressType?: string;
  /**
   * @remarks
   * The service group name. This parameter is required if sourceType is set to MSE_NACOS.
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
   * The service namespace. This parameter is required when sourceType is set to K8S or MSE_NACOS.
   * 
   * *   If sourceType is set to K8S, this parameter specifies the namespace where the K8s service resides.
   * *   If sourceType is set to MSE_NACOS, this parameter specifies a namespace in Nacos.
   * 
   * This parameter is required if sourceType is set to K8S or MSE_NACOS.
   * 
   * @example
   * PUBLIC
   */
  namespace?: string;
  /**
   * @remarks
   * The function version/alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * Service source ID
   * 
   * @example
   * nacos-instance-001
   */
  sourceId?: string;
  /**
   * @remarks
   * Validation options
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
   * The gateway instance ID.
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
   * The list of service configurations.
   */
  serviceConfigs?: CreateServiceRequestServiceConfigs[];
  /**
   * @remarks
   * The service source type. Valid values:
   * 
   * *   MSE_NACOS: MSE Nacos instance services
   * *   K8S: Container Service for Kubernetes (ACK) cluster services
   * *   VIP: fixed IP addresses
   * *   DNS: Domain Name System (DNS) domains
   * *   FC3: Function Compute services
   * *   SAE_K8S_SERVICE: Serverless App Engine (SAE) Kubernetes services
   * 
   * Valid values:
   * 
   * *   SAE_K8S_SERVICE
   * *   K8S
   * *   FC3
   * *   DNS
   * *   VIP
   * *   MSE_NACOS
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * clientToken
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

