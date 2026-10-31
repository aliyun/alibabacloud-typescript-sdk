// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineByAsyncRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline task belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequestUpdateCommandNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The directory of the integration pipeline task node. The default value is the root directory. The directory must exist. If it does not exist, call the relevant API to create a directory of the offlinePipeline type.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The ID of the pipeline file. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the scheduling node for the pipeline task. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the integration pipeline task.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the pipeline task. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * 123
   */
  pipelineId?: number;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      fileId: 'FileId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: 'string',
      fileId: 'number',
      nodeId: 'string',
      nodeName: 'string',
      pipelineId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigHops extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to connect to the downstream component when the condition is met for a conditional distribution component. Set to true if the downstream condition is true, and false otherwise. Ignore this parameter for workflow tasks.
   */
  sendTo?: boolean;
  /**
   * @remarks
   * The name of the input step, which corresponds to Steps[*].StepName.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * The name of the output step, which corresponds to Steps[*].StepName.
   * 
   * This parameter is required.
   * 
   * @example
   * odps_writer
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      sendTo: 'SendTo',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sendTo: 'boolean',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigSteps extends $dara.Model {
  /**
   * @remarks
   * Specifies the data distribution method when the current component has multiple downstream components. Valid values:
   * - true: distributes data to all downstream components in turn. For example, if the current component has 100 data records and two downstream components, each downstream component receives 50 records. This is the default value.
   * - false: sends all data to all downstream components. For example, if the current component has 100 data records and two downstream components, both downstream components receive all 100 records.
   * Ignore this parameter for workflow tasks.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin or operator has a unique identifier. Refer to com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepKey. Developers must inherit the component or operator configuration class to implement the corresponding configuration. The structure of each configuration must be identical to the configuration structure created on the Dataphin page.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component or operator configuration in JSON string format. Refer to the toJsonString method of the relevant subclasses of com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (or com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig for workflow operators). Developers must inherit this component or operator configuration class to implement the corresponding configuration. The structure of each component or operator configuration must be identical to the task configuration structure created on the Dataphin page.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The step name. Step names must be unique within the same pipeline task.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @remarks
   * The step type. For pipeline tasks, valid values:
   * - input: input component.
   * - output: output component.
   * - transfrom: transform component.
   * - process: flow control component.
   * For workflow tasks, this indicates the operator type, such as image: image or text: text. Refer to com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepType. Developers must inherit the component or operator configuration class to implement the corresponding configuration. The structure of each configuration must be identical to the configuration structure created on the Dataphin page.
   * 
   * This parameter is required.
   * 
   * @example
   * input
   */
  stepType?: string;
  static names(): { [key: string]: string } {
    return {
      isDistribute: 'IsDistribute',
      key: 'Key',
      pluginConfig: 'PluginConfig',
      stepName: 'StepName',
      stepType: 'StepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDistribute: 'boolean',
      key: 'string',
      pluginConfig: 'string',
      stepName: 'string',
      stepType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequestUpdateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) hop configurations that describe the connection relationships among all components.
   * 
   * This parameter is required.
   */
  hops?: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigHops[];
  /**
   * @remarks
   * The step configurations, including the detailed configurations of all used components.
   * 
   * This parameter is required.
   */
  steps?: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigSteps },
    };
  }

  validate() {
    if(Array.isArray(this.hops)) {
      $dara.Model.validateArray(this.hops);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The configuration mode of the integration pipeline. Valid values:
   * - PIPELINE: pipeline mode (default).
   * - JSON: script mode.
   * Ignore this parameter for workflow tasks.
   * 
   * @example
   * PIPELINE
   */
  mode?: string;
  /**
   * @remarks
   * The basic information of the integration pipeline task.
   * 
   * This parameter is required.
   */
  nodeInfo?: UpdatePipelineByAsyncRequestUpdateCommandNodeInfo;
  /**
   * @remarks
   * The component configuration for the integration pipeline.
   * 
   * This parameter is required.
   */
  pipelineConfig?: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfig;
  /**
   * @remarks
   * The integration pipeline configuration in JSON string format for script mode. Workflow tasks do not support script mode.
   * 
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - 0: offline integration (default).
   * - 1: real-time integration.
   * - 14: workflow task.
   * - 15: real-time workflow.
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * The schedule configuration in JSON string format. Refer to the com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig#toJsonString method in the utility class.
   * 
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * The channel settings in JSON string format. Refer to the com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting#toJsonString method in the utility class.
   * 
   * @example
   * {}
   */
  settings?: string;
  /**
   * @remarks
   * Specifies whether to submit the task. Default value: true.
   */
  submit?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      mode: 'Mode',
      nodeInfo: 'NodeInfo',
      pipelineConfig: 'PipelineConfig',
      pipelineJson: 'PipelineJson',
      pipelineType: 'PipelineType',
      scheduleConfig: 'ScheduleConfig',
      settings: 'Settings',
      submit: 'Submit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      mode: 'string',
      nodeInfo: UpdatePipelineByAsyncRequestUpdateCommandNodeInfo,
      pipelineConfig: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfig,
      pipelineJson: 'string',
      pipelineType: 'number',
      scheduleConfig: 'string',
      settings: 'string',
      submit: 'boolean',
    };
  }

  validate() {
    if(this.nodeInfo && typeof (this.nodeInfo as any).validate === 'function') {
      (this.nodeInfo as any).validate();
    }
    if(this.pipelineConfig && typeof (this.pipelineConfig as any).validate === 'function') {
      (this.pipelineConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineByAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: UpdatePipelineByAsyncRequestContext;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update configuration for the pipeline task.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdatePipelineByAsyncRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: UpdatePipelineByAsyncRequestContext,
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdatePipelineByAsyncRequestUpdateCommand,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

