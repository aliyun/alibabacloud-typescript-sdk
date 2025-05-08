// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayRequest extends $dara.Model {
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
   * Specifies whether to delete the SLB instance purchased for the gateway when you delete the gateway.
   * 
   * @example
   * true
   */
  deleteSlb?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-0fe488252dc44d55a9dd57875193a1d7
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      deleteSlb: 'DeleteSlb',
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      deleteSlb: 'boolean',
      gatewayUniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

