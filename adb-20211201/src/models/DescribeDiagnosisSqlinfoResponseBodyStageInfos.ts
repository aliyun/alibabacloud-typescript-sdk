// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoResponseBodyStageInfos extends $dara.Model {
  executionType?: string;
  /**
   * @remarks
   * The total amount of input data in the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The total number of input rows in the stage.
   * 
   * @example
   * 2341
   */
  inputRows?: number;
  /**
   * @remarks
   * The total amount of time consumed by all operators in the stage. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  operatorCost?: number;
  /**
   * @remarks
   * The total amount of output data in the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The total number of output rows in the stage.
   * 
   * @example
   * 2341
   */
  outputRows?: number;
  /**
   * @remarks
   * The total peak memory of the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  peakMemory?: number;
  /**
   * @remarks
   * The execution progress of the stage.
   * 
   * @example
   * 0.3
   */
  progress?: number;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The state of the stage.
   * 
   * @example
   * RUNNING
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      executionType: 'ExecutionType',
      inputDataSize: 'InputDataSize',
      inputRows: 'InputRows',
      operatorCost: 'OperatorCost',
      outputDataSize: 'OutputDataSize',
      outputRows: 'OutputRows',
      peakMemory: 'PeakMemory',
      progress: 'Progress',
      stageId: 'StageId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionType: 'string',
      inputDataSize: 'number',
      inputRows: 'number',
      operatorCost: 'number',
      outputDataSize: 'number',
      outputRows: 'number',
      peakMemory: 'number',
      progress: 'number',
      stageId: 'string',
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

