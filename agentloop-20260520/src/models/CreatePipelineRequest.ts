// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRequestExecutePolicyContinuous extends $dara.Model {
  /**
   * @remarks
   * The bootstrap start time in UNIX seconds. It has the same precision as runOnce or scheduled fromTime. Millisecond values greater than or equal to 1e12 are automatically converted. The cursor starts from this time aligned to the grid and catches up window by window. After catching up, it switches to minute intervals. By default, it starts from the current time and processes only incremental data.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start time of the data processing window in UNIX seconds. The value must be less than the toTime value.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The end time of the data processing window in UNIX seconds. The value must be greater than the fromTime value.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      toTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The start time of the scheduling in UNIX milliseconds.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The scheduling interval. Valid values: 1h, 6h, 12h, and 1d.
   * 
   * @example
   * 1h
   */
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      interval: 'interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      interval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The continuous execution configuration. This is used when the type is trace. The processing frequency is a fixed value managed by the server.
   * 
   * @example
   * {"fromTime":1735660800}
   */
  continuous?: CreatePipelineRequestExecutePolicyContinuous;
  /**
   * @remarks
   * The scheduling mode. Valid values: RunOnce (single execution) and Scheduled (periodic scheduling).
   * 
   * @example
   * RunOnce
   */
  mode?: string;
  /**
   * @remarks
   * The single execution configuration. This parameter is required only when the mode is RunOnce.
   * 
   * @example
   * {"fromTime":1735660800,"toTime":1735664400}
   */
  runOnce?: CreatePipelineRequestExecutePolicyRunOnce;
  /**
   * @remarks
   * The periodic scheduling configuration. This parameter is required only when the mode is Scheduled.
   * 
   * @example
   * {"interval":"1h","fromTime":1735660800}
   */
  scheduled?: CreatePipelineRequestExecutePolicyScheduled;
  static names(): { [key: string]: string } {
    return {
      continuous: 'continuous',
      mode: 'mode',
      runOnce: 'runOnce',
      scheduled: 'scheduled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      continuous: CreatePipelineRequestExecutePolicyContinuous,
      mode: 'string',
      runOnce: CreatePipelineRequestExecutePolicyRunOnce,
      scheduled: CreatePipelineRequestExecutePolicyScheduled,
    };
  }

  validate() {
    if(this.continuous && typeof (this.continuous as any).validate === 'function') {
      (this.continuous as any).validate();
    }
    if(this.runOnce && typeof (this.runOnce as any).validate === 'function') {
      (this.runOnce as any).validate();
    }
    if(this.scheduled && typeof (this.scheduled as any).validate === 'function') {
      (this.scheduled as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestPipelineNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * node-1
   */
  id?: string;
  /**
   * @remarks
   * The parameters of the node. This is a key-value structure and varies based on the node type.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * transform
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      parameters: 'parameters',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   * 
   * @example
   * [{"id":"select-fields","type":"project","parameters":{}}]
   */
  nodes?: CreatePipelineRequestPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': CreatePipelineRequestPipelineNodes },
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkConditionDefaultSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the agent space to which the default destination dataset belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the default destination dataset.
   * 
   * @example
   * other-result
   */
  dataset?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkConditionDefaultSink extends $dara.Model {
  /**
   * @remarks
   * The default destination dataset.
   */
  dataset?: CreatePipelineRequestSinkConditionDefaultSinkDataset;
  /**
   * @remarks
   * The default destination type. Currently, only dataset is supported.
   * 
   * @example
   * dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: CreatePipelineRequestSinkConditionDefaultSinkDataset,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkConditionRoutesSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the agent space to which the destination dataset belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the destination dataset.
   * 
   * @example
   * refund-result
   */
  dataset?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkConditionRoutesSink extends $dara.Model {
  /**
   * @remarks
   * The destination dataset for the route.
   */
  dataset?: CreatePipelineRequestSinkConditionRoutesSinkDataset;
  /**
   * @remarks
   * The destination type for the route. Currently, only dataset is supported.
   * 
   * @example
   * dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: CreatePipelineRequestSinkConditionRoutesSinkDataset,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkConditionRoutes extends $dara.Model {
  /**
   * @remarks
   * The route expression in Search Processing Language (SPL). Only where, project, and extend are supported.
   * 
   * @example
   * * | where intent = \\"refund\\"
   */
  expression?: string;
  /**
   * @remarks
   * The route ID.
   * 
   * @example
   * refund
   */
  id?: string;
  /**
   * @remarks
   * The write destination for the route.
   */
  sink?: CreatePipelineRequestSinkConditionRoutesSink;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
      id: 'id',
      sink: 'sink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      id: 'string',
      sink: CreatePipelineRequestSinkConditionRoutesSink,
    };
  }

  validate() {
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkCondition extends $dara.Model {
  /**
   * @remarks
   * The default write destination used when no conditional route is matched.
   */
  defaultSink?: CreatePipelineRequestSinkConditionDefaultSink;
  /**
   * @remarks
   * The route matching mode. Currently, only all is supported.
   * 
   * @example
   * all
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of conditional routes.
   */
  routes?: CreatePipelineRequestSinkConditionRoutes[];
  static names(): { [key: string]: string } {
    return {
      defaultSink: 'defaultSink',
      matchMode: 'matchMode',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSink: CreatePipelineRequestSinkConditionDefaultSink,
      matchMode: 'string',
      routes: { 'type': 'array', 'itemType': CreatePipelineRequestSinkConditionRoutes },
    };
  }

  validate() {
    if(this.defaultSink && typeof (this.defaultSink as any).validate === 'function') {
      (this.defaultSink as any).validate();
    }
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the agent space to which the destination dataset belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The name of the destination dataset.
   * 
   * @example
   * my-dataset
   */
  dataset?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      dataset: 'dataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      dataset: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSink extends $dara.Model {
  /**
   * @remarks
   * The conditional routing configuration. This is used only when sink.type is set to condition.
   */
  condition?: CreatePipelineRequestSinkCondition;
  /**
   * @remarks
   * The destination dataset configuration for the dataset sink. This is used only when sink.type is set to dataset.
   */
  dataset?: CreatePipelineRequestSinkDataset;
  /**
   * @remarks
   * The destination type. Currently, dataset is supported.
   * 
   * @example
   * Dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      dataset: 'dataset',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: CreatePipelineRequestSinkCondition,
      dataset: CreatePipelineRequestSinkDataset,
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSourceDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the source dataset.
   * 
   * @example
   * my-dataset
   */
  dataset?: string;
  /**
   * @remarks
   * The data filter condition for the dataset.
   * 
   * @example
   * status = \\"pending\\"
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSourceInputFields extends $dara.Model {
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * question
   */
  name?: string;
  /**
   * @remarks
   * The data type of the field. Valid values: text, long, double, and json.
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSourceLogstore extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * my-sls-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * my-sls-project
   */
  project?: string;
  /**
   * @remarks
   * The data filtered query statement, which uses the Simple Log Service query and analysis syntax.
   * 
   * @example
   * * | SELECT *
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSourceTrajectoryEnrich extends $dara.Model {
  /**
   * @remarks
   * The list of enrichment columns. This parameter is retained for backward compatibility. The current implementation outputs only the fixed agent_trajectory column, and this parameter no longer affects the output.
   * 
   * @example
   * ["input","output","session_id"]
   */
  columns?: string[];
  /**
   * @remarks
   * Specifies whether to enable trajectory enrichment.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory enrichment configuration. It mounts trajectory data into the scrubbing results based on the trace_id. When writing to a dataset, the data is stored in the fixed agent_trajectory column, where the column value is the trajectory JSON content.
   * 
   * @example
   * {"enabled":true,"columns":["input","output"]}
   */
  enrich?: CreatePipelineRequestSourceTrajectoryEnrich;
  static names(): { [key: string]: string } {
    return {
      enrich: 'enrich',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrich: CreatePipelineRequestSourceTrajectoryEnrich,
    };
  }

  validate() {
    if(this.enrich && typeof (this.enrich as any).validate === 'function') {
      (this.enrich as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config under the current agent space.
   * 
   * @example
   * {"dataset":"my-dataset","filter":"status = \\"pending\\""}
   */
  dataset?: CreatePipelineRequestSourceDataset;
  /**
   * @remarks
   * The input fields and their data types. This applies to all data source types.
   * 
   * @example
   * [{"name":"question","type":"text"}]
   */
  inputFields?: CreatePipelineRequestSourceInputFields[];
  /**
   * @remarks
   * The Simple Log Service Logstore datasource config.
   * 
   * @example
   * {"project":"my-sls-project","logstore":"agent-logs"}
   */
  logstore?: CreatePipelineRequestSourceLogstore;
  /**
   * @remarks
   * The trajectory data configuration. This is optional and takes effect only when the type is set to trace. It retrieves ATIF standard trajectory data from the trajectory scrubbing service and extends it based on features.
   * 
   * @example
   * {"enrich":{"enabled":true,"columns":["input","output"]}}
   */
  trajectory?: CreatePipelineRequestSourceTrajectory;
  /**
   * @remarks
   * The data source type. Currently, Simple Log Service is supported.
   * 
   * @example
   * SLS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      inputFields: 'inputFields',
      logstore: 'logstore',
      trajectory: 'trajectory',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: CreatePipelineRequestSourceDataset,
      inputFields: { 'type': 'array', 'itemType': CreatePipelineRequestSourceInputFields },
      logstore: CreatePipelineRequestSourceLogstore,
      trajectory: CreatePipelineRequestSourceTrajectory,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(Array.isArray(this.inputFields)) {
      $dara.Model.validateArray(this.inputFields);
    }
    if(this.logstore && typeof (this.logstore as any).validate === 'function') {
      (this.logstore as any).validate();
    }
    if(this.trajectory && typeof (this.trajectory as any).validate === 'function') {
      (this.trajectory as any).validate();
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
   * The description of the pipeline. Maximum length: 256 characters.
   * 
   * @example
   * Collect trace data from SLS and perform data cleaning into a dataset
   */
  description?: string;
  /**
   * @remarks
   * The scheduling method.
   * 
   * @example
   * {"mode":"RunOnce","runOnce":{"fromTime":1735660800,"toTime":1735664400}}
   */
  executePolicy?: CreatePipelineRequestExecutePolicy;
  /**
   * @remarks
   * The pipeline configuration, including node orchestration.
   * 
   * @example
   * {"nodes":[{"id":"select-fields","type":"project","parameters":{"question":"user_query"}}]}
   */
  pipeline?: CreatePipelineRequestPipeline;
  /**
   * @remarks
   * The name of the pipeline. The name must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens (-).
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The pipeline sink, which is the data write destination.
   */
  sink?: CreatePipelineRequestSink;
  /**
   * @remarks
   * The data source for the pipeline.
   * 
   * @example
   * {"type":"logstore","logstore":{"project":"my-sls-project","logstore":"agent-logs"},"inputFields":[{"name":"question","type":"text"}]}
   */
  source?: CreatePipelineRequestSource;
  /**
   * @remarks
   * The idempotency token. This is a unique string generated by the client to ensure the idempotency of the create operation.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      executePolicy: 'executePolicy',
      pipeline: 'pipeline',
      pipelineName: 'pipelineName',
      sink: 'sink',
      source: 'source',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      executePolicy: CreatePipelineRequestExecutePolicy,
      pipeline: CreatePipelineRequestPipeline,
      pipelineName: 'string',
      sink: CreatePipelineRequestSink,
      source: CreatePipelineRequestSource,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.executePolicy && typeof (this.executePolicy as any).validate === 'function') {
      (this.executePolicy as any).validate();
    }
    if(this.pipeline && typeof (this.pipeline as any).validate === 'function') {
      (this.pipeline as any).validate();
    }
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

