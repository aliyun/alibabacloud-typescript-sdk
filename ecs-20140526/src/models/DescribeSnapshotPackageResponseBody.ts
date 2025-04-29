// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotPackageResponseBodySnapshotPackages } from "./DescribeSnapshotPackageResponseBodySnapshotPackages";


export class DescribeSnapshotPackageResponseBody extends $dara.Model {
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the OSS storage plans.
   */
  snapshotPackages?: DescribeSnapshotPackageResponseBodySnapshotPackages;
  /**
   * @remarks
   * The total number of OSS storage plans.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotPackages: 'SnapshotPackages',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotPackages: DescribeSnapshotPackageResponseBodySnapshotPackages,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.snapshotPackages && typeof (this.snapshotPackages as any).validate === 'function') {
      (this.snapshotPackages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

