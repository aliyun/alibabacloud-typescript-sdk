// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskShrinkRequestTargets extends $dara.Model {
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

export class RunAgentTaskShrinkRequest extends $dara.Model {
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
   * The runtime configuration that carries the runtime parameters such as skills for the current task.
   * 
   * @example
   * {"Skills":["sk-abc","sk-def"]}
   */
  runConfigShrink?: string;
  /**
   * @remarks
   * Specifies whether to write the task artifacts to the user\\"s OSS.
   * 
   * @example
   * true
   */
  saveArtifacts?: boolean;
  /**
   * @remarks
   * The scheduling plan ID. If specified, the execute record is associated with the corresponding scheduled node to facilitate aggregate query by scheduling dimension aggregation.
   * 
   * @example
   * sch-260625-pbj2****
   */
  scheduleId?: string;
  /**
   * @remarks
   * The Targets array. Each element is an object that contains InstanceId and SessionId.
   */
  targets?: RunAgentTaskShrinkRequestTargets[];
  /**
   * @remarks
   * The task configuration ID used to trigger a task with the specified configuration.
   * 
   * @example
   * tsk-260625-49be****
   */
  taskConfigId?: string;
  /**
   * @remarks
   * The timeout period for the task in seconds. Valid values: 300 to 3600. Default value: 3600.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The user prompt in natural language based on which the agent performs operations.
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
      runConfigShrink: 'RunConfig',
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
      runConfigShrink: 'string',
      saveArtifacts: 'boolean',
      scheduleId: 'string',
      targets: { 'type': 'array', 'itemType': RunAgentTaskShrinkRequestTargets },
      taskConfigId: 'string',
      timeoutSeconds: 'number',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
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

