// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * gw-5017305290e14cebbrvec4a5****
   */
  gatewayUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayUniqueId: 'GatewayUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

