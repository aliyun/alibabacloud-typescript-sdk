// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVccRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * Destination CIDR block
   * 
   * @example
   * 172.16.199.128/25
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
  /**
   * @remarks
   * The ID of the route entry.
   * 
   * @example
   * vcc-rte-5cey1sap
   */
  vccRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      regionId: 'RegionId',
      vccId: 'VccId',
      vccRouteEntryId: 'VccRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      regionId: 'string',
      vccId: 'string',
      vccRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

