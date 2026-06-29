// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineByAsyncRequestContext extends $dara.Model {
  /**
   * @remarks
   * The current operating environment. Valid values:
   * 
   * - DEV: the development environment.
   * - PROD: the production environment.
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * The ID of the project to which the integration pipeline node belongs.
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
   * The folder of the integration pipeline node. Default value: root folder. The folder must exist. If it does not exist, call the relevant API operation to create a folder of the offlinePipeline type.
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The pipeline file ID. Leave this parameter empty for initial creation. When updating a pipeline node, specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * The scheduling node ID of the pipeline node. Leave this parameter empty for initial creation. When updating a pipeline node, specify at least one of pipelineId, fileId, or nodeId.
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the integration pipeline node.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The pipeline node ID. Leave this parameter empty for initial creation. When updating a pipeline node, specify at least one of pipelineId, fileId, or nodeId.
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
   * For conditional distribution components, set this parameter to true when the downstream condition is true, and to false otherwise. This parameter is not applicable to workflow nodes.
   */
  sendTo?: boolean;
  /**
   * @remarks
   * The input step name, which corresponds to Steps[*].StepName.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * The output step name, which corresponds to Steps[*].StepName.
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
   * 
   * - true: the data of the current component is distributed to all downstream components in a round-robin manner. For example, if the current component has 100 records and two downstream components, each downstream component receives 50 records. Default value: true.
   * - false: the full data of the current component is sent to all downstream components. For example, if the current component has 100 records and two downstream components, both downstream components receive 100 records.
   * 
   * This parameter is not applicable to workflow nodes.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * The plugin ID. Each plugin or operator has a unique identifier. Refer to the stepKey field of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig. Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * The specific component configuration in JSON string format. Refer to the toJsonString method of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (or com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig for workflow operators) and its subclasses. Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the node configuration created on the Dataphin console.
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
   * For workflow nodes, this parameter specifies the operator type, such as image for images and text for text. Refer to the stepType field of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig. Developers should inherit the component or operator configuration class and implement the corresponding configuration. Each component or operator configuration has the same structure as the configuration created on the Dataphin console.
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
   * The DAG (directed acyclic graph) link configurations that describe the connections between all components.
   * 
   * This parameter is required.
   */
  hops?: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfigHops[];
  /**
   * @remarks
   * The component configurations, including detailed configurations of all components used.
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
   * The remarks.
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
   * The basic information of the integration pipeline node.
   * 
   * This parameter is required.
   */
  nodeInfo?: UpdatePipelineByAsyncRequestUpdateCommandNodeInfo;
  /**
   * @remarks
   * The integration pipeline component configuration.
   * 
   * This parameter is required.
   */
  pipelineConfig?: UpdatePipelineByAsyncRequestUpdateCommandPipelineConfig;
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
   * - 0: batch integration (default).
   * - 1: real-time integration.
   * - 14: workflow node.
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * The scheduling configuration in JSON string format. Refer to the toJsonString method of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig.
   * 
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * The channel configuration in JSON string format. Refer to the toJsonString method of the utility class com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting.
   * 
   * @example
   * {}
   */
  settings?: string;
  /**
   * @remarks
   * Specifies whether to submit the node. Default value: true.
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
   * The pipeline node update configuration.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdatePipelineByAsyncRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: UpdatePipelineByAsyncRequestContext,
      opTenantId: 'number',
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

