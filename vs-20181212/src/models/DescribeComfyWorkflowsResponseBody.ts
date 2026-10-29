// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyWorkflowsResponseBodyWorkflows extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and includes a time zone offset. The format is YYYY-MM-DDTHH:mm:ss+HH:mm.
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
   * This is an image-to-video workflow
   */
  description?: string;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * Image-to-video workflow
   */
  name?: string;
  /**
   * @remarks
   * The update time. The time is a UNIX timestamp in seconds.
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
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of workflows.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workflows.
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

