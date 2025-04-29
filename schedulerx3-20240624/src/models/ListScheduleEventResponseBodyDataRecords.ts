// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduleEventResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * hello word
   */
  content?: string;
  /**
   * @example
   * INFO
   */
  event?: string;
  /**
   * @remarks
   * 130
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @example
   * http://192.168.1.5:9999/
   */
  workerAddr?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      content: 'Content',
      event: 'Event',
      jobExecutionId: 'JobExecutionId',
      jobName: 'JobName',
      time: 'Time',
      workerAddr: 'WorkerAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      content: 'string',
      event: 'string',
      jobExecutionId: 'string',
      jobName: 'string',
      time: 'string',
      workerAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

