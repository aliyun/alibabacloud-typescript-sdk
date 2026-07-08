// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyWorkflowsResponseBodyWorkflows extends $dara.Model {
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2026-02-03T07:31:45+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The workflow description.
   * 
   * @example
   * 这是一个图生视频工作流
   */
  description?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * 图生视频工作流
   */
  name?: string;
  /**
   * @remarks
   * The time when the workflow was last updated.
   * 
   * @example
   * 1778897586
   */
  updatedTime?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      name: 'Name',
      updatedTime: 'UpdatedTime',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      name: 'string',
      updatedTime: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComfyWorkflowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of workflows on the current page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of workflows that match the query.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * A list of Comfy workflows.
   */
  workflows?: DescribeComfyWorkflowsResponseBodyWorkflows[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workflows: 'Workflows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      workflows: { 'type': 'array', 'itemType': DescribeComfyWorkflowsResponseBodyWorkflows },
    };
  }

  validate() {
    if(Array.isArray(this.workflows)) {
      $dara.Model.validateArray(this.workflows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

