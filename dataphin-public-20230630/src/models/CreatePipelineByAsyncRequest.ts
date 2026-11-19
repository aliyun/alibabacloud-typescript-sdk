// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineByAsyncRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operation environment. Valid values: DEV: development environment. PROD: production environment. For workflows, only PROD is currently supported.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline or workflow task belongs.
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

export class CreatePipelineByAsyncRequestCreateCommandNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The node directory of the integration pipeline task. Default value: root directory. The directory must exist. If it does not exist, call the relevant API operation to create a directory of the offlinePipeline type.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The ID of the pipeline file. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must configure at least one of the following parameters: pipelineId, fileId, and nodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the schedule node for the pipeline task. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must configure at least one of the following parameters: pipelineId, fileId, and nodeId.
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
   * The ID of the pipeline task. Leave this parameter empty when creating a task for the first time. When updating a pipeline task, you must configure at least one of the following parameters: pipelineId, fileId, and nodeId.
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

export class CreatePipelineByAsyncRequestCreateCommandPipelineConfigHops extends $dara.Model {
  /**
   * @remarks
   * For conditional distribution components, set this parameter to true if the downstream connection condition is true. Otherwise, set it to false. Ignore this parameter for workflow tasks.
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

export class CreatePipelineByAsyncRequestCreateCommandPipelineConfigSteps extends $dara.Model {
  /**
   * @remarks
   * The data distribution method when the current component has multiple downstream components. Valid values: true: distributes data from the current component to all downstream components in turn. For example, if the current component has 100 data records and two downstream components, each downstream component receives 50 data records. Default value: true. false: sends all data from the current component to all downstream components. For example, if the current component has 100 data records and two downstream components, both downstream components receive all 100 data records. Ignore this parameter for workflow tasks.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin or operator has a unique identifier. Refer to the stepKey field in the com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig utility class. Developers must inherit this component or operator configuration class to implement the corresponding configuration. The structure of each component or operator configuration must be identical to the configuration structure created on the Dataphin page.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component configuration in JSON string format. Refer to the toJsonString method of the relevant subclasses of com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (for workflow operators, use com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig). Developers must inherit this component or operator configuration class to implement the corresponding configuration. The structure of each component or operator configuration must be identical to the task configuration structure created on the Dataphin page.
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
   * The component type. Valid values: input: input component. output: output component. transfrom: transform component. process: flow control component. For workflow tasks, this indicates the operator type, such as image for images and text for text. Refer to the stepType field in the com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig utility class. Developers must inherit this component or operator configuration class to implement the corresponding configuration. The structure of each component or operator configuration must be identical to the configuration structure created on the Dataphin page.
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

export class CreatePipelineByAsyncRequestCreateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) link configuration that describes the connection relationships among all components.
   * 
   * This parameter is required.
   */
  hops?: CreatePipelineByAsyncRequestCreateCommandPipelineConfigHops[];
  /**
   * @remarks
   * The component or operator configurations, including the detailed configurations of all used components or operators.
   * 
   * This parameter is required.
   */
  steps?: CreatePipelineByAsyncRequestCreateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': CreatePipelineByAsyncRequestCreateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': CreatePipelineByAsyncRequestCreateCommandPipelineConfigSteps },
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

export class CreatePipelineByAsyncRequestCreateCommand extends $dara.Model {
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
   * The integration pipeline configuration mode. Valid values: PIPELINE: pipeline mode (default). JSON: script mode. Ignore this parameter for workflows.
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
  nodeInfo?: CreatePipelineByAsyncRequestCreateCommandNodeInfo;
  /**
   * @remarks
   * The integration pipeline component or workflow operator configuration.
   * 
   * This parameter is required.
   */
  pipelineConfig?: CreatePipelineByAsyncRequestCreateCommandPipelineConfig;
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
   * The task type. Valid values: 0: offline integration (default). 1: real-time integration. 14: offline workflow task. 15: real-time workflow.
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * The schedule configuration in JSON string format. Refer to the toJsonString method in the com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig utility class.
   * 
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * The channel configuration in JSON string format. Refer to the toJsonString method in the com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting utility class.
   * 
   * @example
   * {}
   */
  settings?: string;
  /**
   * @remarks
   * Specifies whether to submit the task. By default, the task is submitted.
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
      nodeInfo: CreatePipelineByAsyncRequestCreateCommandNodeInfo,
      pipelineConfig: CreatePipelineByAsyncRequestCreateCommandPipelineConfig,
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

export class CreatePipelineByAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: CreatePipelineByAsyncRequestContext;
  /**
   * @remarks
   * The configuration for creating a pipeline or workflow task.
   * 
   * This parameter is required.
   */
  createCommand?: CreatePipelineByAsyncRequestCreateCommand;
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
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: CreatePipelineByAsyncRequestContext,
      createCommand: CreatePipelineByAsyncRequestCreateCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

