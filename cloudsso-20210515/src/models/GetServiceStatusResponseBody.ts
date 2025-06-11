// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceStatusResponseBodyServiceStatus } from "./GetServiceStatusResponseBodyServiceStatus";


export class GetServiceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADADC31D-90EE-5459-99B0-D83DF07769A3
   */
  requestId?: string;
  /**
   * @remarks
   * The status information of CloudSSO.
   */
  serviceStatus?: GetServiceStatusResponseBodyServiceStatus;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceStatus: GetServiceStatusResponseBodyServiceStatus,
    };
  }

  validate() {
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

