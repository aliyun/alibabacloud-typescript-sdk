// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GatewayBlackWhiteListRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway. If this parameter is used together with the GatewayId parameter, the value of the GatewayId parameter is used.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  isWhite?: boolean;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  resourceType?: string;
  /**
   * @remarks
   * The content that you want to query.
   * 
   * @example
   * 1.1.1.1
   */
  searchContent?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * *   ROUTE: The list is queried by route. If the value of this parameter is ROUTE, set the SearchContent parameter to the route name.
   * *   DOMAIN: The list is queried by domain name. If the value of this parameter is DOMAIN, set the SearchContent parameter to the domain name.
   * *   IP: The list is queried by specified IP address. If the value of this parameter is IP, set the SearchContent parameter to the IP address.
   * 
   * @example
   * IP
   */
  searchType?: string;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      isWhite: 'IsWhite',
      resourceType: 'ResourceType',
      searchContent: 'SearchContent',
      searchType: 'SearchType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      isWhite: 'boolean',
      resourceType: 'string',
      searchContent: 'string',
      searchType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GatewayBlackWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  descSort?: boolean;
  /**
   * @remarks
   * The filter parameters.
   */
  filterParams?: GatewayBlackWhiteListRequestFilterParams;
  /**
   * @remarks
   * This parameter is unavailable for public use.
   * 
   * @example
   * ""
   */
  orderItem?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 1.
   * 
   * @example
   * 1
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
      filterParams: GatewayBlackWhiteListRequestFilterParams,
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

