// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogBackupsResponseBodyItems } from "./DescribeLogBackupsResponseBodyItems";


export class DescribeLogBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the backup sets.
   */
  items?: DescribeLogBackupsResponseBodyItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of backup sets on the current page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 24B9FCAF-2CBC-51C3-B563-F1C70D750187
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The total size of logs in the time range. Unit: bytes.
   * 
   * @example
   * 386748
   */
  totalLogSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalLogSize: 'TotalLogSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeLogBackupsResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalLogSize: 'number',
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

