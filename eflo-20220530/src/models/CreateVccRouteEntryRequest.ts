// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVccRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 192.168.98.112/28
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      regionId: 'RegionId',
      vccId: 'VccId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      regionId: 'string',
      vccId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

