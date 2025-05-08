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

