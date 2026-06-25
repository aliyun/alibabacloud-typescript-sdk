// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * AppName
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * Job execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * Schedule time
   * 
   * @example
   * 2023-10-01 12:00:00
   */
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobExecutionId: 'string',
      scheduleTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

