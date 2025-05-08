// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataCors extends $dara.Model {
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
   * The headers allowed.
   * 
   * @example
   * *
   */
  allowHeaders?: string;
  /**
   * @remarks
   * The methods allowed.
   * 
   * @example
   * GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH
   */
  allowMethods?: string;
  /**
   * @remarks
   * The origins allowed.
   * 
   * @example
   * *
   */
  allowOrigins?: string;
  /**
   * @remarks
   * The response headers.
   * 
   * @example
   * *
   */
  exposeHeaders?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The time unit.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The unit number.
   * 
   * @example
   * 1
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

