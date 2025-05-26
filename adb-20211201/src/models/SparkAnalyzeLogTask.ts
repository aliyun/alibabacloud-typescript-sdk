// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogAnalyzeResult } from "./LogAnalyzeResult";


export class SparkAnalyzeLogTask extends $dara.Model {
  /**
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  result?: LogAnalyzeResult;
  /**
   * @example
   * true
   */
  ruleMatched?: boolean;
  /**
   * @example
   * 1672123543000
   */
  startedTimeInMillis?: number;
  /**
   * @example
   * 1672123543000
   */
  submittedTimeInMillis?: number;
  /**
   * @example
   * Driver log not found
   */
  taskErrMsg?: string;
  /**
   * @example
   * 10
   */
  taskId?: number;
  /**
   * @example
   * WAITING
   */
  taskState?: string;
  /**
   * @example
   * 1672123543000
   */
  terminatedTimeInMillis?: number;
  /**
   * @example
   * 13719918xxx
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      result: 'Result',
      ruleMatched: 'RuleMatched',
      startedTimeInMillis: 'StartedTimeInMillis',
      submittedTimeInMillis: 'SubmittedTimeInMillis',
      taskErrMsg: 'TaskErrMsg',
      taskId: 'TaskId',
      taskState: 'TaskState',
      terminatedTimeInMillis: 'TerminatedTimeInMillis',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      result: LogAnalyzeResult,
      ruleMatched: 'boolean',
      startedTimeInMillis: 'number',
      submittedTimeInMillis: 'number',
      taskErrMsg: 'string',
      taskId: 'number',
      taskState: 'string',
      terminatedTimeInMillis: 'number',
      userId: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

