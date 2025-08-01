// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteCORSRequestCorsJSON extends $dara.Model {
  /**
   * @remarks
   * The credentials allowed.
   * 
   * @example
   * true
   */
  allowCredentials?: boolean;
  /**
   * @remarks
   * The request headers allowed.
   * 
   * @example
   * content-type
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The HTTP methods allowed.
   * 
   * @example
   * GET,POST
   */
  allowMethods?: string;
  /**
   * @remarks
   * The origins from which access is allowed.
   * 
   * @example
   * https://api.aliyun-inc.com/
   */
  allowOrigins?: string;
  /**
   * @remarks
   * The response headers allowed.
   * 
   * @example
   * *
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The status of the policy.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The unit of time.
   * 
   * @example
   * h
   */
  timeUnit?: string;
  /**
   * @remarks
   * The value of time.
   * 
   * @example
   * 24
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      allowCredentials: 'AllowCredentials',
      allowHeaders: 'AllowHeaders',
      allowMethods: 'AllowMethods',
      allowOrigins: 'AllowOrigins',
      exposeHeaders: 'ExposeHeaders',
      status: 'Status',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCredentials: 'boolean',
      allowHeaders: 'string',
      allowMethods: 'string',
      allowOrigins: 'string',
      exposeHeaders: 'string',
      status: 'string',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRouteCORSRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. In compliance with [RFC 7231](https://tools.ietf.org/html/rfc7231), the backend service must return a response based on the language used by the user.
   * 
   * *   No default value.
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The information about the CORS policy.
   */
  corsJSON?: UpdateGatewayRouteCORSRequestCorsJSON;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 85
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-f70a6ddf2f0941a2bb997b2d16028f37
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the associated record.
   * 
   * @example
   * 55
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      corsJSON: 'CorsJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      corsJSON: UpdateGatewayRouteCORSRequestCorsJSON,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    if(this.corsJSON && typeof (this.corsJSON as any).validate === 'function') {
      (this.corsJSON as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

