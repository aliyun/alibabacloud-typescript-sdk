// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterRecoverTimeResponseBodyRestoreRanges extends $dara.Model {
  /**
   * @remarks
   * The beginning of the restorable time range.
   * 
   * @example
   * 2023-10-16T19:33:20Z
   */
  restoreBeginTime?: string;
  /**
   * @remarks
   * The end of the restorable time range.
   * 
   * @example
   * 2023-10-16T19:43:20Z
   */
  restoreEndTime?: string;
  /**
   * @remarks
   * The restoration method. Valid values:
   * * **PointInTime** (default): point-in-time restoration.
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
   * The list of cluster backup sets. A cluster backup contains the backup set of each node.
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

