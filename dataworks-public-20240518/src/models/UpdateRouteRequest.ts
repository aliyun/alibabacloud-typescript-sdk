// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRouteRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The route ID of the network resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

