// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListResponseBodyProcessListStatistics extends $dara.Model {
  /**
   * @remarks
   * The size of the data that was scanned. Unit: bytes.
   * 
   * @example
   * 9141300000
   */
  bytesRead?: number;
  /**
   * @remarks
   * The average response time.
   * 
   * @example
   * 4156
   */
  elapsedTime?: number;
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000000
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

