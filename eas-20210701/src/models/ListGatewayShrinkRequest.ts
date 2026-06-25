// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the private gateway. You can obtain the ID from the private_gateway_id field in the response of the ListResources operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The type of the gateway.
   * 
   * @example
   * Application
   */
  gatewayType?: string;
  /**
   * @remarks
   * Specifies whether to enable access over the public network.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * Filter by tag.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the gateway list to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of gateways to return on each page. The default value is 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. You can obtain the ID from the ResourceId field in the response of the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The status of the gateway.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gatewayType: 'GatewayType',
      internetEnabled: 'InternetEnabled',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceName: 'ResourceName',
      sort: 'Sort',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      gatewayType: 'string',
      internetEnabled: 'boolean',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceName: 'string',
      sort: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

