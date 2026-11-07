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
   * The unique identifier of the gateway. If both GatewayUniqueId and GatewayId are specified, GatewayId takes precedence.
   * 
   * @example
   * gw-5017305290e14centbrveca****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * ""
   */
  isWhite?: boolean;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * ""
   */
  resourceType?: string;
  /**
   * @remarks
   * The search content.
   * 
   * @example
   * 1.1.1.1
   */
  searchContent?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - ROUTE: searches by route. Set SearchContent to the route name.
   * 
   * - DOMAIN: searches by domain name. Set SearchContent to the domain name.
   * 
   * - IP: searches by specified IP address. Set SearchContent to the IP address.
   * 
   * @example
   * IP
   */
  searchType?: string;
  /**
   * @remarks
   * This parameter is not available.
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
   * The language of the response. Valid values: zh (Chinese, default) and en (English).
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * ""
   */
  descSort?: boolean;
  /**
   * @remarks
   * parse from filterParams
   */
  filterParams?: GatewayBlackWhiteListRequestFilterParams;
  /**
   * @remarks
   * This parameter is not available.
   * 
   * @example
   * ""
   */
  orderItem?: string;
  /**
   * @remarks
   * The page number. Valid values: integers greater than 0. Default value: 1.
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

