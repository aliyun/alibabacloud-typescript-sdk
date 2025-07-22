// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRouteEntryRequest extends $dara.Model {
  destinationCidrBlock?: string;
  nextHopId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  routeEntryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopId: 'NextHopId',
      regionId: 'RegionId',
      routeEntryId: 'RouteEntryId',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopId: 'string',
      regionId: 'string',
      routeEntryId: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

