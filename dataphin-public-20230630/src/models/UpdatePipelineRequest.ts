// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequestContext extends $dara.Model {
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
   * The project ID to which the integration pipeline or workflow node belongs.
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

export class UpdatePipelineRequestUpdateCommandNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The folder of the integration pipeline or workflow node. Default value: root directory. The folder must already exist. If it does not exist, call the relevant API operation to create a folder of type offlinePipeline (or unstructuredPipeline for workflow nodes).
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The pipeline or workflow file ID. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of the following parameters: pipelineId, fileId, or nodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The schedule node ID of the pipeline or workflow node. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of the following parameters: pipelineId, fileId, or nodeId.
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
   * The pipeline or workflow node ID. Leave this parameter empty for initial creation. When updating a pipeline or workflow node, specify at least one of the following parameters: pipelineId, fileId, or nodeId.
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

export class UpdatePipelineRequestUpdateCommandPipelineConfigHops extends $dara.Model {
  /**
   * @remarks
   * Specifies the conditional distribution setting for a conditional distribution component. Set this parameter to true if the downstream connection condition is true, or false otherwise. This parameter is not applicable to workflow nodes.
   */
  sendTo?: boolean;
  /**
   * @remarks
   * The name of the source step, which corresponds to Steps[*].StepName.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * The name of the target step, which corresponds to Steps[*].StepName.
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

export class UpdatePipelineRequestUpdateCommandPipelineConfigSteps extends $dara.Model {
  /**
   * @remarks
   * Specifies the data distribution mode when the current component has multiple downstream components. Valid values:
   * 
   * - true: Data from the current component is distributed to all downstream components in a round-robin manner. For example, if the current component has 100 records and two downstream components, each downstream component receives 50 records. Default value: true.
   * - false: Full data from the current component is sent to all downstream components. For example, if the current component has 100 records and two downstream components, both downstream components receive 100 records.
   * 
   * This parameter is not applicable to workflow nodes.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin or operator has a unique identifier. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepKey. Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component configuration in JSON string format. Refer to the toJsonString method of the relevant subclasses of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (for workflow operators, use com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig). Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the node configuration created on the Dataphin console.
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
   * For workflow nodes, this parameter indicates the operator type, such as image for images and text for text. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepType. Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
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

export class UpdatePipelineRequestUpdateCommandPipelineConfig extends $dara.Model {
  /**
   * @remarks
   * The directed acyclic graph (DAG) link configuration that describes the connections between all components or operators.
   * 
   * This parameter is required.
   */
  hops?: UpdatePipelineRequestUpdateCommandPipelineConfigHops[];
  /**
   * @remarks
   * The component or operator configurations, including detailed configurations for all components or operators used.
   * 
   * This parameter is required.
   */
  steps?: UpdatePipelineRequestUpdateCommandPipelineConfigSteps[];
  static names(): { [key: string]: string } {
    return {
      hops: 'Hops',
      steps: 'Steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hops: { 'type': 'array', 'itemType': UpdatePipelineRequestUpdateCommandPipelineConfigHops },
      steps: { 'type': 'array', 'itemType': UpdatePipelineRequestUpdateCommandPipelineConfigSteps },
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

export class UpdatePipelineRequestUpdateCommand extends $dara.Model {
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
   * - PIPELINE: pipeline mode (default).
   * - JSON: script mode.
   * 
   * This parameter is not applicable to workflow nodes.
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
  nodeInfo?: UpdatePipelineRequestUpdateCommandNodeInfo;
  /**
   * @remarks
   * The integration pipeline component or workflow operator configuration.
   * 
   * This parameter is required.
   */
  pipelineConfig?: UpdatePipelineRequestUpdateCommandPipelineConfig;
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
   * - 0: offline integration (default).
   * - 1: real-time integration.
   * - 14: workflow node.
   * - 15: real-time workflow.
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * The schedule configuration in JSON string format. Refer to the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig#toJsonString method.
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
      nodeInfo: UpdatePipelineRequestUpdateCommandNodeInfo,
      pipelineConfig: UpdatePipelineRequestUpdateCommandPipelineConfig,
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

export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  context?: UpdatePipelineRequestContext;
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
  /**
   * @remarks
   * The configuration for updating the pipeline or workflow node.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdatePipelineRequestUpdateCommand;
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
      context: UpdatePipelineRequestContext,
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdatePipelineRequestUpdateCommand,
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

