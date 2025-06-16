// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishVpcRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121.41.165.123/32
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
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

