// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowSubTasksResponseBodyDataFlowSubTaskDataFlowSubTaskProgressStats extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 68
   */
  actualBytes?: number;
  /**
   * @remarks
   * The average flow velocity. Unit: bytes/s.
   * 
   * @example
   * 34
   */
  averageSpeed?: number;
  /**
   * @remarks
   * The amount of data (including skipped data) for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 68
   */
  bytesDone?: number;
  /**
   * @remarks
   * The amount of data scanned on the source. Unit: bytes.
   * 
   * @example
   * 68
   */
  bytesTotal?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

