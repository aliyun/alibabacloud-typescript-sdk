// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 30 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * @example
   * ["acp-5hh431emkt6u*****"]
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The run configuration.
   * 
   * @example
   * {"maxSteps":10,"timeoutSeconds":3600}
   */
  runConfigShrink?: string;
  /**
   * @remarks
   * The scheduled task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The status switch: ACTIVE/DISABLED.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * NewTaskName.
   */
  taskName?: string;
  /**
   * @remarks
   * The CAS version number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskVersion?: number;
  /**
   * @remarks
   * The user prompt.
   * 
   * @example
   * Execute daily data synchronization task.
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      instanceIds: 'InstanceIds',
      runConfigShrink: 'RunConfig',
      scheduledId: 'ScheduledId',
      status: 'Status',
      taskName: 'TaskName',
      taskVersion: 'TaskVersion',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      runConfigShrink: 'string',
      scheduledId: 'string',
      status: 'string',
      taskName: 'string',
      taskVersion: 'number',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

