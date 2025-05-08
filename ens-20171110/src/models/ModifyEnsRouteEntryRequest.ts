// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEnsRouteEntryRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rte-5****
   */
  routeEntryId?: string;
  /**
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

