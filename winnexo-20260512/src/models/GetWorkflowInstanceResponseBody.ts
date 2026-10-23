// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceResponseBodyCurrentNode extends $dara.Model {
  /**
   * @remarks
   * The display name of the current handler.
   * 
   * @example
   * Zhang San
   */
  handler?: string;
  /**
   * @remarks
   * The identifier of the handler or digital worker.
   * 
   * @example
   * user_10086
   */
  handlerId?: string;
  /**
   * @remarks
   * The nodeKey of the actual running node.
   * 
   * @example
   * node_key_confirm
   */
  nodeId?: string;
  /**
   * @remarks
   * The display name of the node.
   * 
   * @example
   * Requirement Confirmation
   */
  nodeName?: string;
  /**
   * @remarks
   * The actual node type. Valid values: AGENT, HUMAN, and CONDITION.
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * The running status of the node.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      handlerId: 'handlerId',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeType: 'nodeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      handlerId: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyCurrentNodes extends $dara.Model {
  /**
   * @remarks
   * The display name of the current handler.
   * 
   * @example
   * Zhang San
   */
  handler?: string;
  /**
   * @remarks
   * The identifier of the handler or digital worker.
   * 
   * @example
   * user_10086
   */
  handlerId?: string;
  /**
   * @remarks
   * The nodeKey of the actual running node.
   * 
   * @example
   * node_key_confirm
   */
  nodeId?: string;
  /**
   * @remarks
   * The display name of the node.
   * 
   * @example
   * Requirement Confirmation
   */
  nodeName?: string;
  /**
   * @remarks
   * The actual node type. Valid values: AGENT, HUMAN, and CONDITION.
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * The running status of the node.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      handlerId: 'handlerId',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeType: 'nodeType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      handlerId: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBodyProgress extends $dara.Model {
  /**
   * @remarks
   * The number of visible nodes that have succeeded or been skipped.
   * 
   * @example
   * 3
   */
  completedCount?: number;
  /**
   * @remarks
   * The total number of visible nodes in the current graph. This number is not fixed to six.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedCount: 'completedCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique external requirement number within the workspace.
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * The business status code from the unified POP response wrapper.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The creation time of the logical instance in ISO 8601 format.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The first active node. This value is null when the instance reaches a terminal state.
   */
  currentNode?: GetWorkflowInstanceResponseBodyCurrentNode;
  /**
   * @remarks
   * All active nodes. Parallel DAGs are supported.
   */
  currentNodes?: GetWorkflowInstanceResponseBodyCurrentNodes[];
  /**
   * @remarks
   * The time when the current plan reached a terminal state. This value is null if the plan has not ended.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  endedAt?: string;
  /**
   * @remarks
   * The external initiator label. This label is not used for authentication.
   * 
   * @example
   * External Initiator Zhang San
   */
  initiator?: string;
  /**
   * @remarks
   * The stable logical instance ID. This ID does not change when the work item is restarted.
   * 
   * @example
   * wfi_20261016_abc123
   */
  instanceId?: string;
  /**
   * @remarks
   * The user-visible error description from the unified POP response wrapper.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The raw plan pause scope.
   * 
   * @example
   * ALL
   */
  pauseScope?: string;
  /**
   * @remarks
   * The revision ID of the current physical plan.
   * 
   * @example
   * plan_20261016_abc123
   */
  planId?: string;
  /**
   * @remarks
   * The visible graph progress.
   */
  progress?: GetWorkflowInstanceResponseBodyProgress;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The raw plan review status.
   * 
   * @example
   * APPROVED
   */
  reviewStatus?: string;
  /**
   * @remarks
   * The revision number of the current physical plan.
   * 
   * @example
   * 3
   */
  revision?: number;
  /**
   * @remarks
   * The current run ID. This ID changes after a restart.
   * 
   * @example
   * run_20261016_abc123
   */
  runId?: string;
  /**
   * @remarks
   * The raw runtime status. Valid values: BUILDING, RUNNING, SUCCEEDED, FAILED, and CANCELLED.
   * 
   * @example
   * RUNNING
   */
  runtimeStatus?: string;
  /**
   * @remarks
   * The time when the current plan node started for the first time. This value is null if the node has not been executed.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  startedAt?: string;
  /**
   * @remarks
   * The runtime status version.
   * 
   * @example
   * 7
   */
  stateVersion?: number;
  /**
   * @remarks
   * Running/Completed/Failed/Terminated
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the workflow template bound at creation.
   * 
   * @example
   * wft_20261016_abc123
   */
  templateId?: string;
  /**
   * @remarks
   * The current requirement title.
   * 
   * @example
   * Quarterly Business Analysis Report
   */
  title?: string;
  /**
   * @remarks
   * The ID of the associated work item.
   * 
   * @example
   * wi_20261016_abc123
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'businessId',
      code: 'code',
      collaborationGroupId: 'collaborationGroupId',
      createdAt: 'createdAt',
      currentNode: 'currentNode',
      currentNodes: 'currentNodes',
      endedAt: 'endedAt',
      initiator: 'initiator',
      instanceId: 'instanceId',
      message: 'message',
      pauseScope: 'pauseScope',
      planId: 'planId',
      progress: 'progress',
      requestId: 'requestId',
      reviewStatus: 'reviewStatus',
      revision: 'revision',
      runId: 'runId',
      runtimeStatus: 'runtimeStatus',
      startedAt: 'startedAt',
      stateVersion: 'stateVersion',
      status: 'status',
      templateId: 'templateId',
      title: 'title',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      code: 'string',
      collaborationGroupId: 'string',
      createdAt: 'string',
      currentNode: GetWorkflowInstanceResponseBodyCurrentNode,
      currentNodes: { 'type': 'array', 'itemType': GetWorkflowInstanceResponseBodyCurrentNodes },
      endedAt: 'string',
      initiator: 'string',
      instanceId: 'string',
      message: 'string',
      pauseScope: 'string',
      planId: 'string',
      progress: GetWorkflowInstanceResponseBodyProgress,
      requestId: 'string',
      reviewStatus: 'string',
      revision: 'number',
      runId: 'string',
      runtimeStatus: 'string',
      startedAt: 'string',
      stateVersion: 'number',
      status: 'string',
      templateId: 'string',
      title: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    if(this.currentNode && typeof (this.currentNode as any).validate === 'function') {
      (this.currentNode as any).validate();
    }
    if(Array.isArray(this.currentNodes)) {
      $dara.Model.validateArray(this.currentNodes);
    }
    if(this.progress && typeof (this.progress as any).validate === 'function') {
      (this.progress as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

