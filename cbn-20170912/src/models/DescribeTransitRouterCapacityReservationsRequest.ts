// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouterCapacityReservationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-uf6llz2286805i44g****
   */
  transitRouterId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      transitRouterId: 'TransitRouterId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      transitRouterId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

