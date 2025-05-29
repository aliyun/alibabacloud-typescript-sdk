// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenRouteMapResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62172DD5-6BAC-45DF-8D44-56SDF467BAC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the routing policy.
   * 
   * @example
   * cenrmap-w4yf7toozfol3q****
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

