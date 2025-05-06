// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDetachedBackupsResponseBodyItems } from "./DescribeDetachedBackupsResponseBodyItems";


export class DescribeDetachedBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the backup sets.
   */
  items?: DescribeDetachedBackupsResponseBodyItems;
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
   * 15
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 717B2382-BB14-4DCB-BBC2-32DBE0******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 50
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDetachedBackupsResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
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

