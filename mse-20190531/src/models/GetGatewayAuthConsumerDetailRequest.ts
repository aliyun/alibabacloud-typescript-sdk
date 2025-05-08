// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthConsumerDetailRequest extends $dara.Model {
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
   * The unique ID of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-1a4ab101d5924b6f92c5ec98a84*****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
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

