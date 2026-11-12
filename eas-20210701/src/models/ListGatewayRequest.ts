// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRequest extends $dara.Model {
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
   * The ID of the private gateway. For information about how to obtain the ID of a private gateway, see the private_gateway_id field in the response of the ListResources operation.
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
   * Specifies whether Internet access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * The label used to filter gateways.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  label?: { [key: string]: string };
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
   * The page number of the gateway list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries to return per page in a paged query. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. For information about how to obtain the ID of a resource group, see the ResourceId field in the response of the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  /**
   * @remarks
   * The field used for sorting.
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
      label: 'Label',
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
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceName: 'string',
      sort: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.label) {
      $dara.Model.validateMap(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

