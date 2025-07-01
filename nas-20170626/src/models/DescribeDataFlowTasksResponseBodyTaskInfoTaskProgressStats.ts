// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataFlowTasksResponseBodyTaskInfoTaskProgressStats extends $dara.Model {
  /**
   * @remarks
   * The actual amount of data for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  actualBytes?: number;
  /**
   * @remarks
   * The actual number of files for which the data flow task is complete.
   * 
   * @example
   * 3
   */
  actualFiles?: number;
  /**
   * @remarks
   * The average flow velocity. Unit: bytes/s.
   * 
   * @example
   * 342279299
   */
  averageSpeed?: number;
  /**
   * @remarks
   * The amount of data (including skipped data) for which the data flow task is complete. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  bytesDone?: number;
  /**
   * @remarks
   * The amount of data scanned on the source. Unit: bytes.
   * 
   * @example
   * 131092971520
   */
  bytesTotal?: number;
  /**
   * @remarks
   * The number of files (including skipped files) for which the data flow task is complete.
   * 
   * @example
   * 3
   */
  filesDone?: number;
  /**
   * @remarks
   * The number of files scanned on the source.
   * 
   * @example
   * 3
   */
  filesTotal?: number;
  /**
   * @remarks
   * The estimated remaining execution time. Unit: seconds.
   * 
   * @example
   * 437
   */
  remainTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualBytes: 'ActualBytes',
      actualFiles: 'ActualFiles',
      averageSpeed: 'AverageSpeed',
      bytesDone: 'BytesDone',
      bytesTotal: 'BytesTotal',
      filesDone: 'FilesDone',
      filesTotal: 'FilesTotal',
      remainTime: 'RemainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualBytes: 'number',
      actualFiles: 'number',
      averageSpeed: 'number',
      bytesDone: 'number',
      bytesTotal: 'number',
      filesDone: 'number',
      filesTotal: 'number',
      remainTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

