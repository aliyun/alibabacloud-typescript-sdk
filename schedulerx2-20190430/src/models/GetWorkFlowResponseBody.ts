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
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * hxm.test
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of concurrent instances.
   * 
   * @example
   * 1
   */
  maxConcurrency?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * workflow_111
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 8150f906-2a40-4420-8cc1-68d2fe4dd69c
   */
  namespace?: string;
  /**
   * @remarks
   * The workflow status.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The time expression for the workflow.
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
   * The workflow ID.
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
   * The source job ID.
   * 
   * @example
   * 100
   */
  source?: number;
  /**
   * @remarks
   * The target job ID.
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
   * The job ID.
   * 
   * @example
   * 123456xxx
   */
  id?: number;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job_111
   */
  label?: string;
  /**
   * @remarks
   * The job status.
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
   * The list of workflow edges.
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
   * The basic information about the workflow.
   */
  workFlowInfo?: GetWorkFlowResponseBodyDataWorkFlowInfo;
  /**
   * @remarks
   * The workflow node information.
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The workflow data.
   */
  data?: GetWorkFlowResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * workflow is not existed
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45678xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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

