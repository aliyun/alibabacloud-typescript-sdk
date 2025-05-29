// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRouteEntryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 835E7F4B-B380-4E0F-96A5-6EA572388047
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * rte-75eg4jprkvk0pw****
   */
  transitRouterRouteEntryId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterRouteEntryId: 'TransitRouterRouteEntryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterRouteEntryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

