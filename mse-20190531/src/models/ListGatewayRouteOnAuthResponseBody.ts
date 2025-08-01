// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates extends $dara.Model {
  /**
   * @remarks
   * The path.
   * 
   * @example
   * /api
   */
  path?: string;
  /**
   * @remarks
   * The matching type.
   * 
   * @example
   * PRE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
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

export class ListGatewayRouteOnAuthResponseBodyDataRoutePredicates extends $dara.Model {
  /**
   * @remarks
   * The information about route matching.
   */
  pathPredicates?: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates;
  static names(): { [key: string]: string } {
    return {
      pathPredicates: 'PathPredicates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicates: ListGatewayRouteOnAuthResponseBodyDataRoutePredicatesPathPredicates,
    };
  }

  validate() {
    if(this.pathPredicates && typeof (this.pathPredicates as any).validate === 'function') {
      (this.pathPredicates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListGatewayRouteOnAuthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListGatewayRouteOnAuthResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58E06A0A-BD2C-47A0-99C2-B100F353****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListGatewayRouteOnAuthResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

