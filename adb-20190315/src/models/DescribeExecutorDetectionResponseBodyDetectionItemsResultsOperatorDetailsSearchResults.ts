// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults extends $dara.Model {
  /**
   * @remarks
   * The number of rows input by the operator.
   * 
   * @example
   * 123
   */
  inputRows?: number;
  /**
   * @remarks
   * The amount of data input by the operator. Unit: bytes.
   * 
   * @example
   * 2345
   */
  inputSize?: number;
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 2354
   */
  operatorCost?: number;
  /**
   * @remarks
   * The property information about the operator.
   * 
   * @example
   * GROUP BY field: uid
   */
  operatorInfo?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * TableScan
   */
  operatorName?: string;
  /**
   * @remarks
   * The number of rows output by the operator.
   * 
   * @example
   * 2354
   */
  outputRows?: number;
  /**
   * @remarks
   * The amount of data output by the operator. Unit: bytes.
   * 
   * @example
   * 2345
   */
  outputSize?: number;
  /**
   * @remarks
   * The peak memory of the operator.
   * 
   * @example
   * 2334
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID that can be used for diagnostics.
   * 
   * @example
   * 202405061006230110150170540315119xxxx
   */
  processId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[7]
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      inputRows: 'InputRows',
      inputSize: 'InputSize',
      operatorCost: 'OperatorCost',
      operatorInfo: 'OperatorInfo',
      operatorName: 'OperatorName',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRows: 'number',
      inputSize: 'number',
      operatorCost: 'number',
      operatorInfo: 'string',
      operatorName: 'string',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      processId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

