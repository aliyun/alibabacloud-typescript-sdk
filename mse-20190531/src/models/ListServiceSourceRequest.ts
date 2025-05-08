// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceSourceRequest extends $dara.Model {
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
   * gw-c51a15c7ee934a4fb945ccf35fe1****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * Specifies the type of the returned service source. If this parameter is not specified, service sources of all types are returned. Valid values:
   * 
   * *   K8s
   * *   MSE
   * *   MSE_ZK
   * *   SAE
   * *   EDAS
   * 
   * @example
   * MSE
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

