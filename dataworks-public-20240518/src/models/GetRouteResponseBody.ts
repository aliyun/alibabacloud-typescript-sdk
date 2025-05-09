// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRouteResponseBodyRoute } from "./GetRouteResponseBodyRoute";


export class GetRouteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the route.
   */
  route?: GetRouteResponseBodyRoute;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      route: 'Route',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      route: GetRouteResponseBodyRoute,
      success: 'boolean',
    };
  }

  validate() {
    if(this.route && typeof (this.route as any).validate === 'function') {
      (this.route as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

