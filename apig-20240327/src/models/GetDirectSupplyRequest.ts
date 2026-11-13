// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectSupplyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance for which to query direct-supply models.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

