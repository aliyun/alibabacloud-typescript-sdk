// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogBackupFilesResponseBodyItems } from "./DescribeLogBackupFilesResponseBodyItems";


export class DescribeLogBackupFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of log files.
   */
  items?: DescribeLogBackupFilesResponseBodyItems;
  /**
   * @remarks
   * The page number of the page returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log files on the current page.
   * 
   * @example
   * 100
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8EC669C-FC85-43D7-AF06-C3641626B37E
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of log files. Unit: bytes.
   * 
   * @example
   * 2300
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The total number of log files.
   * 
   * @example
   * 17
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalFileSize: 'TotalFileSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeLogBackupFilesResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalFileSize: 'number',
      totalRecordCount: 'number',
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

