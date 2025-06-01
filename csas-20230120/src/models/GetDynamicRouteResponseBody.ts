// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDynamicRouteResponseBodyDynamicRoute } from "./GetDynamicRouteResponseBodyDynamicRoute";


export class GetDynamicRouteResponseBody extends $dara.Model {
  dynamicRoute?: GetDynamicRouteResponseBodyDynamicRoute;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoute: 'DynamicRoute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoute: GetDynamicRouteResponseBodyDynamicRoute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dynamicRoute && typeof (this.dynamicRoute as any).validate === 'function') {
      (this.dynamicRoute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

