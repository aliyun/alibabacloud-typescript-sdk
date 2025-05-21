// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud-native API Gateway instance.
   * 
   * @example
   * gw-cpv4sqdl*****
   */
  gatewayId?: string;
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
   * The page number to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxxe5rc6cvla
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The service source. Valid values:
   * 
   * *   MSE_NACOS: a service in an MSE Nacos instance
   * *   K8S: a service in a Kubernetes (K8s) cluster in Container Service for Kubernetes (ACK)
   * *   FC3: a service in Function Compute
   * *   VIP: a fixed address
   * *   DNS: a domain name
   * 
   * Enumerated values:
   * 
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
  sourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      sourceType: 'sourceType',
      sourceTypes: 'sourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sourceType: 'string',
      sourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

