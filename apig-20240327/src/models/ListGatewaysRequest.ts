// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * zhangsan
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway ID for exact match query.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The keyword for full match search. Case-insensitive.
   * 
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @remarks
   * The gateway name for exact match query.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
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
   * The page size.
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
   * rg-aekzq6bzz5uyg2q
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: ListGatewaysRequestTag[];
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      gatewayType: 'gatewayType',
      keyword: 'keyword',
      name: 'name',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayType: 'string',
      keyword: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListGatewaysRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

