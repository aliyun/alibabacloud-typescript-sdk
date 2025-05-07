// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBinlogFilesResponseBodyItems } from "./DescribeBinlogFilesResponseBodyItems";


export class DescribeBinlogFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the log file.
   */
  items?: DescribeBinlogFilesResponseBodyItems;
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
   * The number of log files on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ED169A3E-1657-4104-82AB-24EA8CD0DB75
   */
  requestId?: string;
  /**
   * @remarks
   * The total size of the log file.
   * 
   * @example
   * 2269410
   */
  totalFileSize?: number;
  /**
   * @remarks
   * The total number of log files.
   * 
   * @example
   * 100
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
      items: DescribeBinlogFilesResponseBodyItems,
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

