// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * 
   * - DEV: the development environment.
   * - PROD: the production environment.
   * 
   * For workflow nodes, only PROD is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline or workflow node belongs.
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

export class CreatePipelineRequestCreateCommandNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The folder of the integration pipeline or workflow node. Default value: root folder. The folder must already exist. If it does not exist, call the relevant API operation to create a folder of type offlinePipeline (or unstructuredPipeline for workflows).
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The pipeline or workflow file ID. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The scheduling node ID of the pipeline or workflow node. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the integration pipeline or workflow node.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The pipeline or workflow node ID. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of pipelineId, fileId, or nodeId.
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

export class CreatePipelineRequestCreateCommandPipelineConfigHops extends $dara.Model {
  /**
   * @remarks
   * Specifies the downstream condition for a conditional distribution component. Set this parameter to true if the downstream condition is true, or false otherwise. If the node is a workflow node, you can ignore this parameter.
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

export class CreatePipelineRequestCreateCommandPipelineConfigSteps extends $dara.Model {
  /**
   * @remarks
   * Specifies the data distribution mode when the current component has multiple downstream components. Valid values:
   * 
   * - true: The data of the current component is distributed to all downstream components in a round-robin manner. For example, if the current component has 100 records and two downstream components, each downstream component receives 50 records. Default value: true.
   * - false: The full data of the current component is sent to all downstream components. For example, if the current component has 100 records and two downstream components, both downstream components receive 100 records.
   * 
   * If the node is a workflow node, you can ignore this parameter.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin or operator has a unique identifier. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepKey. Developers should inherit the component or operator configuration class and implement the corresponding component or operator configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component configuration in JSON string format. Refer to the toJsonString method of the relevant subclasses of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (for workflow operators, use com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig). Developers should inherit the component or operator configuration class and implement the corresponding component or operator configuration. Each component or operator configuration has the same structure as the node configuration created on the Dataphin console.
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * The step name. Step names must be unique within the same pipeline node.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @remarks
   * The component type. Valid values:
   * 
   * - input: an input component.
   * - output: an output component.
   * - transfrom: a transform component.
   * - process: a flow control component.
   * 
   * For workflow nodes, this parameter specifies the operator type, such as image or text. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepType. Developers should inherit the component or operator configuration class and implement the corresponding component or operator configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
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

export class CreatePipelineRequestCreateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) link configuration that describes the connections between all components or operators.
   * 
   * This parameter is required.
   */
  hops?: CreatePipelineRequestCreateCommandPipelineConfigHops[];
  /**
   * @remarks
   * The component or operator configurations, which contain the detailed configurations of all components or operators used.
   * 
   * This parameter is required.
   */
  steps?: CreatePipelineRequestCreateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': CreatePipelineRequestCreateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': CreatePipelineRequestCreateCommandPipelineConfigSteps },
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

export class CreatePipelineRequestCreateCommand extends $dara.Model {
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
   * The integration pipeline configuration mode. Valid values:
   * 
   * - PIPELINE: pipeline mode. This is the default value.
   * - JSON: script mode.
   * 
   * If the node is a workflow node, you can ignore this parameter.
   * 
   * @example
   * PIPELINE
   */
  mode?: string;
  /**
   * @remarks
   * The basic information of the integration pipeline or workflow node.
   * 
   * This parameter is required.
   */
  nodeInfo?: CreatePipelineRequestCreateCommandNodeInfo;
  /**
   * @remarks
   * The integration pipeline component or workflow operator configuration.
   * 
   * This parameter is required.
   */
  pipelineConfig?: CreatePipelineRequestCreateCommandPipelineConfig;
  /**
   * @remarks
   * The integration pipeline configuration in JSON string format for script mode. Workflow nodes do not support script mode.
   * 
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * - 0: offline integration. Default value: 0.
   * - 1: real-time integration.
   * - 14: offline workflow node.
   * - 15: real-time workflow.
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * The scheduling configuration in JSON string format. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig#toJsonString method.
   * 
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * The channel configuration in JSON string format. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting#toJsonString method.
   * 
   * @example
   * {}
   */
  settings?: string;
  /**
   * @remarks
   * Specifies whether to submit the node. The node is submitted by default.
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
      nodeInfo: CreatePipelineRequestCreateCommandNodeInfo,
      pipelineConfig: CreatePipelineRequestCreateCommandPipelineConfig,
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

export class CreatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: CreatePipelineRequestContext;
  /**
   * @remarks
   * The configuration for creating a pipeline or workflow node.
   * 
   * This parameter is required.
   */
  createCommand?: CreatePipelineRequestCreateCommand;
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
   * The ID of the operator user.
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
      context: CreatePipelineRequestContext,
      createCommand: CreatePipelineRequestCreateCommand,
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

