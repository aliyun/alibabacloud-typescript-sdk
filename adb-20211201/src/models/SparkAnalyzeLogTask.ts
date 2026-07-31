// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogAnalyzeResult } from "./LogAnalyzeResult";


export class SparkAnalyzeLogTask extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-adbxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The analysis result of the task.
   */
  result?: LogAnalyzeResult;
  /**
   * @remarks
   * Indicates whether the task matched a rule.
   * 
   * @example
   * true
   */
  ruleMatched?: boolean;
  /**
   * @remarks
   * The time when the task was started. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672123543000
   */
  startedTimeInMillis?: number;
  /**
   * @remarks
   * The time when the task was submitted. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672123543000
   */
  submittedTimeInMillis?: number;
  /**
   * @remarks
   * The error message returned if the task fails.
   * 
   * @example
   * Driver log not found
   */
  taskErrMsg?: string;
  /**
   * @remarks
   * The ID of the Spark log analysis task.
   * 
   * @example
   * 10
   */
  taskId?: number;
  /**
   * @remarks
   * The state of the task.
   * 
   * @example
   * WAITING
   */
  taskState?: string;
  /**
   * @remarks
   * The time when the task was terminated. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1672123543000
   */
  terminatedTimeInMillis?: number;
  /**
   * @remarks
   * The ID of the user who submitted the task.
   * 
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

