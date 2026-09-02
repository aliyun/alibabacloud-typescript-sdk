// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start time for data processing. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The end time for data processing. The value is a UNIX timestamp in milliseconds.
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

export class GetPipelineResponseBodyExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The scheduling start time. The value is a UNIX timestamp in milliseconds.
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

export class GetPipelineResponseBodyExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The scheduling mode. For example, scheduled (timed scheduling) or runOnce (one-time execution).
   * 
   * @example
   * scheduled
   */
  mode?: string;
  /**
   * @remarks
   * The configuration for one-time execution.
   */
  runOnce?: GetPipelineResponseBodyExecutePolicyRunOnce;
  /**
   * @remarks
   * The timed scheduling configuration.
   */
  scheduled?: GetPipelineResponseBodyExecutePolicyScheduled;
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
      runOnce: GetPipelineResponseBodyExecutePolicyRunOnce,
      scheduled: GetPipelineResponseBodyExecutePolicyScheduled,
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

export class GetPipelineResponseBodyPipelineNodes extends $dara.Model {
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
   * The node parameters in key-value structure, which vary depending on the node type.
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

export class GetPipelineResponseBodyPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: GetPipelineResponseBodyPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetPipelineResponseBodyPipelineNodes },
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

export class GetPipelineResponseBodySinkConditionDefaultSinkDataset extends $dara.Model {
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

export class GetPipelineResponseBodySinkConditionDefaultSink extends $dara.Model {
  /**
   * @remarks
   * The default destination dataset.
   */
  dataset?: GetPipelineResponseBodySinkConditionDefaultSinkDataset;
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
      dataset: GetPipelineResponseBodySinkConditionDefaultSinkDataset,
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

export class GetPipelineResponseBodySinkConditionRoutesSinkDataset extends $dara.Model {
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

export class GetPipelineResponseBodySinkConditionRoutesSink extends $dara.Model {
  /**
   * @remarks
   * The route destination dataset.
   */
  dataset?: GetPipelineResponseBodySinkConditionRoutesSinkDataset;
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
      dataset: GetPipelineResponseBodySinkConditionRoutesSinkDataset,
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

export class GetPipelineResponseBodySinkConditionRoutes extends $dara.Model {
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
   * The route write destination.
   */
  sink?: GetPipelineResponseBodySinkConditionRoutesSink;
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
      sink: GetPipelineResponseBodySinkConditionRoutesSink,
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

export class GetPipelineResponseBodySinkCondition extends $dara.Model {
  /**
   * @remarks
   * The default write destination used when no conditional route is matched.
   */
  defaultSink?: GetPipelineResponseBodySinkConditionDefaultSink;
  /**
   * @remarks
   * The route match mode. Currently, only all is supported.
   * 
   * @example
   * all
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of conditional routes.
   */
  routes?: GetPipelineResponseBodySinkConditionRoutes[];
  static names(): { [key: string]: string } {
    return {
      defaultSink: 'defaultSink',
      matchMode: 'matchMode',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSink: GetPipelineResponseBodySinkConditionDefaultSink,
      matchMode: 'string',
      routes: { 'type': 'array', 'itemType': GetPipelineResponseBodySinkConditionRoutes },
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

export class GetPipelineResponseBodySinkDataset extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace to which the target dataset belongs.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * The target dataset name.
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

export class GetPipelineResponseBodySink extends $dara.Model {
  /**
   * @remarks
   * The conditional routing configuration. This parameter is used only when sink.type is set to condition.
   */
  condition?: GetPipelineResponseBodySinkCondition;
  /**
   * @remarks
   * The target dataset configuration for the dataset sink. This parameter is used only when sink.type is set to dataset.
   */
  dataset?: GetPipelineResponseBodySinkDataset;
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
      condition: GetPipelineResponseBodySinkCondition,
      dataset: GetPipelineResponseBodySinkDataset,
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

export class GetPipelineResponseBodySourceDataset extends $dara.Model {
  /**
   * @remarks
   * The source dataset name.
   * 
   * @example
   * my-dataset
   */
  dataset?: string;
  /**
   * @remarks
   * The dataset data filter condition.
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

export class GetPipelineResponseBodySourceInputFields extends $dara.Model {
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

export class GetPipelineResponseBodySourceLogstore extends $dara.Model {
  /**
   * @remarks
   * The SLS Logstore name.
   * 
   * @example
   * my-sls-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The SLS project name.
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

export class GetPipelineResponseBodySource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config under the current AgentSpace.
   */
  dataset?: GetPipelineResponseBodySourceDataset;
  /**
   * @remarks
   * The input fields and field types, applicable to all data source types.
   */
  inputFields?: GetPipelineResponseBodySourceInputFields[];
  /**
   * @remarks
   * The SLS Logstore datasource config.
   */
  logstore?: GetPipelineResponseBodySourceLogstore;
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
      dataset: GetPipelineResponseBodySourceDataset,
      inputFields: { 'type': 'array', 'itemType': GetPipelineResponseBodySourceInputFields },
      logstore: GetPipelineResponseBodySourceLogstore,
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

export class GetPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The committed watermark. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735660800
   */
  committedWatermark?: number;
  /**
   * @remarks
   * The time when the pipeline was created, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The pipeline description.
   * 
   * @example
   * My pipeline
   */
  description?: string;
  /**
   * @remarks
   * The scheduling method.
   */
  executePolicy?: GetPipelineResponseBodyExecutePolicy;
  /**
   * @remarks
   * The next scheduling trigger time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735661100
   */
  nextTriggerTime?: number;
  /**
   * @remarks
   * The pipeline configuration for node orchestration.
   */
  pipeline?: GetPipelineResponseBodyPipeline;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling status. Valid values:
   * - None: No scheduling.
   * - Active: Active.
   * - Paused: Paused.
   * - Terminated: Terminated.
   * 
   * @example
   * Active
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The pipeline sink, which is the data write destination.
   */
  sink?: GetPipelineResponseBodySink;
  /**
   * @remarks
   * The pipeline data source.
   */
  source?: GetPipelineResponseBodySource;
  /**
   * @remarks
   * The time when the pipeline was last updated, in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The workspace associated with the pipeline.
   * 
   * @example
   * my-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      committedWatermark: 'committedWatermark',
      createTime: 'createTime',
      description: 'description',
      executePolicy: 'executePolicy',
      nextTriggerTime: 'nextTriggerTime',
      pipeline: 'pipeline',
      pipelineName: 'pipelineName',
      regionId: 'regionId',
      requestId: 'requestId',
      scheduleStatus: 'scheduleStatus',
      sink: 'sink',
      source: 'source',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedWatermark: 'number',
      createTime: 'string',
      description: 'string',
      executePolicy: GetPipelineResponseBodyExecutePolicy,
      nextTriggerTime: 'number',
      pipeline: GetPipelineResponseBodyPipeline,
      pipelineName: 'string',
      regionId: 'string',
      requestId: 'string',
      scheduleStatus: 'string',
      sink: GetPipelineResponseBodySink,
      source: GetPipelineResponseBodySource,
      updateTime: 'string',
      workspace: 'string',
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

