// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequestRunConfig extends $dara.Model {
  /**
   * @remarks
   * The JSON string of extended parameters.
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
   * The list of skill IDs. You can specify up to one skill ID. The value overwrites aim_task_config.run_config after the modification.
   * 
   * @example
   * ["sk-abc"]
   * 
   * **if can be null:**
   * false
   */
  skills?: string[];
  /**
   * @remarks
   * The timeout period in seconds.
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

export class ModifyScheduledTaskRequest extends $dara.Model {
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
  runConfig?: ModifyScheduledTaskRequestRunConfig;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * This parameter is required.
   * 
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The status toggle. Valid values: ACTIVE and DISABLED.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * New task name
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
   * Execute daily data synchronization task
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      instanceIds: 'InstanceIds',
      runConfig: 'RunConfig',
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
      runConfig: ModifyScheduledTaskRequestRunConfig,
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
    if(this.runConfig && typeof (this.runConfig as any).validate === 'function') {
      (this.runConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

