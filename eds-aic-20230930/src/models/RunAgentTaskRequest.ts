// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskRequestRunConfig extends $dara.Model {
  /**
   * @remarks
   * The list of skill IDs. You can specify up to 10 skill IDs. Only the first skill ID is passed through when the command is delivered. All skill IDs are stored in the task_skill_relation table for reverse lookup.
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
   * The ID of the Mobile node, such as acp-xxx.
   * 
   * @example
   * acp-5hh4a31emkt6u****
   */
  instanceId?: string;
  /**
   * @remarks
   * The session ID. Tasks with the same session ID share the context, such as ses-260702-21b****.
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
   * The ID of the region where the Mobile node resides.
   * 
   * @example
   * cn-shanghai
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The list of Mobile node IDs. A single request supports up to 100 nodes.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The maximum number of execution steps for the task to prevent infinite loops. Valid values: 50 to 1000. Default value: 50.
   * 
   * @example
   * 50
   */
  maxSteps?: number;
  /**
   * @remarks
   * The runtime configuration that contains the runtime parameters such as skills for the current task.
   * 
   * @example
   * {"Skills":["sk-abc","sk-def"]}
   */
  runConfig?: RunAgentTaskRequestRunConfig;
  /**
   * @remarks
   * Specifies whether to save the task artifacts to your OSS.
   * 
   * @example
   * true
   */
  saveArtifacts?: boolean;
  /**
   * @remarks
   * The ID of the scheduling plan. When specified, the execute record is associated with the corresponding scheduled node, which facilitates aggregate query by scheduling aggregation dimension.
   * 
   * @example
   * sch-260625-pbj2****
   */
  scheduleId?: string;
  /**
   * @remarks
   * The list of targets. Each element is an object that contains an InstanceId and a SessionId.
   */
  targets?: RunAgentTaskRequestTargets[];
  /**
   * @remarks
   * The ID of the task configuration. This parameter is used to trigger a task with the specified configuration.
   * 
   * @example
   * tsk-260625-49be****
   */
  taskConfigId?: string;
  /**
   * @remarks
   * The timeout period of the task in seconds. Valid values: 300 to 3600. Default value: 3600.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The user prompt in natural language. The agent performs operations based on this prompt.
   * 
   * @example
   * Download DingTalk from the app store
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      instanceIds: 'InstanceIds',
      maxSteps: 'MaxSteps',
      runConfig: 'RunConfig',
      saveArtifacts: 'SaveArtifacts',
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
      saveArtifacts: 'boolean',
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

