// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The type of the gateway.
   * 
   * @example
   * Ingress
   */
  gatewayType?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse_ingresspre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The tag of the instance.
   * 
   * @example
   * [{"key":"tagkey","value":"tagvalue"}]
   */
  mseTag?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * rutain-test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-7y2uye*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp13hhyjntbab7w****
   */
  vpc?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayType: 'GatewayType',
      gatewayUniqueId: 'GatewayUniqueId',
      instanceId: 'InstanceId',
      mseTag: 'MseTag',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayType: 'string',
      gatewayUniqueId: 'string',
      instanceId: 'string',
      mseTag: 'string',
      name: 'string',
      resourceGroupId: 'string',
      vpc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to enable the sorting feature. This feature is not available.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The details of parameters.
   */
  filterParams?: ListGatewayRequestFilterParams;
  /**
   * @remarks
   * The order information.
   * 
   * @example
   * {}
   */
  orderItem?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      descSort: 'DescSort',
      filterParams: 'FilterParams',
      orderItem: 'OrderItem',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      descSort: 'boolean',
      filterParams: ListGatewayRequestFilterParams,
      orderItem: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.filterParams && typeof (this.filterParams as any).validate === 'function') {
      (this.filterParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

