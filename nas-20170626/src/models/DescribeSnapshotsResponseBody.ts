// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotsResponseBodySnapshots } from "./DescribeSnapshotsResponseBodySnapshots";


export class DescribeSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The details about snapshots.
   */
  snapshots?: DescribeSnapshotsResponseBodySnapshots;
  /**
   * @remarks
   * The total number of snapshots returned.
   * 
   * @example
   * 36
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: DescribeSnapshotsResponseBodySnapshots,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

