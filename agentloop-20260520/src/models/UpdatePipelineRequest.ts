// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePipelineRequestExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start time for data processing, in UNIX millisecond timestamp.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The end time for data processing, in UNIX millisecond timestamp.
   * 
   * @example
   * 1735747200000
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

export class UpdatePipelineRequestExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The scheduling start time, in UNIX millisecond timestamp.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The scheduling interval. For example, 1h.
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

export class UpdatePipelineRequestExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The scheduling mode. For example, Scheduled (timed scheduling) or RunOnce (one-time execution).
   * 
   * @example
   * Scheduled
   */
  mode?: string;
  /**
   * @remarks
   * The configuration for one-time execution.
   */
  runOnce?: UpdatePipelineRequestExecutePolicyRunOnce;
  /**
   * @remarks
   * The timed scheduling configuration.
   */
  scheduled?: UpdatePipelineRequestExecutePolicyScheduled;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      runOnce: 'runOnce',
      scheduled: 'scheduled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      runOnce: UpdatePipelineRequestExecutePolicyRunOnce,
      scheduled: UpdatePipelineRequestExecutePolicyScheduled,
    };
  }

  validate() {
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

export class UpdatePipelineRequestPipelineNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * node-1
   */
  id?: string;
  /**
   * @remarks
   * The node parameters in key-value format. The parameters vary depending on the node type.
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The node type.
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

export class UpdatePipelineRequestPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: UpdatePipelineRequestPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': UpdatePipelineRequestPipelineNodes },
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

export class UpdatePipelineRequestSinkConditionDefaultSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the default destination dataset belongs.
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

export class UpdatePipelineRequestSinkConditionDefaultSink extends $dara.Model {
  /**
   * @remarks
   * The default destination dataset.
   */
  dataset?: UpdatePipelineRequestSinkConditionDefaultSinkDataset;
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
      dataset: UpdatePipelineRequestSinkConditionDefaultSinkDataset,
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

export class UpdatePipelineRequestSinkConditionRoutesSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the destination dataset belongs.
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

export class UpdatePipelineRequestSinkConditionRoutesSink extends $dara.Model {
  /**
   * @remarks
   * The destination dataset for the route.
   */
  dataset?: UpdatePipelineRequestSinkConditionRoutesSinkDataset;
  /**
   * @remarks
   * The route destination type. Currently, only dataset is supported.
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
      dataset: UpdatePipelineRequestSinkConditionRoutesSinkDataset,
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

export class UpdatePipelineRequestSinkConditionRoutes extends $dara.Model {
  /**
   * @remarks
   * The route expression in SPL. Only where, project, and extend are supported.
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
  sink?: UpdatePipelineRequestSinkConditionRoutesSink;
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
      sink: UpdatePipelineRequestSinkConditionRoutesSink,
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

export class UpdatePipelineRequestSinkCondition extends $dara.Model {
  /**
   * @remarks
   * The default write destination used when no conditional route is matched.
   */
  defaultSink?: UpdatePipelineRequestSinkConditionDefaultSink;
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
  routes?: UpdatePipelineRequestSinkConditionRoutes[];
  static names(): { [key: string]: string } {
    return {
      defaultSink: 'defaultSink',
      matchMode: 'matchMode',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSink: UpdatePipelineRequestSinkConditionDefaultSink,
      matchMode: 'string',
      routes: { 'type': 'array', 'itemType': UpdatePipelineRequestSinkConditionRoutes },
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

export class UpdatePipelineRequestSinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the destination dataset belongs.
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

export class UpdatePipelineRequestSink extends $dara.Model {
  /**
   * @remarks
   * The conditional routing configuration. This parameter takes effect only when sink.type is set to condition.
   */
  condition?: UpdatePipelineRequestSinkCondition;
  /**
   * @remarks
   * The destination dataset configuration for the dataset sink. This parameter takes effect only when sink.type is set to dataset.
   */
  dataset?: UpdatePipelineRequestSinkDataset;
  /**
   * @remarks
   * The sink type. Valid values: dataset and condition.
   * 
   * @example
   * condition
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
      condition: UpdatePipelineRequestSinkCondition,
      dataset: UpdatePipelineRequestSinkDataset,
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

export class UpdatePipelineRequestSourceDataset extends $dara.Model {
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
   * The filter condition for the dataset data.
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

export class UpdatePipelineRequestSourceInputFields extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * question
   */
  name?: string;
  /**
   * @remarks
   * The field type. Valid values: text, long, double, and json.
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

export class UpdatePipelineRequestSourceLogstore extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * my-sls-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the SLS project.
   * 
   * @example
   * my-sls-project
   */
  project?: string;
  /**
   * @remarks
   * The data filtered query statement in SLS query/analysis syntax.
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

export class UpdatePipelineRequestSource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config within the current AgentSpace.
   */
  dataset?: UpdatePipelineRequestSourceDataset;
  /**
   * @remarks
   * The input fields and their types. This parameter applies to all data source types.
   */
  inputFields?: UpdatePipelineRequestSourceInputFields[];
  /**
   * @remarks
   * The SLS Logstore datasource config.
   */
  logstore?: UpdatePipelineRequestSourceLogstore;
  /**
   * @remarks
   * The data source type. Valid values: logstore and dataset.
   * 
   * @example
   * dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      inputFields: 'inputFields',
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: UpdatePipelineRequestSourceDataset,
      inputFields: { 'type': 'array', 'itemType': UpdatePipelineRequestSourceInputFields },
      logstore: UpdatePipelineRequestSourceLogstore,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the pipeline, which helps users understand its purpose.
   * 
   * @example
   * My pipeline
   */
  description?: string;
  /**
   * @remarks
   * The scheduling policy. If provided, the entire scheduling policy is overwritten.
   */
  executePolicy?: UpdatePipelineRequestExecutePolicy;
  /**
   * @remarks
   * The pipeline configuration (node orchestration). If specified, the existing pipeline configuration is entirely overwritten.
   */
  pipeline?: UpdatePipelineRequestPipeline;
  /**
   * @remarks
   * The pipeline sink (data write destination). If provided, the entire sink configuration is overwritten.
   */
  sink?: UpdatePipelineRequestSink;
  /**
   * @remarks
   * The pipeline data source. If specified, the existing source configuration is entirely overwritten.
   */
  source?: UpdatePipelineRequestSource;
  /**
   * @remarks
   * The idempotency token. A unique string generated by the client to ensure the idempotency of the update operation.
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
      sink: 'sink',
      source: 'source',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      executePolicy: UpdatePipelineRequestExecutePolicy,
      pipeline: UpdatePipelineRequestPipeline,
      sink: UpdatePipelineRequestSink,
      source: UpdatePipelineRequestSource,
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

