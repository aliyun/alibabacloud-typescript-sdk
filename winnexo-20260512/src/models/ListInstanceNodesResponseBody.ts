// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The conclusion of the node result. This field is empty if there is no conclusion.
   * 
   * @example
   * Analysis completed
   */
  conclusion?: string;
  /**
   * @remarks
   * The total number of seconds from the first run to the desired state. This field is empty if the time is missing.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The time when the node was first run. This field is empty for historical or unrun nodes.
   * 
   * @example
   * 2026-10-14T08:00:00Z
   */
  enteredAt?: string;
  /**
   * @remarks
   * The time when the node actually entered the desired state. This field is empty if the node has not finished.
   * 
   * @example
   * 2026-10-14T08:02:03Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The display name of the node assignee. This field is empty if the assignee is unknown.
   * 
   * @example
   * Assistant Customer Success Manager (CSM)
   */
  handler?: string;
  /**
   * @remarks
   * The lane position of the node in the workflow graph.
   * 
   * @example
   * 0
   */
  lane?: number;
  /**
   * @remarks
   * The key of the node (nodeKey). This is not the session ID.
   * 
   * @example
   * query.amount
   */
  nodeId?: string;
  /**
   * @remarks
   * The display name of the node.
   * 
   * @example
   * Query signed contract amount
   */
  nodeName?: string;
  /**
   * @remarks
   * The display sequence number of the node in the returned topology list, starting from 1.
   * 
   * @example
   * 3
   */
  nodeOrder?: number;
  /**
   * @remarks
   * The actual node type, such as AGENT or HUMAN.
   * 
   * @example
   * AGENT
   */
  nodeType?: string;
  /**
   * @remarks
   * The level of the node in the workflow graph, starting from 0.
   * 
   * @example
   * 2
   */
  rank?: number;
  /**
   * @remarks
   * The original running status of the node, such as READY, RUNNING, WAITING, SUCCEEDED, or FAILED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The reason for waiting, such as HUMAN_INPUT, HUMAN_STEP, REVIEW, MANUAL_PAUSE, or UNBLOCK. This field is empty if the node is not waiting.
   * 
   * @example
   * REVIEW
   */
  waitType?: string;
  static names(): { [key: string]: string } {
    return {
      conclusion: 'conclusion',
      duration: 'duration',
      enteredAt: 'enteredAt',
      finishedAt: 'finishedAt',
      handler: 'handler',
      lane: 'lane',
      nodeId: 'nodeId',
      nodeName: 'nodeName',
      nodeOrder: 'nodeOrder',
      nodeType: 'nodeType',
      rank: 'rank',
      status: 'status',
      waitType: 'waitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conclusion: 'string',
      duration: 'number',
      enteredAt: 'string',
      finishedAt: 'string',
      handler: 'string',
      lane: 'number',
      nodeId: 'string',
      nodeName: 'string',
      nodeOrder: 'number',
      nodeType: 'string',
      rank: 'number',
      status: 'string',
      waitType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The physical instance ID.
   * 
   * @example
   * plan_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The visible nodes arranged in topological order. The number of nodes is determined by the actual dynamic graph.
   * 
   * @example
   * []
   */
  nodes?: ListInstanceNodesResponseBodyNodes[];
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
   * The state version.
   * 
   * @example
   * 2
   */
  stateVersion?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
      nodes: 'nodes',
      requestId: 'requestId',
      stateVersion: 'stateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      nodes: { 'type': 'array', 'itemType': ListInstanceNodesResponseBodyNodes },
      requestId: 'string',
      stateVersion: 'number',
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

