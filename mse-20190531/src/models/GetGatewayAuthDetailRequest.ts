// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthDetailRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * 2274
   */
  gatewayId?: number;
  /**
   * @example
   * gw-6f0dbd108a0249d2b675b3ef50b*****
   */
  gatewayUniqueId?: string;
  /**
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

