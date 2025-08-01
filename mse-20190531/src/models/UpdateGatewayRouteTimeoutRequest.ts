// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteTimeoutRequestTimeoutJSON extends $dara.Model {
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
   * The unit of time. A value of s indicates seconds.
   * 
   * @example
   * s
   */
  timeUnit?: string;
  /**
   * @remarks
   * The value of the timeout period.
   * 
   * @example
   * 1
   */
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateGatewayRouteTimeoutRequest extends $dara.Model {
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
   * gw-533290d279c1405f9628c64f7c8272ee
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the associated record.
   * 
   * @example
   * 567
   */
  id?: number;
  /**
   * @remarks
   * The timeout period.
   */
  timeoutJSON?: UpdateGatewayRouteTimeoutRequestTimeoutJSON;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      timeoutJSON: 'TimeoutJSON',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
      timeoutJSON: UpdateGatewayRouteTimeoutRequestTimeoutJSON,
    };
  }

  validate() {
    if(this.timeoutJSON && typeof (this.timeoutJSON as any).validate === 'function') {
      (this.timeoutJSON as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

