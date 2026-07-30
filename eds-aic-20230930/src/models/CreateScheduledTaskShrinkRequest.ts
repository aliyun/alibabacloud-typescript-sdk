// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 * * *
   */
  cronExpression?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["ai-instance-001"]
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of executions.
   * 
   * @example
   * 1
   */
  maxExecutions?: number;
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
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto-reply to DingTalk messages.
   */
  taskName?: string;
  /**
   * @remarks
   * The user prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Open DingTalk and reply to the first 5 unread messages.
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      instanceIds: 'InstanceIds',
      maxExecutions: 'MaxExecutions',
      runConfigShrink: 'RunConfig',
      taskName: 'TaskName',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxExecutions: 'number',
      runConfigShrink: 'string',
      taskName: 'string',
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

