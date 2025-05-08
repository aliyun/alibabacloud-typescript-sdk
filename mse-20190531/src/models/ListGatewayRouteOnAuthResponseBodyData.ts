// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteOnAuthResponseBodyDataRoutePredicates } from "./ListGatewayRouteOnAuthResponseBodyDataRoutePredicates";


export class ListGatewayRouteOnAuthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * 235
   */
  domainId?: number;
  /**
   * @remarks
   * The domain IDs.
   */
  domainIdList?: number[];
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * 123.com
   */
  domainName?: string;
  /**
   * @remarks
   * The domain names.
   */
  domainNameList?: string[];
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 399
   */
  gatewayId?: string;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * ceshi
   */
  name?: string;
  /**
   * @remarks
   * The information about route matching.
   */
  routePredicates?: ListGatewayRouteOnAuthResponseBodyDataRoutePredicates;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainIdList: 'DomainIdList',
      domainName: 'DomainName',
      domainNameList: 'DomainNameList',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      name: 'Name',
      routePredicates: 'RoutePredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'number',
      domainIdList: { 'type': 'array', 'itemType': 'number' },
      domainName: 'string',
      domainNameList: { 'type': 'array', 'itemType': 'string' },
      gatewayId: 'string',
      gatewayUniqueId: 'string',
      id: 'number',
      name: 'string',
      routePredicates: ListGatewayRouteOnAuthResponseBodyDataRoutePredicates,
    };
  }

  validate() {
    if(Array.isArray(this.domainIdList)) {
      $dara.Model.validateArray(this.domainIdList);
    }
    if(Array.isArray(this.domainNameList)) {
      $dara.Model.validateArray(this.domainNameList);
    }
    if(this.routePredicates && typeof (this.routePredicates as any).validate === 'function') {
      (this.routePredicates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

