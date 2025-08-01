// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayRouteResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default service ID.
   * 
   * @example
   * 1
   */
  defaultServiceId?: number;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 125
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-5017305290e14cebbrvec4a5****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-07 18:07:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-12-30T06:41:52.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 12
   */
  id?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The matching rules.
   * 
   * @example
   * {\\"PathPredicates\\":{\\"Path\\":\\"/metas\\",\\"Type\\":\\"PRE\\",\\"IgnoreCase\\":false}}
   */
  predicates?: string;
  /**
   * @remarks
   * The sequence number of the route.
   * 
   * @example
   * 1
   */
  routeOrder?: number;
  /**
   * @remarks
   * The status of the route. Valid values:
   * 
   * *   0: unpublished
   * *   2: publishing
   * *   3: published
   * *   4: editing (updated but not published)
   * *   5: unpublishing
   * *   6: unavailable
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      defaultServiceId: 'DefaultServiceId',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      name: 'Name',
      predicates: 'Predicates',
      routeOrder: 'RouteOrder',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultServiceId: 'number',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      name: 'string',
      predicates: 'string',
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

export class DeleteGatewayRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: DeleteGatewayRouteResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADDD8AB7-8D1C-4697-A83E-410D2607****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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
      data: DeleteGatewayRouteResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

