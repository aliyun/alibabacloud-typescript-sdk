// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBwmMigrationTaskWriterWorkflowListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * * * * * *
   */
  cron?: string;
  /**
   * @remarks
   * The database primary key ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The submit failure error message.
   * 
   * @example
   * Submit failed
   */
  submitDetail?: string;
  /**
   * @remarks
   * Filter by status. Valid values:
   * - WRT_INIT: Submit not started.
   * - WRT_RUN: Submitting.
   * - WRT_SUCC: All submitted successfully.
   * - WRT_FAIL: All submissions failed.
   * - WRT_PART_FAIL: Some submissions failed.
   * - DPY_SUCC: Published successfully.
   * - DPY_FAIL: Publish failed.
   * 
   * @example
   * WRT_INIT
   */
  submitStatus?: string;
  /**
   * @remarks
   * The workflow ID written to the target side.
   * 
   * @example
   * target_wf-12345
   */
  targetWorkflowId?: string;
  /**
   * @remarks
   * The workflow name on the target side.
   * 
   * @example
   * target_workflow_name
   */
  targetWorkflowName?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 5
   */
  taskNodeCount?: number;
  /**
   * @remarks
   * The actual workflow ID.
   * 
   * @example
   * wf-12345
   */
  workflowId?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * workflow_name
   */
  workflowName?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      id: 'id',
      submitDetail: 'submitDetail',
      submitStatus: 'submitStatus',
      targetWorkflowId: 'targetWorkflowId',
      targetWorkflowName: 'targetWorkflowName',
      taskNodeCount: 'taskNodeCount',
      workflowId: 'workflowId',
      workflowName: 'workflowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      id: 'number',
      submitDetail: 'string',
      submitStatus: 'string',
      targetWorkflowId: 'string',
      targetWorkflowName: 'string',
      taskNodeCount: 'number',
      workflowId: 'string',
      workflowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBwmMigrationTaskWriterWorkflowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetBwmMigrationTaskWriterWorkflowListResponseBodyData[];
  /**
   * @remarks
   * Indicates whether the result is empty.
   */
  empty?: boolean;
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * Indicates whether the result is not empty.
   */
  notEmpty?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for details.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      empty: 'empty',
      errCode: 'errCode',
      errMessage: 'errMessage',
      notEmpty: 'notEmpty',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      totalPages: 'totalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetBwmMigrationTaskWriterWorkflowListResponseBodyData },
      empty: 'boolean',
      errCode: 'string',
      errMessage: 'string',
      notEmpty: 'boolean',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

