// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineByAsyncRequestContext extends $dara.Model {
  /**
   * @remarks
   * Current operating environment env: DEV - indicates the development environment, PROD - indicates the production environment (for workflows, only PROD is currently supported)
   * 
   * This parameter is required.
   * 
   * @example
   * DEV
   */
  env?: string;
  /**
   * @remarks
   * Project ID to which the integration pipeline/workflow task belongs
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
   * Integration pipeline task node directory (defaults to the root directory). The directory must exist. If it does not exist, call the relevant API to create a directory of type offlinePipeline
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * Pipeline file ID. Leave empty for the first creation. When updating a pipeline task, at least one of pipelineId, fileId, or nodeId must be configured
   * 
   * @example
   * 123
   */
  fileId?: number;
  /**
   * @remarks
   * Pipeline task scheduling node ID. Leave empty for the first creation. When updating a pipeline task, at least one of pipelineId, fileId, or nodeId must be configured
   * 
   * @example
   * n_123
   */
  nodeId?: string;
  /**
   * @remarks
   * Integration pipeline task name
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * Pipeline task ID. Leave empty for the first creation. When updating a pipeline task, at least one of pipelineId, fileId, or nodeId must be configured
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
   * For conditional distribution components, set to true when the downstream connection condition is true, otherwise set to false. This is not applicable to workflow tasks.
   */
  sendTo?: boolean;
  /**
   * @remarks
   * Input step name, i.e., Steps[*].StepName
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  source?: string;
  /**
   * @remarks
   * Output step name, i.e., Steps[*].StepName
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
   * Indicates the data distribution method when the current component has multiple downstream components: true - indicates that the data of the current component is sent to all downstream components in a round-robin manner. For example, if the current component has 100 records and two downstream components, each downstream component receives 50 records. The default value is true. false - indicates that the data of the current component is sent in full to all downstream components. For example, if the current component has 100 records and two downstream components, both downstream components receive 100 records. This value is not applicable to workflow tasks.
   */
  isDistribute?: boolean;
  /**
   * @remarks
   * Plugin ID. Each plugin/operator has a unique identifier. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepKey. Developers should extend the component/operator configuration class to implement the corresponding component/operator configuration. Each component/operator configuration has the same structure as a configuration created on the Dataphin page
   * 
   * This parameter is required.
   * 
   * @example
   * mysqlinput
   */
  key?: string;
  /**
   * @remarks
   * Specific component configuration in JSON string format. Refer to the utility class: subclasses of com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig (for workflow operators, use com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.unstructured.BaseOAUnstructuredNeuronConfig) and their toJsonString methods. Developers should extend the component/operator configuration class to implement the corresponding component/operator configuration. Each component/operator configuration has the same structure as a task configuration created on the Dataphin page
   * 
   * This parameter is required.
   * 
   * @example
   * {}
   */
  pluginConfig?: string;
  /**
   * @remarks
   * Step name. Step names must be unique within the same pipeline task
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_reader
   */
  stepName?: string;
  /**
   * @remarks
   * Component type: input - indicates an input component, output - indicates an output component, transform - indicates a transform component, process - indicates a flow control component. For workflow tasks, it indicates the operator type, for example: image - image, text - text. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig#stepType. Developers should extend the component/operator configuration class to implement the corresponding component/operator configuration. Each component/operator configuration has the same structure as a configuration created on the Dataphin page
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
   * DAG (Directed Acyclic Graph) link configuration: describes the connection relationships of all components
   * 
   * This parameter is required.
   */
  hops?: CreatePipelineByAsyncRequestCreateCommandPipelineConfigHops[];
  /**
   * @remarks
   * Component/operator configuration: contains detailed configurations of all components/operators used
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
   * Comment
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * Integration pipeline configuration mode: PIPELINE - indicates pipeline mode (default), JSON - indicates script mode. This is not applicable to workflows.
   * 
   * @example
   * PIPELINE
   */
  mode?: string;
  /**
   * @remarks
   * Integration pipeline task basic information
   * 
   * This parameter is required.
   */
  nodeInfo?: CreatePipelineByAsyncRequestCreateCommandNodeInfo;
  /**
   * @remarks
   * Integration pipeline component/workflow operator configuration
   * 
   * This parameter is required.
   */
  pipelineConfig?: CreatePipelineByAsyncRequestCreateCommandPipelineConfig;
  /**
   * @remarks
   * In script mode: integration pipeline configuration (in JSON string format). Workflow tasks do not support script mode
   * 
   * @example
   * {}
   */
  pipelineJson?: string;
  /**
   * @remarks
   * Task type: 0 - indicates offline integration (default), 1 - indicates real-time integration, 14 - indicates a workflow task
   * 
   * @example
   * 0
   */
  pipelineType?: number;
  /**
   * @remarks
   * Scheduling configuration in JSON string format. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAScheduleConfig#toJsonString method
   * 
   * This parameter is required.
   * 
   * @example
   * {"cronExpression":"0 0 0 * * ?"}
   */
  scheduleConfig?: string;
  /**
   * @remarks
   * Channel configuration in JSON string format. Refer to the utility class: com.alibaba.dataphin.pipeline.common.facade.openapi.model.OAPipelineSetting#toJsonString method
   * 
   * @example
   * {}
   */
  settings?: string;
  /**
   * @remarks
   * Whether to submit. The default is to submit
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
   * Request context information
   * 
   * This parameter is required.
   */
  context?: CreatePipelineByAsyncRequestContext;
  /**
   * @remarks
   * Create pipeline/workflow task configuration
   * 
   * This parameter is required.
   */
  createCommand?: CreatePipelineByAsyncRequestCreateCommand;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: CreatePipelineByAsyncRequestContext,
      createCommand: CreatePipelineByAsyncRequestCreateCommand,
      opTenantId: 'number',
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

