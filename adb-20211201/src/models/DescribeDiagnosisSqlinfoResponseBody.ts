// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoResponseBodyStageInfos extends $dara.Model {
  /**
   * @remarks
   * The type of the SQL execution engine.
   * 
   * @example
   * Java
   */
  executionType?: string;
  /**
   * @remarks
   * The total amount of input data for the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  inputDataSize?: number;
  /**
   * @remarks
   * The total number of input rows for the stage.
   * 
   * @example
   * 2341
   */
  inputRows?: number;
  /**
   * @remarks
   * The cumulative execution duration of operators for the stage. Unit: milliseconds.
   * 
   * @example
   * 2341
   */
  operatorCost?: number;
  /**
   * @remarks
   * The total amount of output data for the stage. Unit: bytes.
   * 
   * @example
   * 2341
   */
  outputDataSize?: number;
  /**
   * @remarks
   * The total number of output rows for the stage.
   * 
   * @example
   * 2341
   */
  outputRows?: number;
  /**
   * @remarks
   * The peak memory usage for the stage. Unit: bytes.
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
   * The execute details of the SQL statement, including the detailed SQL statement, statistics information, execute plan, and operator information.
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
   * The staged execution information of the query.
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

