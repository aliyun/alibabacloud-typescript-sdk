// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * The default service ID.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  defaultServiceId?: number;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 284
   */
  domainId?: number;
  /**
   * @remarks
   * The associated domain name.
   * 
   * @example
   * *.alites.com
   */
  domainName?: string;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-30a0106924c94bca8712ec4e79fc5acc
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The name of the gateway.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * The order.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'DefaultServiceId',
      domainId: 'DomainId',
      domainName: 'DomainName',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      path: 'Path',
      routeOrder: 'RouteOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'number',
      domainId: 'number',
      domainName: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      name: 'string',
      path: 'string',
      routeOrder: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRouteRequest extends $dara.Model {
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
   * Specifies whether to enable sorting. This parameter is unavailable.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * The parameters that specify filter conditions. The parameters are in the format of {"key1":"value1"}.
   */
  filterParams?: ListGatewayRouteRequestFilterParams;
  /**
   * @remarks
   * The item based on which entries are sorted.
   * 
   * @example
   * GmtCreate
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
      filterParams: ListGatewayRouteRequestFilterParams,
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

