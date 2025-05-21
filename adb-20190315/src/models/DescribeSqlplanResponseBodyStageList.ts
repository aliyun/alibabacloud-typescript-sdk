// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPlanResponseBodyStageList extends $dara.Model {
  /**
   * @remarks
   * The average `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  CPUTimeAvg?: number;
  /**
   * @remarks
   * The maximum `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  CPUTimeMax?: number;
  /**
   * @remarks
   * The minimum `CPU Time` value on each compute node in the stage. Unit: milliseconds.
   * 
   * @example
   * 47
   */
  CPUTimeMin?: number;
  /**
   * @remarks
   * The average amount of input data on each compute node in the stage. Unit: bytes.
   * 
   * @example
   * 173
   */
  inputSizeAvg?: number;
  /**
   * @remarks
   * The maximum amount of input data on each compute node in the stage. Unit: byte.
   * 
   * @example
   * 173
   */
  inputSizeMax?: number;
  /**
   * @remarks
   * The minimum amount of input data on each compute node in the stage. Unit: bytes.
   * 
   * @example
   * 173
   */
  inputSizeMin?: number;
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 5984
   */
  operatorCost?: number;
  /**
   * @remarks
   * The maximum memory usage when the SQL statement is executed. Unit: bytes.
   * 
   * @example
   * 74208
   */
  peakMemory?: number;
  /**
   * @remarks
   * The average amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeAvg?: number;
  /**
   * @remarks
   * The maximum amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeMax?: number;
  /**
   * @remarks
   * The minimum amount of data scanned by a scan operator on each storage node in the stage. Unit: bytes.
   * 
   * @example
   * 0
   */
  scanSizeMin?: number;
  /**
   * @remarks
   * The average amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeAvg?: number;
  /**
   * @remarks
   * The maximum amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeMax?: number;
  /**
   * @remarks
   * The minimum amount of time consumed by a scan operator to read data on each storage node in the stage. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  scanTimeMin?: number;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * 1
   */
  stageId?: number;
  /**
   * @remarks
   * The final execution state of the stage. Valid values:
   * 
   * *   FINISHED
   * *   CANCELED
   * *   ABORTED
   * *   FAILED
   * 
   * @example
   * FINISHED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      CPUTimeAvg: 'CPUTimeAvg',
      CPUTimeMax: 'CPUTimeMax',
      CPUTimeMin: 'CPUTimeMin',
      inputSizeAvg: 'InputSizeAvg',
      inputSizeMax: 'InputSizeMax',
      inputSizeMin: 'InputSizeMin',
      operatorCost: 'OperatorCost',
      peakMemory: 'PeakMemory',
      scanSizeAvg: 'ScanSizeAvg',
      scanSizeMax: 'ScanSizeMax',
      scanSizeMin: 'ScanSizeMin',
      scanTimeAvg: 'ScanTimeAvg',
      scanTimeMax: 'ScanTimeMax',
      scanTimeMin: 'ScanTimeMin',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUTimeAvg: 'number',
      CPUTimeMax: 'number',
      CPUTimeMin: 'number',
      inputSizeAvg: 'number',
      inputSizeMax: 'number',
      inputSizeMin: 'number',
      operatorCost: 'number',
      peakMemory: 'number',
      scanSizeAvg: 'number',
      scanSizeMax: 'number',
      scanSizeMin: 'number',
      scanTimeAvg: 'number',
      scanTimeMax: 'number',
      scanTimeMin: 'number',
      stageId: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

