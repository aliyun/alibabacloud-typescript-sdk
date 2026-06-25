// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRetryJobExecutionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Application Name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The Job Execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * A list of Sub-task execution IDs for a Broadcast Sharding Job.
   * 
   * > To retry a specific Sub-task of a Broadcast Sharding Job, set this parameter to the execution ID of that Sub-task.
   */
  taskListShrink?: string;
  /**
   * @remarks
   * Specifies whether to trigger downstream jobs.
   */
  triggerChild?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
      taskListShrink: 'TaskList',
      triggerChild: 'TriggerChild',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      jobExecutionId: 'string',
      taskListShrink: 'string',
      triggerChild: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

