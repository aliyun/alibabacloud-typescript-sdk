// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHealthCheckStatusResponseBodyHealthCheckStatus } from "./DescribeHealthCheckStatusResponseBodyHealthCheckStatus";


export class DescribeHealthCheckStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the health status of the origin server.
   */
  healthCheckStatus?: DescribeHealthCheckStatusResponseBodyHealthCheckStatus[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DE9FF9E1-569C-4B6C-AB6A-0F6D927BB27C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      healthCheckStatus: 'HealthCheckStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckStatus: { 'type': 'array', 'itemType': DescribeHealthCheckStatusResponseBodyHealthCheckStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthCheckStatus)) {
      $dara.Model.validateArray(this.healthCheckStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

