// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRecoverTimeResponseBodyRestoreRanges extends $dara.Model {
  /**
   * @remarks
   * The start time of the restorable time range. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC time).
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  restoreBeginTime?: string;
  /**
   * @remarks
   * The end time of the restorable time range. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC time).
   * 
   * @example
   * 2023-10-16T19:43:20Z
   */
  restoreEndTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * * PointInTime: point-in-time recovery. This is the default value.
   * 
   * @example
   * PointInTime
   */
  restoreType?: string;
  static names(): { [key: string]: string } {
    return {
      restoreBeginTime: 'RestoreBeginTime',
      restoreEndTime: 'RestoreEndTime',
      restoreType: 'RestoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      restoreBeginTime: 'string',
      restoreEndTime: 'string',
      restoreType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRecoverTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8CA8312-530A-413A-9129-F2BB32A8D404
   */
  requestId?: string;
  /**
   * @remarks
   * The list of restorable time ranges. This list includes all time ranges available for point-in-time recovery.
   */
  restoreRanges?: DescribeInstanceRecoverTimeResponseBodyRestoreRanges[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreRanges: 'RestoreRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreRanges: { 'type': 'array', 'itemType': DescribeInstanceRecoverTimeResponseBodyRestoreRanges },
    };
  }

  validate() {
    if(Array.isArray(this.restoreRanges)) {
      $dara.Model.validateArray(this.restoreRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

