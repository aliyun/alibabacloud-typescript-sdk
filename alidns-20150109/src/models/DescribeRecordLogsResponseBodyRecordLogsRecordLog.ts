// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecordLogsResponseBodyRecordLogsRecordLog extends $dara.Model {
  /**
   * @remarks
   * The operation that you performed.
   */
  action?: string;
  /**
   * @remarks
   * The time when you performed the operation.
   * 
   * @example
   * 2015-12-12T09:23Z
   */
  actionTime?: string;
  /**
   * @remarks
   * The time when you performed the operation. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 134514540000
   */
  actionTimestamp?: number;
  /**
   * @remarks
   * The IP address of the operator.
   * 
   * @example
   * 182.92.253.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The operation message.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      actionTimestamp: 'ActionTimestamp',
      clientIp: 'ClientIp',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'string',
      actionTimestamp: 'number',
      clientIp: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

