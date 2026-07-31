// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoResponseBodyStageInfos extends $dara.Model {
  executionType?: string;
  /**
   * @remarks
   * The total input data size of the stage, in bytes.
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
   * The cumulative operator duration of the stage, in milliseconds.
   * 
   * @example
   * 2341
   */
  operatorCost?: number;
  /**
   * @remarks
   * The total output data size of the stage, in bytes.
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
   * The total peak memory of the stage, in bytes.
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
   * StageID。
   * 
   * @example
   * Stage[26]
   */
  stageId?: string;
  /**
   * @remarks
   * The status of the stage.
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

export class DescribeDiagnosisSQLInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution details of the SQL statement, including the detailed SQL statement, statistics information, execution plan, and operator information.
   */
  diagnosisSQLInfo?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1
   */
  requestId?: string;
  /**
   * @remarks
   * The stage-level execution information of the query.
   */
  stageInfos?: DescribeDiagnosisSQLInfoResponseBodyStageInfos[];
  static names(): { [key: string]: string } {
    return {
      diagnosisSQLInfo: 'DiagnosisSQLInfo',
      requestId: 'RequestId',
      stageInfos: 'StageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisSQLInfo: 'string',
      requestId: 'string',
      stageInfos: { 'type': 'array', 'itemType': DescribeDiagnosisSQLInfoResponseBodyStageInfos },
    };
  }

  validate() {
    if(Array.isArray(this.stageInfos)) {
      $dara.Model.validateArray(this.stageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

