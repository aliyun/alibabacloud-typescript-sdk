// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFullProcessListResponseBodyFullProcessList extends $dara.Model {
  /**
   * @remarks
   * Details
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The abnormal status of the task. Valid values:**notstarted**. -**checking**. -**failed**. -**finished**.
   * 
   * @example
   * notstarted
   */
  exception?: string;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * universer
   */
  processName?: string;
  /**
   * @remarks
   * The type of the process. Valid values:
   * 
   * *   **1**: trusted
   * *   **2**: suspicious
   * *   **3**: malicious
   * 
   * @example
   * 1
   */
  processType?: string;
  /**
   * @remarks
   * SQL that is running
   * 
   * @example
   * test
   */
  runningSQL?: string;
  /**
   * @remarks
   * The log status.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * TaskD4E5F6
   */
  taskID?: string;
  /**
   * @remarks
   * The time when the logs were collected. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 1729650129452
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      exception: 'Exception',
      processName: 'ProcessName',
      processType: 'ProcessType',
      runningSQL: 'RunningSQL',
      state: 'State',
      taskID: 'TaskID',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      exception: 'string',
      processName: 'string',
      processType: 'string',
      runningSQL: 'string',
      state: 'string',
      taskID: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

