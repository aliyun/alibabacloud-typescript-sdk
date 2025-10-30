// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate extends $dara.Model {
  /**
   * @remarks
   * The route URL.
   * 
   * @example
   * /Path
   */
  path?: string;
  /**
   * @remarks
   * The type of the protection rule.
   * 
   * @example
   * Header
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

export class ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate extends $dara.Model {
  /**
   * @remarks
   * The path matching rule.
   */
  pathPredicate?: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate;
  static names(): { [key: string]: string } {
    return {
      pathPredicate: 'PathPredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pathPredicate: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicatePathPredicate,
    };
  }

  validate() {
    if(this.pathPredicate && typeof (this.pathPredicate as any).validate === 'function') {
      (this.pathPredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGatewayRoutesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * 16933
   */
  routeId?: number;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * test-route
   */
  routeName?: string;
  /**
   * @remarks
   * The routing rule.
   */
  routePredicate?: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate;
  static names(): { [key: string]: string } {
    return {
      routeId: 'RouteId',
      routeName: 'RouteName',
      routePredicate: 'RoutePredicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeId: 'number',
      routeName: 'string',
      routePredicate: ListSwimmingLaneGatewayRoutesResponseBodyDataRoutePredicate,
    };
  }

  validate() {
    if(this.routePredicate && typeof (this.routePredicate as any).validate === 'function') {
      (this.routePredicate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwimmingLaneGatewayRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Responses.
   */
  data?: ListSwimmingLaneGatewayRoutesResponseBodyData[];
  /**
   * @remarks
   * The status code. Value values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * Additional information. Valid values:
   * 
   * *   The error message returned because the request is normal and **success** is returned.
   * *   If the request is abnormal, the specific exception error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**: The configurations were obtained.
   * *   **false**: The configurations failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace. This parameter is used to query the exact call information.
   * 
   * @example
   * ac1a0b2215622246421415014e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSwimmingLaneGatewayRoutesResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

