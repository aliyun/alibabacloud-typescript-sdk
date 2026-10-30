// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the route map.
   * 
   * @example
   * rm-abcdedfghij****
   */
  routeMapId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeMapId: 'RouteMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeMapId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

