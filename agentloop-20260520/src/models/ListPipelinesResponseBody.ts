// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyPipelinesExecutePolicyContinuous extends $dara.Model {
  /**
   * @remarks
   * The historical start time for bootstrap. The value is a UNIX timestamp in seconds, which has the same precision as runOnce/scheduled.fromTime. Millisecond values greater than or equal to 1e12 are automatically converted. The cursor starts from this time aligned to the grid and catches up window by window. After catching up, it switches to minute intervals. By default, it starts from the current time and processes only incremental data.
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

export class ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start time of the time slice. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The end time of the time slice. The value is a UNIX timestamp in seconds.
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

export class ListPipelinesResponseBodyPipelinesExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The start time of the scheduling. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735660800
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

export class ListPipelinesResponseBodyPipelinesExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The continuous execution configuration. This configuration is used when type is set to trace. The processing frequency is a fixed value managed by the server.
   * 
   * @example
   * {"fromTime":1735660800}
   */
  continuous?: ListPipelinesResponseBodyPipelinesExecutePolicyContinuous;
  /**
   * @remarks
   * The scheduling mode. Valid values: RunOnce (single execution), Scheduled (periodic execution), and Continuous (continuous execution, applicable only to trace data sources; the processing frequency is a fixed value managed by the server, and automatic processing occurs at the minute level after trace completion).
   * 
   * @example
   * RunOnce
   */
  mode?: string;
  /**
   * @remarks
   * The parameters for single execution. This field has a value only when mode is set to RunOnce.
   * 
   * @example
   * {"fromTime":1735660800,"toTime":1735664400}
   */
  runOnce?: ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce;
  /**
   * @remarks
   * The parameters for periodic scheduling. This field has a value only when mode is set to Scheduled.
   * 
   * @example
   * {"interval":"1h","fromTime":1735660800}
   */
  scheduled?: ListPipelinesResponseBodyPipelinesExecutePolicyScheduled;
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
      continuous: ListPipelinesResponseBodyPipelinesExecutePolicyContinuous,
      mode: 'string',
      runOnce: ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce,
      scheduled: ListPipelinesResponseBodyPipelinesExecutePolicyScheduled,
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

export class ListPipelinesResponseBodyPipelinesPipelineNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * stage_1
   */
  id?: string;
  /**
   * @remarks
   * The node parameters. This is a key-value structure that varies based on the node type.
   * 
   * @example
   * {"stageId":"stage_1"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * annotation-stage
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

export class ListPipelinesResponseBodyPipelinesPipeline extends $dara.Model {
  /**
   * @remarks
   * The list of orchestration nodes.
   */
  nodes?: ListPipelinesResponseBodyPipelinesPipelineNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelinesPipelineNodes },
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

export class ListPipelinesResponseBodyPipelinesSinkConditionDefaultSinkDataset extends $dara.Model {
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

export class ListPipelinesResponseBodyPipelinesSinkConditionDefaultSink extends $dara.Model {
  /**
   * @remarks
   * The default destination dataset.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSinkConditionDefaultSinkDataset;
  /**
   * @remarks
   * The default sink type. Only dataset is supported.
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
      dataset: ListPipelinesResponseBodyPipelinesSinkConditionDefaultSinkDataset,
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

export class ListPipelinesResponseBodyPipelinesSinkConditionRoutesSinkDataset extends $dara.Model {
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

export class ListPipelinesResponseBodyPipelinesSinkConditionRoutesSink extends $dara.Model {
  /**
   * @remarks
   * The destination dataset for the route.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSinkConditionRoutesSinkDataset;
  /**
   * @remarks
   * The sink type for the route. Only dataset is supported.
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
      dataset: ListPipelinesResponseBodyPipelinesSinkConditionRoutesSinkDataset,
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

export class ListPipelinesResponseBodyPipelinesSinkConditionRoutes extends $dara.Model {
  /**
   * @remarks
   * The route expression in Search Processing Language (SPL). Only where, project, and extend are supported.
   * 
   * @example
   * * | where intent = \"refund\"
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
   * The sink for the route.
   */
  sink?: ListPipelinesResponseBodyPipelinesSinkConditionRoutesSink;
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
      sink: ListPipelinesResponseBodyPipelinesSinkConditionRoutesSink,
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

export class ListPipelinesResponseBodyPipelinesSinkCondition extends $dara.Model {
  /**
   * @remarks
   * The default sink used when no conditional route is matched.
   */
  defaultSink?: ListPipelinesResponseBodyPipelinesSinkConditionDefaultSink;
  /**
   * @remarks
   * The route matching mode. Only all is supported.
   * 
   * @example
   * all
   */
  matchMode?: string;
  /**
   * @remarks
   * The list of conditional routes.
   */
  routes?: ListPipelinesResponseBodyPipelinesSinkConditionRoutes[];
  static names(): { [key: string]: string } {
    return {
      defaultSink: 'defaultSink',
      matchMode: 'matchMode',
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSink: ListPipelinesResponseBodyPipelinesSinkConditionDefaultSink,
      matchMode: 'string',
      routes: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelinesSinkConditionRoutes },
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

export class ListPipelinesResponseBodyPipelinesSinkDataset extends $dara.Model {
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

export class ListPipelinesResponseBodyPipelinesSink extends $dara.Model {
  /**
   * @remarks
   * The conditional routing configuration. This parameter is used only when the sink type is condition.
   */
  condition?: ListPipelinesResponseBodyPipelinesSinkCondition;
  /**
   * @remarks
   * The destination dataset configuration for the dataset sink. This parameter is used only when the sink type is dataset.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSinkDataset;
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
      condition: ListPipelinesResponseBodyPipelinesSinkCondition,
      dataset: ListPipelinesResponseBodyPipelinesSinkDataset,
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

export class ListPipelinesResponseBodyPipelinesSourceDataset extends $dara.Model {
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
   * The filter conditions for the dataset data.
   * 
   * @example
   * status = \"pending\"
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

export class ListPipelinesResponseBodyPipelinesSourceInputFields extends $dara.Model {
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

export class ListPipelinesResponseBodyPipelinesSourceLogstore extends $dara.Model {
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
   * The filtered query statement (Simple Log Service query and analysis syntax).
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

export class ListPipelinesResponseBodyPipelinesSourceTrajectoryEnrich extends $dara.Model {
  /**
   * @remarks
   * The list of enrichment columns. This parameter is retained for compatibility. The current implementation outputs a single fixed column named agent_trajectory, and this parameter no longer affects the output.
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

export class ListPipelinesResponseBodyPipelinesSourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trajectory enrichment configuration. It mounts trajectory data into the scrubbing results based on the trace_id. When writing to a dataset, the data is stored in a fixed column named agent_trajectory, and the column value contains the trajectory JSON content.
   * 
   * @example
   * {"enabled":true,"columns":["input","output"]}
   */
  enrich?: ListPipelinesResponseBodyPipelinesSourceTrajectoryEnrich;
  static names(): { [key: string]: string } {
    return {
      enrich: 'enrich',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrich: ListPipelinesResponseBodyPipelinesSourceTrajectoryEnrich,
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

export class ListPipelinesResponseBodyPipelinesSource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config under the current AgentSpace.
   * 
   * @example
   * {"dataset":"my-dataset","filter":"status = \"pending\""}
   */
  dataset?: ListPipelinesResponseBodyPipelinesSourceDataset;
  /**
   * @remarks
   * The input fields and their data types. This applies to all data source types.
   * 
   * @example
   * [{"name":"question","type":"text"}]
   */
  inputFields?: ListPipelinesResponseBodyPipelinesSourceInputFields[];
  /**
   * @remarks
   * The Simple Log Service Logstore datasource config.
   * 
   * @example
   * {"project":"my-sls-project","logstore":"agent-logs"}
   */
  logstore?: ListPipelinesResponseBodyPipelinesSourceLogstore;
  /**
   * @remarks
   * The trajectory data configuration. This configuration is optional and takes effect only when type is set to trace. It obtains ATIF standard trajectory data from the trajectory scrubbing service and extends it based on features.
   * 
   * @example
   * {"enrich":{"enabled":true,"columns":["input","output"]}}
   */
  trajectory?: ListPipelinesResponseBodyPipelinesSourceTrajectory;
  /**
   * @remarks
   * The type of the data source. Valid values: logstore, dataset, and trace. The trace type indicates a processing mode driven by trajectory signals. The validity of the enumerated values is verified by the server.
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
      trajectory: 'trajectory',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: ListPipelinesResponseBodyPipelinesSourceDataset,
      inputFields: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelinesSourceInputFields },
      logstore: ListPipelinesResponseBodyPipelinesSourceLogstore,
      trajectory: ListPipelinesResponseBodyPipelinesSourceTrajectory,
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

export class ListPipelinesResponseBodyPipelines extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the committed watermark.
   * 
   * @example
   * 1767225600
   */
  committedWatermark?: number;
  /**
   * @remarks
   * The time when the pipeline was created. The time is in the ISO 8601 standard in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-01T00:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the pipeline.
   * 
   * @example
   * My pipeline
   */
  description?: string;
  /**
   * @remarks
   * The execution policy.
   * 
   * @example
   * {"mode":"RunOnce","runOnce":{"fromTime":1735660800,"toTime":1735664400}}
   */
  executePolicy?: ListPipelinesResponseBodyPipelinesExecutePolicy;
  /**
   * @remarks
   * The ID of the last run.
   * 
   * @example
   * run-20260101-0001
   */
  lastRunId?: string;
  /**
   * @remarks
   * The status of the last run.
   * 
   * @example
   * Running
   */
  lastRunStatus?: string;
  /**
   * @remarks
   * The timestamp for the next scheduled trigger.
   * 
   * @example
   * 1767229200
   */
  nextTriggerTime?: number;
  /**
   * @remarks
   * The reason why scheduling is paused.
   * 
   * @example
   * manual
   */
  pausedReason?: string;
  /**
   * @remarks
   * The pipeline orchestration configuration.
   */
  pipeline?: ListPipelinesResponseBodyPipelinesPipeline;
  /**
   * @remarks
   * The pipeline type.
   * 
   * @example
   * ORCHESTRATION
   */
  pipelineKind?: string;
  /**
   * @remarks
   * The name of the pipeline.
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
   * The schedule status. Valid values: None (no scheduling, for RunOnce pipelines), Active, Paused, and Terminated.
   * 
   * @example
   * None
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The schedule type. Valid values: RunOnce (single execution), Scheduled (periodic scheduling), and Continuous (continuous execution, driven by trace source signals).
   * 
   * @example
   * RunOnce
   */
  scheduleType?: string;
  /**
   * @remarks
   * The pipeline sink, which is the destination for writing data.
   */
  sink?: ListPipelinesResponseBodyPipelinesSink;
  /**
   * @remarks
   * The data source of the pipeline.
   * 
   * @example
   * {"type":"logstore","logstore":{"project":"my-sls-project","logstore":"agent-logs"},"inputFields":[{"name":"question","type":"text"}]}
   */
  source?: ListPipelinesResponseBodyPipelinesSource;
  /**
   * @remarks
   * The time when the pipeline was last updated. The time is in the ISO 8601 standard in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-01-02T00:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number of the pipeline configuration.
   * 
   * @example
   * 1
   */
  version?: number;
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
      lastRunId: 'lastRunId',
      lastRunStatus: 'lastRunStatus',
      nextTriggerTime: 'nextTriggerTime',
      pausedReason: 'pausedReason',
      pipeline: 'pipeline',
      pipelineKind: 'pipelineKind',
      pipelineName: 'pipelineName',
      regionId: 'regionId',
      scheduleStatus: 'scheduleStatus',
      scheduleType: 'scheduleType',
      sink: 'sink',
      source: 'source',
      updateTime: 'updateTime',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedWatermark: 'number',
      createTime: 'string',
      description: 'string',
      executePolicy: ListPipelinesResponseBodyPipelinesExecutePolicy,
      lastRunId: 'string',
      lastRunStatus: 'string',
      nextTriggerTime: 'number',
      pausedReason: 'string',
      pipeline: ListPipelinesResponseBodyPipelinesPipeline,
      pipelineKind: 'string',
      pipelineName: 'string',
      regionId: 'string',
      scheduleStatus: 'string',
      scheduleType: 'string',
      sink: ListPipelinesResponseBodyPipelinesSink,
      source: ListPipelinesResponseBodyPipelinesSource,
      updateTime: 'string',
      version: 'number',
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

export class ListPipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page that is specified in the request. This value is echoed in the response.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty string indicates that the current page is the last page.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of pipelines.
   */
  pipelines?: ListPipelinesResponseBodyPipelines[];
  /**
   * @remarks
   * The request ID, which is used to locate the request when you troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pipelines that meet the filter conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pipelines: 'pipelines',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pipelines: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelines },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelines)) {
      $dara.Model.validateArray(this.pipelines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

