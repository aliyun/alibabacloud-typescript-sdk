// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupTimesResponseBodyRestoreTime extends $dara.Model {
  /**
   * @remarks
   * Indicates the end time. The time is in the UNIX timestamp format. The time is in UTC. Unit: ms.
   * 
   * @example
   * 1568636922671
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates the start time. The time is in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * @example
   * 1568632853000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBackupTimesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 4780A19F-5ECB-4C56-AD20-966A3FF9DE5R
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates the information about the time range within which the data of the instance can be restored to a point in time.
   */
  restoreTime?: DescribeBackupTimesResponseBodyRestoreTime;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreTime: 'RestoreTime',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreTime: DescribeBackupTimesResponseBodyRestoreTime,
      success: 'boolean',
    };
  }

  validate() {
    if(this.restoreTime && typeof (this.restoreTime as any).validate === 'function') {
      (this.restoreTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

