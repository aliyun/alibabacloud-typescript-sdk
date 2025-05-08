// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnsRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the route that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * rte-8vbmb2890wiret5maqq25
   */
  routeEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      routeEntryId: 'RouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

