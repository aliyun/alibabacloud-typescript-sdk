// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCSnapshotsResponseBodySnapshots } from "./DescribeRcsnapshotsResponseBodySnapshots";


export class DescribeRCSnapshotsResponseBody extends $dara.Model {
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
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9DAC759A-F4F0-5D02-8335-BC458C0CCB94
   */
  requestId?: string;
  /**
   * @remarks
   * The details of snapshots.
   */
  snapshots?: DescribeRCSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
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
      snapshots: { 'type': 'array', 'itemType': DescribeRCSnapshotsResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

