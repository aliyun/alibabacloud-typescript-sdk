// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentServiceConfig } from "./AgentServiceConfig";
import { AiServiceConfig } from "./AiServiceConfig";


export class CreateServiceRequestServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The list of domain names or fixed addresses.
   */
  addresses?: string[];
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
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      agentServiceConfig: 'agentServiceConfig',
      aiServiceConfig: 'aiServiceConfig',
      dnsServers: 'dnsServers',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      qualifier: 'qualifier',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      agentServiceConfig: AgentServiceConfig,
      aiServiceConfig: AiServiceConfig,
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      qualifier: 'string',
      sourceId: 'string',
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
   * The service source. Valid values:
   * 
   * *   MSE_NACOS: a service in an MSE Nacos instance
   * *   K8S: a service in a Kubernetes (K8s) cluster in Container Service for Kubernetes (ACK)
   * *   VIP: a fixed IP address
   * *   DNS: a Domain Name System (DNS) domain name
   * *   FC3: a service in Function Compute
   * *   SAE_K8S_SERVICE: a service in a K8s cluster in Serverless App Engine (SAE)
   * 
   * Enumerated values:
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
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      resourceGroupId: 'resourceGroupId',
      serviceConfigs: 'serviceConfigs',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      resourceGroupId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': CreateServiceRequestServiceConfigs },
      sourceType: 'string',
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

