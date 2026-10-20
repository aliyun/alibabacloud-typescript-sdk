// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnsRouteEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the route entry. The description must be 1 to 256 characters in length and cannot start with http\\:// or https\\://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom route.
   * 
   * This parameter is required.
   * 
   * @example
   * rte-5****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  routeEntryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      routeEntryId: 'string',
      routeEntryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

