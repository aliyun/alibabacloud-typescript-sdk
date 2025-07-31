// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterRecoverTimeResponseBodyRestoreRanges extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  restoreBeginTime?: string;
  /**
   * @remarks
   * The end of the time range to which data can be restored.
   * 
   * @example
   * 2023-10-16T19:43:20Z
   */
  restoreEndTime?: string;
  /**
   * @remarks
   * The method used to restore data. Valid values:
   * 
   * *   **PointInTime** (default): Data is restored based on point in time
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

export class DescribeClusterRecoverTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
  /**
   * @remarks
   * The cluster backup sets of the instance. A cluster backup file contains the backup sets of each node.
   */
  restoreRanges?: DescribeClusterRecoverTimeResponseBodyRestoreRanges[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreRanges: 'RestoreRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreRanges: { 'type': 'array', 'itemType': DescribeClusterRecoverTimeResponseBodyRestoreRanges },
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

