// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScheduledTaskRequestRunConfig extends $dara.Model {
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
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraParams: 'string',
      maxSteps: 'number',
      timeoutSeconds: 'number',
    };
  }

  validate() {
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

