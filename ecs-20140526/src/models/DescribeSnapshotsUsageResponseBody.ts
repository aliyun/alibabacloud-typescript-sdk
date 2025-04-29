// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of snapshots stored in the current region.
   * 
   * @example
   * 5
   */
  snapshotCount?: number;
  /**
   * @remarks
   * The total size of snapshots stored in the current region. Unit: bytes.
   * 
   * @example
   * 122
   */
  snapshotSize?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotCount: 'SnapshotCount',
      snapshotSize: 'SnapshotSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotCount: 'number',
      snapshotSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

