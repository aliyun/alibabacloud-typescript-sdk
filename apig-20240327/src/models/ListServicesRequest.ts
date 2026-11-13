// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud-native API gateway.
   * 
   * @example
   * gw-cpv4sqdl*****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the service for an exact match.
   * 
   * @example
   * user-service
   */
  name?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxxe5rc6cvla
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The source type of the service. Valid values:
   * - MSE_NACOS: services from Microservices Engine (MSE) Nacos.
   * - K8S: services from Kubernetes clusters in Container Service for Kubernetes.
   * - FC3: services from Function Compute.
   * - VIP: services from fixed addresses.
   * - DNS: services from domain names.
   * 
   * @example
   * MSE_NACOS
   */
  sourceType?: string;
  /**
   * @remarks
   * The list of service source types.
   * 
   * @example
   * K8S, FC3
   */
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

