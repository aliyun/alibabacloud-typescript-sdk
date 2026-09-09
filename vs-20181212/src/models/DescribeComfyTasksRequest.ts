// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The HiveId used as a filter condition to query tasks executed under the specified HiveId.
   * 
   * @example
   * hive-26cd567b35c04a0a90f0xxxxx
   */
  hiveId?: string;
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
   * The number of records per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Comfy workflow ID used as a filter condition.
   */
  taskId?: string;
  /**
   * @remarks
   * The task status used as a filter condition.
   * 
   * @example
   * QUEUED
   */
  taskState?: string;
  /**
   * @remarks
   * The Comfy workflow ID used as a filter condition.
   * 
   * @example
   * wf_adb32aed-ccdc-42ae-b4d4-a21181ac8a5f
   */
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      hiveId: 'HiveId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      taskState: 'TaskState',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hiveId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
      taskState: 'string',
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

