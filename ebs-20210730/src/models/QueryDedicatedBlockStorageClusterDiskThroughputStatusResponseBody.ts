// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the throughput after setting the throughput by SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * - SUCCESS: The throughput has been successfully set.
   * - RUNNING: The throughput is currently being set.
   * - WAIT(): The throughput is waiting to be set.
   * - FAIL(): The throughput setting has failed.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

