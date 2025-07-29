// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkFlowResponseBodyDataWorkFlowInfo extends $dara.Model {
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * my first workflow
   */
  description?: string;
  groupId?: string;
  maxConcurrency?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * workflow_111
   */
  name?: string;
  namespace?: string;
  /**
   * @remarks
   * The status of the workflow.
   * 
   * @example
   * Successful
   */
  status?: string;
  /**
   * @remarks
   * The time expression of the workflow.
   * 
   * @example
   * 0 0 2 * * ?
   */
  timeExpression?: string;
  /**
   * @remarks
   * The time type of the workflow.
   * 
   * @example
   * cron
   */
  timeType?: string;
  /**
   * @remarks
   * The ID of the workflow.
   * 
   * @example
   * 1234xxx
   */
  workflowId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      namespace: 'Namespace',
      status: 'Status',
      timeExpression: 'TimeExpression',
      timeType: 'TimeType',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      maxConcurrency: 'string',
      name: 'string',
      namespace: 'string',
      status: 'string',
      timeExpression: 'string',
      timeType: 'string',
      workflowId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges extends $dara.Model {
  /**
   * @remarks
   * The ID of the source job.
   * 
   * @example
   * 100
   */
  source?: number;
  /**
   * @remarks
   * The ID of the object job.
   * 
   * @example
   * 200
   */
  target?: number;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'number',
      target: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 123456xxx
   */
  id?: number;
  /**
   * @remarks
   * The name of the job.
   * 
   * @example
   * job_111
   */
  label?: string;
  /**
   * @remarks
   * The status of the job.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      label: 'Label',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      label: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyDataWorkFlowNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The workflow edges.
   */
  edges?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges[];
  /**
   * @remarks
   * The list of workflow nodes.
   */
  nodes?: GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes[];
  static names(): { [key: string]: string } {
    return {
      edges: 'Edges',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edges: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoEdges },
      nodes: { 'type': 'array', 'itemType': GetWorkFlowResponseBodyDataWorkFlowNodeInfoNodes },
    };
  }

  validate() {
    if(Array.isArray(this.edges)) {
      $dara.Model.validateArray(this.edges);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The basic information of the workflow.
   */
  workFlowInfo?: GetWorkFlowResponseBodyDataWorkFlowInfo;
  /**
   * @remarks
   * The node information of the workflow.
   */
  workFlowNodeInfo?: GetWorkFlowResponseBodyDataWorkFlowNodeInfo;
  static names(): { [key: string]: string } {
    return {
      workFlowInfo: 'WorkFlowInfo',
      workFlowNodeInfo: 'WorkFlowNodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowInfo: GetWorkFlowResponseBodyDataWorkFlowInfo,
      workFlowNodeInfo: GetWorkFlowResponseBodyDataWorkFlowNodeInfo,
    };
  }

  validate() {
    if(this.workFlowInfo && typeof (this.workFlowInfo as any).validate === 'function') {
      (this.workFlowInfo as any).validate();
    }
    if(this.workFlowNodeInfo && typeof (this.workFlowNodeInfo as any).validate === 'function') {
      (this.workFlowNodeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error codes
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data of the workflow.
   */
  data?: GetWorkFlowResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * workflow is not existed
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45678xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the API call.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetWorkFlowResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

