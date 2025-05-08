// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SelectGatewaySlbRequest extends $dara.Model {
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
   * @example
   * gw-492af9b04bb4474cae9d645be850****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * test-slb
   */
  name?: string;
  /**
   * @remarks
   * The type of the SLB instance.
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      name: 'string',
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

