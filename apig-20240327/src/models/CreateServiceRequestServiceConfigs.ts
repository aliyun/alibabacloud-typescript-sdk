// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiServiceConfig } from "./AiServiceConfig";


export class CreateServiceRequestServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The list of domain names or fixed addresses.
   */
  addresses?: string[];
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
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      aiServiceConfig: 'aiServiceConfig',
      dnsServers: 'dnsServers',
      groupName: 'groupName',
      name: 'name',
      namespace: 'namespace',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      aiServiceConfig: AiServiceConfig,
      dnsServers: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      qualifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
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

