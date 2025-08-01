// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteAuthRequestAuthJSON extends $dara.Model {
  /**
   * @remarks
   * The authentication type. If an empty string is passed, no authentication type is available. Valid values:
   * 
   * *   JWT
   * 
   * @example
   * JWT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateGatewayRouteAuthRequest extends $dara.Model {
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
   * The authentication configurations.
   * 
   * This parameter is required.
   */
  authJSON?: UpdateGatewayRouteAuthRequestAuthJSON;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 102
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-0adf3ad751284cc69fcf9669fba*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 109
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      authJSON: 'AuthJSON',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      authJSON: UpdateGatewayRouteAuthRequestAuthJSON,
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    if(this.authJSON && typeof (this.authJSON as any).validate === 'function') {
      (this.authJSON as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

