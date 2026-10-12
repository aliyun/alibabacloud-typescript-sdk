// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAgentTaskShrinkRequestTargets extends $dara.Model {
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

export class RunAgentTaskShrinkRequest extends $dara.Model {
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
  runConfigShrink?: string;
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
  targets?: RunAgentTaskShrinkRequestTargets[];
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

