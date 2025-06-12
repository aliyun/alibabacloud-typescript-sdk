// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsResponseBodySlowLogRecordsStatistics extends $dara.Model {
  /**
   * @remarks
   * The total size of data that were read. Unit: bytes.
   * 
   * @example
   * 123456
   */
  bytesRead?: number;
  /**
   * @remarks
   * The time consumed by the slow query. Unit: milliseconds.
   * 
   * @example
   * 21.35
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The total number of rows that were read.
   * 
   * @example
   * 2016722
   */
  rowsRead?: number;
  static names(): { [key: string]: string } {
    return {
      bytesRead: 'BytesRead',
      elapsedTime: 'ElapsedTime',
      rowsRead: 'RowsRead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesRead: 'number',
      elapsedTime: 'number',
      rowsRead: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

