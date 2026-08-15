// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskRequestRunConfig extends $dara.Model {
  /**
   * @remarks
   * The list of skill IDs. A maximum of 10 skill IDs are supported. Only the first skill is passed through during command delivery. All skills are stored in task_skill_relation for reverse lookup.
   * 
   * @example
   * ["sk-abc","sk-def"]
   */
  skills?: string[];
  static names(): { [key: string]: string } {
    return {
      skills: 'Skills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skills: { 'type': 'array', 'itemType': 'string' },
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

export class RunAgentTaskRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The Mobile node ID, such as acp-xxx.
   * 
   * @example
   * acp-5hh4a31emkt6u****
   */
  instanceId?: string;
  /**
   * @remarks
   * The session ID. Tasks with the same session ID share context, such as ses-260702-21b****.
   * 
   * @example
   * ses-260702-21bh****。
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAgentTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the Mobile node.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The list of Mobile node IDs. A maximum of 100 nodes are supported per request.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of execution steps for the task. This prevents infinite loops. Valid values: 30 to 1000. Default value: 1000.
   * 
   * @example
   * 30
   */
  maxSteps?: number;
  /**
   * @remarks
   * The runtime configuration that carries the runtime parameters (skills) for this task.
   * 
   * @example
   * {"Skills":["sk-abc","sk-def"]}
   */
  runConfig?: RunAgentTaskRequestRunConfig;
  /**
   * @remarks
   * The scheduling plan ID. When specified, the execution record is associated with the corresponding scheduled node, which facilitates aggregate query by scheduling dimension through aggregation.
   * 
   * @example
   * sch-260625-pbj2****
   */
  scheduleId?: string;
  /**
   * @remarks
   * The Targets array. Each element is an object that contains InstanceId and SessionId.
   */
  targets?: RunAgentTaskRequestTargets[];
  /**
   * @remarks
   * The task configuration ID. This parameter is used to trigger a task with the specified configuration.
   * 
   * @example
   * tsk-260625-49be****
   */
  taskConfigId?: string;
  /**
   * @remarks
   * The task timeout period, in seconds. Valid values: 300 to 3600. Default value: 3600.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The user instruction in natural language. The Agent performs operations based on this instruction.
   * 
   * @example
   * Go to App Store and download DingTalk
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      instanceIds: 'InstanceIds',
      maxSteps: 'MaxSteps',
      runConfig: 'RunConfig',
      scheduleId: 'ScheduleId',
      targets: 'Targets',
      taskConfigId: 'TaskConfigId',
      timeoutSeconds: 'TimeoutSeconds',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      maxSteps: 'number',
      runConfig: RunAgentTaskRequestRunConfig,
      scheduleId: 'string',
      targets: { 'type': 'array', 'itemType': RunAgentTaskRequestTargets },
      taskConfigId: 'string',
      timeoutSeconds: 'number',
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
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

