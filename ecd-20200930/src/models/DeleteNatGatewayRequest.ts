// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  natGatewayId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

