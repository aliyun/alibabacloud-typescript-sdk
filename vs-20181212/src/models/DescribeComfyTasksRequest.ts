// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The Hive ID, used as a filter to query tasks executed under the specified Hive.
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
   * The number of records to display on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Comfy task, used as a filter.
   * 
   * @example
   * 6c8234f4-d1e1-4cea-b08b-7926fbdea144
   */
  taskId?: string;
  /**
   * @remarks
   * The task state, used as a filter.
   * 
   * @example
   * QUEUED
   */
  taskState?: string;
  /**
   * @remarks
   * The ID of the Comfy workflow, used as a filter.
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

