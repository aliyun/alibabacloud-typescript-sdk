// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineResponseBodyExecutePolicyContinuous extends $dara.Model {
  /**
   * @remarks
   * The bootstrap history start time as a UNIX timestamp in seconds. It shares the same precision as runOnce/scheduled.fromTime. Millisecond values greater than or equal to 1e12 are automatically converted. The cursor starts from this time aligned to the grid and catches up window by window. After catching up, it switches to minute intervals. By default, it starts from the current time and processes only incremental data.
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

export class GetPipelineResponseBodyExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start time of the data processing window in UNIX seconds. The value must be less than toTime.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The end time of the data processing window in UNIX seconds. The value must be greater than fromTime.
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

export class GetPipelineResponseBodyExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The scheduling start time as a UNIX timestamp in seconds. It shares the same precision as runOnce.fromTime. Millisecond values greater than or equal to 1e12 are automatically converted.
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

export class GetPipelineResponseBodyExecutePolicy extends $dara.Model {
  /**
   * @remarks
   * The continuous execution configuration. This is used when type is set to trace. The processing frequency is a fixed value managed by the server.
   * 
   * @example
   * {"fromTime":1735660800}
   */
  continuous?: GetPipelineResponseBodyExecutePolicyContinuous;
  /**
   * @remarks
   * The scheduling mode. Valid values: RunOnce (single execution), Scheduled (periodic execution), and Continuous (continuous execution, applicable only to trace data sources; the processing frequency is a fixed value managed by the server, and processing automatically occurs at minute intervals after trace completion).
   * 
   * @example
   * scheduled
   */
  mode?: string;
  /**
   * @remarks
   * The single execution configuration. This parameter is required only when mode is set to RunOnce.
   * 
   * @example
   * {"fromTime":1735660800,"toTime":1735664400}
   */
  runOnce?: GetPipelineResponseBodyExecutePolicyRunOnce;
  /**
   * @remarks
   * The periodic scheduling configuration. This parameter is required only when mode is set to Scheduled.
   * 
   * @example
   * {"interval":"1h","fromTime":1735660800}
   */
  scheduled?: GetPipelineResponseBodyExecutePolicyScheduled;
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
      continuous: GetPipelineResponseBodyExecutePolicyContinuous,
      mode: 'string',
      runOnce: GetPipelineResponseBodyExecutePolicyRunOnce,
      scheduled: GetPipelineResponseBodyExecutePolicyScheduled,
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
   * The node parameters. It uses a key-value structure and varies depending on the node type.
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
   * 
   * @example
   * [{"id":"select-fields","type":"project","parameters":{}}]
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
   * The route matching mode. Currently, only all is supported.
   * 
   * @example
   * all
   */
  matchMode?: string;
  /**
   * @remarks
   * The conditional route list.
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

export class GetPipelineResponseBodySink extends $dara.Model {
  /**
   * @remarks
   * The conditional routing configuration. This parameter is used only when the sink type is condition.
   */
  condition?: GetPipelineResponseBodySinkCondition;
  /**
   * @remarks
   * The destination dataset configuration for the dataset sink. This parameter is used only when the sink type is dataset.
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
   * The filtered query statement, which uses the SLS query and analysis syntax.
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

export class GetPipelineResponseBodySourceTrajectoryEnrich extends $dara.Model {
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
   * Specifies whether to enable trace enrichment.
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

export class GetPipelineResponseBodySourceTrajectory extends $dara.Model {
  /**
   * @remarks
   * The trace enrichment configuration. It mounts trace data into the cleaning result by trace_id. When writing to a dataset, it uses the fixed column agent_trajectory to store the data, where the column value is the trace JSON content.
   * 
   * @example
   * {"enabled":true,"columns":["input","output"]}
   */
  enrich?: GetPipelineResponseBodySourceTrajectoryEnrich;
  static names(): { [key: string]: string } {
    return {
      enrich: 'enrich',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enrich: GetPipelineResponseBodySourceTrajectoryEnrich,
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

export class GetPipelineResponseBodySource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config under the current AgentSpace.
   * 
   * @example
   * {"dataset":"my-dataset","filter":"status = \"pending\""}
   */
  dataset?: GetPipelineResponseBodySourceDataset;
  /**
   * @remarks
   * The input fields and their data types, applicable to all data source types.
   * 
   * @example
   * [{"name":"question","type":"text"}]
   */
  inputFields?: GetPipelineResponseBodySourceInputFields[];
  /**
   * @remarks
   * The SLS Logstore datasource config.
   * 
   * @example
   * {"project":"my-sls-project","logstore":"agent-logs"}
   */
  logstore?: GetPipelineResponseBodySourceLogstore;
  /**
   * @remarks
   * The trace data configuration. This parameter is optional and takes effect only when the type is trace. It retrieves ATIF standard trace data from the trace cleaning service and extends it by feature.
   * 
   * @example
   * {"enrich":{"enabled":true,"columns":["input","output"]}}
   */
  trajectory?: GetPipelineResponseBodySourceTrajectory;
  /**
   * @remarks
   * The data source type. Valid values: logstore, dataset, and trace. The trace value indicates the trace signal-driven processing mode. The server validates the enum values.
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
      dataset: GetPipelineResponseBodySourceDataset,
      inputFields: { 'type': 'array', 'itemType': GetPipelineResponseBodySourceInputFields },
      logstore: GetPipelineResponseBodySourceLogstore,
      trajectory: GetPipelineResponseBodySourceTrajectory,
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

export class GetPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The committed watermark in UNIX seconds.
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
   * 
   * @example
   * {"mode":"RunOnce","runOnce":{"fromTime":1735660800,"toTime":1735664400}}
   */
  executePolicy?: GetPipelineResponseBodyExecutePolicy;
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
   * The next schedule trigger time in UNIX seconds.
   * 
   * @example
   * 1735661100
   */
  nextTriggerTime?: number;
  /**
   * @remarks
   * The pipeline configuration, which defines the node orchestration.
   * 
   * @example
   * {"nodes":[{"id":"select-fields","type":"project","parameters":{"question":"user_query"}}]}
   */
  pipeline?: GetPipelineResponseBodyPipeline;
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
   * The request ID, which is used to locate the request when troubleshooting issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The schedule status. Valid values: None (no schedule), Active (active), Paused (paused), and Terminated (terminated).
   * 
   * @example
   * Active
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
   * The pipeline sink, which specifies the data write destination.
   */
  sink?: GetPipelineResponseBodySink;
  /**
   * @remarks
   * The pipeline data source.
   * 
   * @example
   * {"type":"logstore","logstore":{"project":"my-sls-project","logstore":"agent-logs"},"inputFields":[{"name":"question","type":"text"}]}
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
   * The pipeline configuration version number.
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
      pipeline: 'pipeline',
      pipelineKind: 'pipelineKind',
      pipelineName: 'pipelineName',
      regionId: 'regionId',
      requestId: 'requestId',
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
      executePolicy: GetPipelineResponseBodyExecutePolicy,
      lastRunId: 'string',
      lastRunStatus: 'string',
      nextTriggerTime: 'number',
      pipeline: GetPipelineResponseBodyPipeline,
      pipelineKind: 'string',
      pipelineName: 'string',
      regionId: 'string',
      requestId: 'string',
      scheduleStatus: 'string',
      scheduleType: 'string',
      sink: GetPipelineResponseBodySink,
      source: GetPipelineResponseBodySource,
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

