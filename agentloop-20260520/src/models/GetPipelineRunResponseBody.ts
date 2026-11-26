// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineRunResponseBodyAsyncNodes extends $dara.Model {
  /**
   * @remarks
   * The number of execution attempts.
   * 
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @remarks
   * The external task ID.
   * 
   * @example
   * hs-001
   */
  externalTaskId?: string;
  /**
   * @remarks
   * The number of failed records.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The number of consumed input tokens.
   * 
   * @example
   * 1200
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of ready work items.
   * 
   * @example
   * 10
   */
  itemReadyCount?: number;
  /**
   * @remarks
   * The latest error message.
   * 
   * @example
   * example-error
   */
  lastError?: string;
  /**
   * @remarks
   * The node execution ID.
   * 
   * @example
   * ne-001
   */
  nodeExecutionId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * stage-1
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * annotation
   */
  nodeType?: string;
  /**
   * @remarks
   * The number of consumed output tokens.
   * 
   * @example
   * 300
   */
  outputTokens?: number;
  /**
   * @remarks
   * The total number of records in the stage.
   * 
   * @example
   * 10
   */
  recordCount?: number;
  /**
   * @remarks
   * Indicates whether the node has been routed to the downstream stage.
   * 
   * @example
   * false
   */
  routed?: boolean;
  /**
   * @remarks
   * The latest signal type.
   * 
   * @example
   * STAGE_COMPLETED
   */
  signalType?: string;
  /**
   * @remarks
   * The number of start attempts.
   * 
   * @example
   * 1
   */
  startAttempts?: number;
  /**
   * @remarks
   * The asynchronous node status.
   * 
   * @example
   * WAITING
   */
  status?: string;
  /**
   * @remarks
   * The task version.
   * 
   * @example
   * 1
   */
  taskVersion?: number;
  /**
   * @remarks
   * The total number of consumed tokens.
   * 
   * @example
   * 1500
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      attempt: 'attempt',
      externalTaskId: 'externalTaskId',
      failedCount: 'failedCount',
      inputTokens: 'inputTokens',
      itemReadyCount: 'itemReadyCount',
      lastError: 'lastError',
      nodeExecutionId: 'nodeExecutionId',
      nodeId: 'nodeId',
      nodeType: 'nodeType',
      outputTokens: 'outputTokens',
      recordCount: 'recordCount',
      routed: 'routed',
      signalType: 'signalType',
      startAttempts: 'startAttempts',
      status: 'status',
      taskVersion: 'taskVersion',
      totalTokens: 'totalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      externalTaskId: 'string',
      failedCount: 'number',
      inputTokens: 'number',
      itemReadyCount: 'number',
      lastError: 'string',
      nodeExecutionId: 'string',
      nodeId: 'string',
      nodeType: 'string',
      outputTokens: 'number',
      recordCount: 'number',
      routed: 'boolean',
      signalType: 'string',
      startAttempts: 'number',
      status: 'string',
      taskVersion: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyNodeExecutionsInputRef extends $dara.Model {
  /**
   * @remarks
   * The immutable data boundary identifier.
   * 
   * @example
   * v1
   */
  boundary?: string;
  /**
   * @remarks
   * The data digest.
   * 
   * @example
   * sha256:abcdef
   */
  digest?: string;
  /**
   * @remarks
   * The reference data type.
   * 
   * @example
   * dataset
   */
  kind?: string;
  /**
   * @remarks
   * The data owner identifier.
   * 
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @remarks
   * The data resource identifier.
   * 
   * @example
   * dataset-001
   */
  resource?: string;
  /**
   * @remarks
   * The data schema version.
   * 
   * @example
   * 1
   */
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'boundary',
      digest: 'digest',
      kind: 'kind',
      owner: 'owner',
      resource: 'resource',
      schemaVersion: 'schemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: 'string',
      digest: 'string',
      kind: 'string',
      owner: 'string',
      resource: 'string',
      schemaVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyNodeExecutionsOutputRef extends $dara.Model {
  /**
   * @remarks
   * The immutable data boundary identifier.
   * 
   * @example
   * v1
   */
  boundary?: string;
  /**
   * @remarks
   * The data digest.
   * 
   * @example
   * sha256:abcdef
   */
  digest?: string;
  /**
   * @remarks
   * The reference data type.
   * 
   * @example
   * dataset
   */
  kind?: string;
  /**
   * @remarks
   * The data owner identifier.
   * 
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @remarks
   * The data resource identifier.
   * 
   * @example
   * dataset-001
   */
  resource?: string;
  /**
   * @remarks
   * The data schema version.
   * 
   * @example
   * 1
   */
  schemaVersion?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'boundary',
      digest: 'digest',
      kind: 'kind',
      owner: 'owner',
      resource: 'resource',
      schemaVersion: 'schemaVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: 'string',
      digest: 'string',
      kind: 'string',
      owner: 'string',
      resource: 'string',
      schemaVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyNodeExecutions extends $dara.Model {
  /**
   * @remarks
   * The number of execution attempts.
   * 
   * @example
   * 1
   */
  attempt?: number;
  /**
   * @remarks
   * The completion event ID.
   * 
   * @example
   * evt-001
   */
  completionEventId?: string;
  /**
   * @remarks
   * The node error code.
   * 
   * @example
   * StageFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The node error message.
   * 
   * @example
   * stage execution failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The external task ID.
   * 
   * @example
   * hs-001
   */
  externalTaskId?: string;
  /**
   * @remarks
   * The node end time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-01T00:00:10Z
   */
  finishedAtTime?: string;
  /**
   * @remarks
   * The number of input records.
   * 
   * @example
   * 10
   */
  inputCount?: number;
  /**
   * @remarks
   * The node input data reference.
   */
  inputRef?: GetPipelineRunResponseBodyNodeExecutionsInputRef;
  /**
   * @remarks
   * The node execution mode.
   * 
   * @example
   * ASYNC
   */
  mode?: string;
  /**
   * @remarks
   * The node execution ID.
   * 
   * @example
   * ne-001
   */
  nodeExecutionId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * stage-1
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * annotation
   */
  nodeType?: string;
  /**
   * @remarks
   * The node execution order.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * The number of output records.
   * 
   * @example
   * 10
   */
  outputCount?: number;
  /**
   * @remarks
   * The node output data reference.
   */
  outputRef?: GetPipelineRunResponseBodyNodeExecutionsOutputRef;
  /**
   * @remarks
   * The output start resource identifier.
   * 
   * @example
   * dataset-001
   */
  outputStartResource?: string;
  /**
   * @remarks
   * The output start sequence number.
   * 
   * @example
   * 0
   */
  outputStartSeq?: number;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * run-20260101-0001
   */
  runId?: string;
  /**
   * @remarks
   * The node start time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-01-01T00:00:01Z
   */
  startedAtTime?: string;
  /**
   * @remarks
   * The node execution status.
   * 
   * @example
   * WAITING
   */
  status?: string;
  /**
   * @remarks
   * The task version.
   * 
   * @example
   * 1
   */
  taskVersion?: number;
  static names(): { [key: string]: string } {
    return {
      attempt: 'attempt',
      completionEventId: 'completionEventId',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      externalTaskId: 'externalTaskId',
      finishedAtTime: 'finishedAtTime',
      inputCount: 'inputCount',
      inputRef: 'inputRef',
      mode: 'mode',
      nodeExecutionId: 'nodeExecutionId',
      nodeId: 'nodeId',
      nodeType: 'nodeType',
      order: 'order',
      outputCount: 'outputCount',
      outputRef: 'outputRef',
      outputStartResource: 'outputStartResource',
      outputStartSeq: 'outputStartSeq',
      runId: 'runId',
      startedAtTime: 'startedAtTime',
      status: 'status',
      taskVersion: 'taskVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempt: 'number',
      completionEventId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      externalTaskId: 'string',
      finishedAtTime: 'string',
      inputCount: 'number',
      inputRef: GetPipelineRunResponseBodyNodeExecutionsInputRef,
      mode: 'string',
      nodeExecutionId: 'string',
      nodeId: 'string',
      nodeType: 'string',
      order: 'number',
      outputCount: 'number',
      outputRef: GetPipelineRunResponseBodyNodeExecutionsOutputRef,
      outputStartResource: 'string',
      outputStartSeq: 'number',
      runId: 'string',
      startedAtTime: 'string',
      status: 'string',
      taskVersion: 'number',
    };
  }

  validate() {
    if(this.inputRef && typeof (this.inputRef as any).validate === 'function') {
      (this.inputRef as any).validate();
    }
    if(this.outputRef && typeof (this.outputRef as any).validate === 'function') {
      (this.outputRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBodyPipelineSnapshotNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * stage-1
   */
  id?: string;
  /**
   * @remarks
   * The node parameters in a key-value structure, which vary depending on the node type.
   * 
   * @example
   * {"stageId":"stage-1"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The node path.
   * 
   * @example
   * /stage-1
   */
  path?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * annotation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      parameters: 'parameters',
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      path: 'string',
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

export class GetPipelineRunResponseBodyPipelineSnapshot extends $dara.Model {
  /**
   * @remarks
   * The list of frozen orchestration nodes.
   */
  nodes?: GetPipelineRunResponseBodyPipelineSnapshotNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyPipelineSnapshotNodes },
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

export class GetPipelineRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the AgentSpace.
   * 
   * @example
   * my-agent-space
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The list of asynchronous node execution statuses.
   */
  asyncNodes?: GetPipelineRunResponseBodyAsyncNodes[];
  /**
   * @remarks
   * The current number of retries.
   * 
   * @example
   * 0
   */
  attempt?: number;
  /**
   * @remarks
   * The semantic error code.
   * 
   * @example
   * ExpressionEvaluationError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Failed to evaluate filter expression in node \"node-1\": column \"score\" does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The end time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:10.000Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The start time of the data window in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  fromTime?: number;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 3
   */
  maxAttempts?: number;
  /**
   * @remarks
   * The next retry time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:01:00.000Z
   */
  nextRetryTime?: string;
  /**
   * @remarks
   * The list of node execution records.
   */
  nodeExecutions?: GetPipelineRunResponseBodyNodeExecutions[];
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
   * The frozen pipeline configuration snapshot for this run.
   */
  pipelineSnapshot?: GetPipelineRunResponseBodyPipelineSnapshot;
  /**
   * @remarks
   * The request ID used to locate the request during troubleshooting.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  /**
   * @remarks
   * The inline run results. This parameter is returned only when output.inline is set to true during triggering.
   * 
   * @example
   * {"outputRows": 100, "summary": "processed 100 rows, 92 matched", "passed": true}
   */
  results?: { [key: string]: any };
  /**
   * @remarks
   * Run Id
   * 
   * @example
   * run-20260101-0001
   */
  runId?: string;
  /**
   * @remarks
   * The execution start time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:01.000Z
   */
  startTime?: string;
  /**
   * @remarks
   * The run statistics, including processedRows (number of processed rows), processedBytes (number of processed bytes), outputRows (number of output rows), outputBytes (number of output bytes), elapsedMs (elapsed time in milliseconds), cpuSec (CPU seconds), cpuCores (number of CPU cores), and tokenCount (number of consumed tokens).
   * 
   * @example
   * {"processedRows":1000,"elapsedMs":2500}
   */
  stats?: { [key: string]: any };
  /**
   * @remarks
   * The run status. Valid values: Pending, Running, Succeeded, Failed, and Cancelled.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The frozen task version.
   * 
   * @example
   * 1
   */
  taskVersion?: number;
  /**
   * @remarks
   * The end time of the data window in UNIX seconds.
   * 
   * @example
   * 1735747200
   */
  toTime?: number;
  /**
   * @remarks
   * The total number of input records.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The trigger time in ISO 8601 UTC format.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2026-01-01T00:00:00.000Z
   */
  triggerTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values: Scheduled, Manual, and RunOnce.
   * 
   * @example
   * Scheduled
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      asyncNodes: 'asyncNodes',
      attempt: 'attempt',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      finishTime: 'finishTime',
      fromTime: 'fromTime',
      maxAttempts: 'maxAttempts',
      nextRetryTime: 'nextRetryTime',
      nodeExecutions: 'nodeExecutions',
      pipelineName: 'pipelineName',
      pipelineSnapshot: 'pipelineSnapshot',
      requestId: 'requestId',
      results: 'results',
      runId: 'runId',
      startTime: 'startTime',
      stats: 'stats',
      status: 'status',
      taskVersion: 'taskVersion',
      toTime: 'toTime',
      totalCount: 'totalCount',
      triggerTime: 'triggerTime',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      asyncNodes: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyAsyncNodes },
      attempt: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      finishTime: 'string',
      fromTime: 'number',
      maxAttempts: 'number',
      nextRetryTime: 'string',
      nodeExecutions: { 'type': 'array', 'itemType': GetPipelineRunResponseBodyNodeExecutions },
      pipelineName: 'string',
      pipelineSnapshot: GetPipelineRunResponseBodyPipelineSnapshot,
      requestId: 'string',
      results: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      startTime: 'string',
      stats: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      taskVersion: 'number',
      toTime: 'number',
      totalCount: 'number',
      triggerTime: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.asyncNodes)) {
      $dara.Model.validateArray(this.asyncNodes);
    }
    if(Array.isArray(this.nodeExecutions)) {
      $dara.Model.validateArray(this.nodeExecutions);
    }
    if(this.pipelineSnapshot && typeof (this.pipelineSnapshot as any).validate === 'function') {
      (this.pipelineSnapshot as any).validate();
    }
    if(this.results) {
      $dara.Model.validateMap(this.results);
    }
    if(this.stats) {
      $dara.Model.validateMap(this.stats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

