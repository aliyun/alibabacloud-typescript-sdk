// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesResponseBodyItemsCurrentNode extends $dara.Model {
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
   * The identifier of the handler or digital employee.
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
   * Requirement confirmation
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

export class ListWorkflowInstancesResponseBodyItemsCurrentNodes extends $dara.Model {
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
   * The identifier of the handler or digital employee.
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
   * Requirement confirmation
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

export class ListWorkflowInstancesResponseBodyItemsProgress extends $dara.Model {
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

export class ListWorkflowInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The unique external requirement ID in the space.
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The time when the logical instance was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2026-10-16T10:30:00+08:00
   */
  createdAt?: string;
  /**
   * @remarks
   * The first active node. This value is null if the instance is in a terminal state.
   */
  currentNode?: ListWorkflowInstancesResponseBodyItemsCurrentNode;
  /**
   * @remarks
   * All active nodes. Parallel DAGs are supported.
   */
  currentNodes?: ListWorkflowInstancesResponseBodyItemsCurrentNodes[];
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
   * The external initiator tag. This tag is not used for authentication.
   * 
   * @example
   * External initiator Zhang San
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
   * The original plan pause scope.
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
   * The progress of the visible graph.
   */
  progress?: ListWorkflowInstancesResponseBodyItemsProgress;
  /**
   * @remarks
   * The original plan review status.
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
   * The original runtime status. Valid values: BUILDING, RUNNING, SUCCEEDED, FAILED, and CANCELLED.
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
   * Quarterly business analysis report
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
      collaborationGroupId: 'collaborationGroupId',
      createdAt: 'createdAt',
      currentNode: 'currentNode',
      currentNodes: 'currentNodes',
      endedAt: 'endedAt',
      initiator: 'initiator',
      instanceId: 'instanceId',
      pauseScope: 'pauseScope',
      planId: 'planId',
      progress: 'progress',
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
      collaborationGroupId: 'string',
      createdAt: 'string',
      currentNode: ListWorkflowInstancesResponseBodyItemsCurrentNode,
      currentNodes: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyItemsCurrentNodes },
      endedAt: 'string',
      initiator: 'string',
      instanceId: 'string',
      pauseScope: 'string',
      planId: 'string',
      progress: ListWorkflowInstancesResponseBodyItemsProgress,
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

export class ListWorkflowInstancesResponseBody extends $dara.Model {
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
   * The list of instances on the current page.
   */
  items?: ListWorkflowInstancesResponseBodyItems[];
  /**
   * @remarks
   * The user-visible error message from the unified POP response wrapper.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The total number of visible instances after filtering.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListWorkflowInstancesResponseBodyItems },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

