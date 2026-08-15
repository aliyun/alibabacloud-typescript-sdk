// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledTaskRequestRunConfig extends $dara.Model {
  /**
   * @remarks
   * The extended parameters as a JSON string.
   * 
   * @example
   * {"batchSize":"1000"}
   */
  extraParams?: string;
  /**
   * @remarks
   * The maximum number of execution steps.
   * 
   * @example
   * 10
   */
  maxSteps?: number;
  /**
   * @remarks
   * The list of skill IDs, up to 1. Written to aim_task_config.run_config when the scheduled task is created and read when the callback is delivered.
   * 
   * @example
   * ["sk-abc"]
   */
  skills?: string[];
  /**
   * @remarks
   * The timeout in seconds.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      extraParams: 'ExtraParams',
      maxSteps: 'MaxSteps',
      skills: 'Skills',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      maxSteps: 'number',
      skills: { 'type': 'array', 'itemType': 'string' },
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduledTaskRequest extends $dara.Model {
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
  runConfig?: CreateScheduledTaskRequestRunConfig;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * Auto-reply to DingTalk messages
   */
  taskName?: string;
  /**
   * @remarks
   * The user prompt.
   * 
   * This parameter is required.
   * 
   * @example
   * Open DingTalk and reply to the first 5 unread messages
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      instanceIds: 'InstanceIds',
      maxExecutions: 'MaxExecutions',
      runConfig: 'RunConfig',
      taskName: 'TaskName',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxExecutions: 'number',
      runConfig: CreateScheduledTaskRequestRunConfig,
      taskName: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.runConfig && typeof (this.runConfig as any).validate === 'function') {
      (this.runConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

