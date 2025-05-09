// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExecutionLogsResponseBodyExecutionLogs extends $dara.Model {
  /**
   * @remarks
   * The log type.
   * 
   * @example
   * System
   */
  logType?: string;
  /**
   * @remarks
   * The details of the task execution.
   * 
   * @example
   * The task CheckDiskCategory completed.
   */
  message?: string;
  /**
   * @remarks
   * The task execution ID.
   * 
   * @example
   * exec-1234567zxcvb.t0010
   */
  taskExecutionId?: string;
  /**
   * @remarks
   * The timestamp when the task was run.
   * 
   * @example
   * 2019-05-24T:02:29:07Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

