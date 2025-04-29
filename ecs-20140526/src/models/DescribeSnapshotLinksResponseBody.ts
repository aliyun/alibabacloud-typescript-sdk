// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotLinksResponseBodySnapshotLinks } from "./DescribeSnapshotLinksResponseBodySnapshotLinks";


export class DescribeSnapshotLinksResponseBody extends $dara.Model {
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
   * 50
   */
  pageSize?: number;
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
   * The information about the snapshot chains.
   */
  snapshotLinks?: DescribeSnapshotLinksResponseBodySnapshotLinks;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotLinks: 'SnapshotLinks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotLinks: DescribeSnapshotLinksResponseBodySnapshotLinks,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshotLinks && typeof (this.snapshotLinks as any).validate === 'function') {
      (this.snapshotLinks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

