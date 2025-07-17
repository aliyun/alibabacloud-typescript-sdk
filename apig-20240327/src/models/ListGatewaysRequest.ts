// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewaysRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * owner
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
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
   * The instance ID. If you specify an ID, an exact search is performed.
   * 
   * @example
   * gw-cpv4sqdl****
   */
  gatewayId?: string;
  gatewayType?: string;
  /**
   * @remarks
   * The search keyword. A full match is performed. The search is case-insensitive.
   * 
   * @example
   * dev
   */
  keyword?: string;
  /**
   * @remarks
   * The instance name. If you specify a name, an exact search is performed.
   * 
   * @example
   * itemcenter-gateway
   */
  name?: string;
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
   * The number of entries per page.
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
   * rg-aekz3wes3hnre5a
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that you want to use for the search.
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

