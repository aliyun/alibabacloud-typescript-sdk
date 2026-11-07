// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The gateway type.
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
   * The instance ID.
   * 
   * @example
   * mse_ingresspre-cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource tag.
   * 
   * @example
   * [{"key":"tagkey","value":"tagvalue"}]
   */
  mseTag?: string;
  /**
   * @remarks
   * The gateway name.
   * 
   * @example
   * rutain-test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-7y2uye*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The VPC.
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
   * The language of the returned information. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The sorting order. This parameter is currently not used.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The filter parameters.
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
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances per page.
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

