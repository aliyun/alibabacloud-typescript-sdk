// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNatGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcefully delete the NAT instance.
   * 
   * @example
   * true
   */
  forceDelete?: boolean;
  /**
   * @remarks
   * The ID of the NAT gateway that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      forceDelete: 'ForceDelete',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDelete: 'boolean',
      natGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

