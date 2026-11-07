// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * * zh: Chinese. This is the default value.
   * * en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The gateway ID. Specify either this parameter or GatewayUniqueId.
   * 
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway. Specify either this parameter or GatewayId. If both are specified, GatewayUniqueId takes precedence.
   * 
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * 1100
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

