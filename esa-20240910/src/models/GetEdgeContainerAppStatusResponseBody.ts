// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppStatusResponseBodyAppStatus } from "./GetEdgeContainerAppStatusResponseBodyAppStatus";


export class GetEdgeContainerAppStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the application.
   */
  appStatus?: GetEdgeContainerAppStatusResponseBodyAppStatus;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247B78
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: GetEdgeContainerAppStatusResponseBodyAppStatus,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appStatus && typeof (this.appStatus as any).validate === 'function') {
      (this.appStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

