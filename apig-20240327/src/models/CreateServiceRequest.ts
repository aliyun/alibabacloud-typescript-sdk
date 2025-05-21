// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceRequestServiceConfigs } from "./CreateServiceRequestServiceConfigs";


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

