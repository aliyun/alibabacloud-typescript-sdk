// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouteTargetGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8AA5CE21-2E6A-4530-BDF5-F055849476E6
   */
  requestId?: string;
  /**
   * @remarks
   * The instance ID of the route target group.
   * 
   * @example
   * rtg-xxxx
   */
  routeTargetGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeTargetGroupId: 'RouteTargetGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeTargetGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

