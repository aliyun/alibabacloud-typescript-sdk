// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupsResponseBodyItems } from "./DescribeBackupsResponseBodyItems";


export class DescribeBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned backup sets.
   */
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of backup sets on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1A6D328C-84B8-40DC-BF49-6C73984D7494
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the snapshot chain of the instance. Unit: bytes.
   * 
   * @example
   * 0
   */
  totalEcsSnapshotSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalEcsSnapshotSize: 'TotalEcsSnapshotSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalEcsSnapshotSize: 'number',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

