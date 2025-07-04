// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobExecutionThreadDumpRequest extends $dara.Model {
  /**
   * @example
   * xxl-job-executor-sample
   */
  appName?: string;
  /**
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @example
   * http://192.168.0.215:9966/
   */
  executorAddr?: string;
  /**
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      executorAddr: 'ExecutorAddr',
      jobExecutionId: 'JobExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      executorAddr: 'string',
      jobExecutionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

