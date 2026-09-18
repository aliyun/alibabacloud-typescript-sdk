// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce extends $dara.Model {
  /**
   * @remarks
   * The start of the time slice, in UNIX millisecond timestamp format.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The end of the time slice, in UNIX millisecond timestamp format.
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

export class ListPipelinesResponseBodyPipelinesExecutePolicyScheduled extends $dara.Model {
  /**
   * @remarks
   * The scheduling start time, in UNIX millisecond timestamp format.
   * 
   * @example
   * 1735660800000
   */
  fromTime?: number;
  /**
   * @remarks
   * The scheduling interval, such as 1h or 30m.
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
   * The scheduling mode. Valid values:
   * - RunOnce: one-time execution.
   * - Scheduled: periodic scheduling.
   * 
   * @example
   * RunOnce
   */
  mode?: string;
  /**
   * @remarks
   * The parameters for one-time execution. This parameter has a value only when mode is set to RunOnce.
   */
  runOnce?: ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce;
  /**
   * @remarks
   * The parameters for periodic scheduling. This parameter has a value only when mode is set to Scheduled.
   */
  scheduled?: ListPipelinesResponseBodyPipelinesExecutePolicyScheduled;
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
      runOnce: ListPipelinesResponseBodyPipelinesExecutePolicyRunOnce,
      scheduled: ListPipelinesResponseBodyPipelinesExecutePolicyScheduled,
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
   * The type of the default destination. Currently, only dataset is supported.
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
   * The destination dataset of the route.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSinkConditionRoutesSinkDataset;
  /**
   * @remarks
   * The type of the route destination. Currently, only dataset is supported.
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
   * The write destination of the route.
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
   * The default write destination that is used when no condition route is matched.
   */
  defaultSink?: ListPipelinesResponseBodyPipelinesSinkConditionDefaultSink;
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
   * The list of condition routes.
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
   * The conditional routing configuration. This parameter is used only when sink.type is set to condition.
   */
  condition?: ListPipelinesResponseBodyPipelinesSinkCondition;
  /**
   * @remarks
   * The destination dataset configuration for the dataset sink. This parameter is used only when sink.type is set to dataset.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSinkDataset;
  /**
   * @remarks
   * The destination type. Valid values: dataset or condition.
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

export class ListPipelinesResponseBodyPipelinesSourceLogstore extends $dara.Model {
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

export class ListPipelinesResponseBodyPipelinesSource extends $dara.Model {
  /**
   * @remarks
   * The dataset datasource config in the current AgentSpace.
   */
  dataset?: ListPipelinesResponseBodyPipelinesSourceDataset;
  /**
   * @remarks
   * The Simple Log Service (SLS) Logstore datasource config.
   */
  logstore?: ListPipelinesResponseBodyPipelinesSourceLogstore;
  /**
   * @remarks
   * The data source type. Valid values: logstore or dataset.
   * 
   * @example
   * dataset
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'dataset',
      logstore: 'logstore',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: ListPipelinesResponseBodyPipelinesSourceDataset,
      logstore: ListPipelinesResponseBodyPipelinesSourceLogstore,
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
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

export class ListPipelinesResponseBodyPipelines extends $dara.Model {
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
   * The description of the pipeline.
   * 
   * @example
   * My pipeline
   */
  description?: string;
  /**
   * @remarks
   * The execution policy.
   */
  executePolicy?: ListPipelinesResponseBodyPipelinesExecutePolicy;
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
   * The scheduling status. Valid values:
   * - None: no scheduling. This value is returned for RunOnce pipelines.
   * - Active: active.
   * - Paused: paused.
   * - Terminated: terminated.
   * 
   * @example
   * None
   */
  scheduleStatus?: string;
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - RunOnce: one-time execution.
   * - Scheduled: periodic scheduling.
   * 
   * @example
   * RunOnce
   */
  scheduleType?: string;
  /**
   * @remarks
   * The pipeline sink (data write destination).
   */
  sink?: ListPipelinesResponseBodyPipelinesSink;
  /**
   * @remarks
   * The pipeline data source.
   */
  source?: ListPipelinesResponseBodyPipelinesSource;
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
      createTime: 'createTime',
      description: 'description',
      executePolicy: 'executePolicy',
      pipelineName: 'pipelineName',
      regionId: 'regionId',
      scheduleStatus: 'scheduleStatus',
      scheduleType: 'scheduleType',
      sink: 'sink',
      source: 'source',
      updateTime: 'updateTime',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      executePolicy: ListPipelinesResponseBodyPipelinesExecutePolicy,
      pipelineName: 'string',
      regionId: 'string',
      scheduleStatus: 'string',
      scheduleType: 'string',
      sink: ListPipelinesResponseBodyPipelinesSink,
      source: ListPipelinesResponseBodyPipelinesSource,
      updateTime: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.executePolicy && typeof (this.executePolicy as any).validate === 'function') {
      (this.executePolicy as any).validate();
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
   * The maximum number of entries per page that was specified in the request. This value is echoed back.
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
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pipelines that match the filter conditions.
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

