// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateRetryJobExecutionShrinkRequest extends $dara.Model {
  appGroupId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The job execution ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1310630367761285120
   */
  jobExecutionId?: string;
  /**
   * @remarks
   * The list of subtask execution IDs (for broadcast jobs).
   * >To rerun a subtask of a broadcast job, set this field to the execution ID of the corresponding subtask.
   */
  taskListShrink?: string;
  /**
   * @remarks
   * Specifies whether to trigger downstream nodes.
   */
  triggerChild?: boolean;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      appName: 'AppName',
      clusterId: 'ClusterId',
      jobExecutionId: 'JobExecutionId',
      taskListShrink: 'TaskList',
      triggerChild: 'TriggerChild',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
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

