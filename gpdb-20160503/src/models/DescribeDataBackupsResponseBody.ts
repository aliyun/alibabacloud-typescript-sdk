// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataBackupsResponseBodyItems } from "./DescribeDataBackupsResponseBodyItems";


export class DescribeDataBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   */
  items?: DescribeDataBackupsResponseBodyItems[];
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
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E387971-33A5-5019-AD7F-DC**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total backup set size. Unit: Byte.
   * 
   * @example
   * 1111111111
   */
  totalBackupSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
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
      items: { 'type': 'array', 'itemType': DescribeDataBackupsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalBackupSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

