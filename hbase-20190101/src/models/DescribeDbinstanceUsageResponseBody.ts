// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2D841CE-D066-53E8-B9AC-3731DCC85397
   */
  requestId?: string;
  /**
   * @remarks
   * The disk usage of the instance, which includes the following parameters:
   * - disk_used: the disk usage amount.
   * - disk_total: the total disk capacity.
   * - usage_rate: the disk usage rate.
   * 
   * @example
   * {\\"disk_usage_record\\":{\\"disk_used\\":\\"0.9GB\\",\\"disk_total\\":\\"1156.1GB\\",\\"usage_rate\\":\\"1%\\"}}
   */
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

