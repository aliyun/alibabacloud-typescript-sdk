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

