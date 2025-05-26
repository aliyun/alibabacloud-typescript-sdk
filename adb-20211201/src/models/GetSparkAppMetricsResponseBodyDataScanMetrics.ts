// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppMetricsResponseBodyDataScanMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of scanned rows.
   * 
   * @example
   * 1000
   */
  outputRowsCount?: number;
  /**
   * @remarks
   * The number of scanned bytes.
   * 
   * @example
   * 10000
   */
  totalReadFileSizeInByte?: number;
  static names(): { [key: string]: string } {
    return {
      outputRowsCount: 'OutputRowsCount',
      totalReadFileSizeInByte: 'TotalReadFileSizeInByte',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputRowsCount: 'number',
      totalReadFileSizeInByte: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

