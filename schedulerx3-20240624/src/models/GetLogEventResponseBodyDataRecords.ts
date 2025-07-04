// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogEventResponseBodyDataRecords extends $dara.Model {
  /**
   * @example
   * portal-dev
   */
  appName?: string;
  /**
   * @example
   * hello word
   */
  content?: string;
  /**
   * @example
   * info
   */
  event?: string;
  /**
   * @example
   * 101
   */
  jobExecutionId?: string;
  /**
   * @example
   * test
   */
  jobName?: string;
  /**
   * @example
   * 2024-10-31 16:43:51
   */
  time?: string;
  /**
   * @example
   * 030225016025_9357_60125@127.0.0.1:51363
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

