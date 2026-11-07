// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteRequestFilterParams extends $dara.Model {
  /**
   * @remarks
   * Default service ID
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  defaultServiceId?: number;
  /**
   * @remarks
   * Domain ID
   * 
   * @example
   * 284
   */
  domainId?: number;
  /**
   * @remarks
   * Associated domain
   * 
   * @example
   * *.alites.com
   */
  domainName?: string;
  /**
   * @remarks
   * Gateway ID
   * 
   * @example
   * 81
   */
  gatewayId?: number;
  /**
   * @remarks
   * Gateway unique identifier ID
   * 
   * This parameter is required.
   * 
   * @example
   * gw-30a0106924c94bca8712ec4e79fc5acc
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Route name
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Route path
   * 
   * @example
   * /test
   */
  path?: string;
  /**
   * @remarks
   * Order (unused)
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * Route status:
   * 
   * - Unpublished: 0
   * 
   * - Publishing: 2
   * 
   * - Published: 3
   * 
   * - Editing (updates not published): 4
   * 
   * - Unpublishing: 5
   * 
   * - Unavailable: 6
   * 
   * @example
   * 3
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
   * Language type for returned information:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Sorting. This field is currently unavailable and being deprecated.
   * 
   * @example
   * false
   */
  descSort?: boolean;
  /**
   * @remarks
   * Filter conditions in the format {"key1":"value1"}
   */
  filterParams?: ListGatewayRouteRequestFilterParams;
  /**
   * @remarks
   * Sorting property.
   * 
   * @example
   * GmtCreate
   */
  orderItem?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of instances displayed per page (currently not in effect, queries all instances by default).
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

