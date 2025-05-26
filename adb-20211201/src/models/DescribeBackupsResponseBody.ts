// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBackupsResponseBodyItems } from "./DescribeBackupsResponseBodyItems";


export class DescribeBackupsResponseBody extends $dara.Model {
  freeBackupSize?: number;
  /**
   * @remarks
   * The queried backup sets.
   */
  items?: DescribeBackupsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE17270B-F8F8-5A31-9DB4-DADDFDAD7940
   */
  requestId?: string;
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 300
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      freeBackupSize: 'FreeBackupSize',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalBackupSize: 'TotalBackupSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeBackupSize: 'number',
      items: DescribeBackupsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'string',
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

