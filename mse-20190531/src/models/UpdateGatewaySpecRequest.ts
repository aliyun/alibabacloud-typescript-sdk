// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewaySpecRequest extends $dara.Model {
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
   * This parameter is required.
   * 
   * @example
   * gw-c70622ff52fe49beb29bea9a6f52****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  replica?: number;
  /**
   * @remarks
   * The node specifications of the gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * MSE_GTW_4_8_200_c
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      gatewayUniqueId: 'GatewayUniqueId',
      replica: 'Replica',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      gatewayUniqueId: 'string',
      replica: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

