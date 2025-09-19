// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The timestamp when the root task ends. Unit: milliseconds.
   * 
   * @example
   * 1651766520000
   */
  endTimeQuery?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the root task.
   * 
   * > You must specify at least one of the **TaskType** and **RootTaskId** parameters.
   * 
   * @example
   * bb5d657479bba5e1d308b6c9e85c9174
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The source of the task. Valid values include the following values:
   * 
   * *   **schedule**: automatic scheduling of Cloud Security Scanner.
   * *   **console**: one-click detection in the Cloud Security Scanner console.
   * 
   * @example
   * console
   */
  source?: string;
  /**
   * @remarks
   * The timestamp when the root task starts. Unit: milliseconds.
   * 
   * @example
   * 1651737301000
   */
  startTimeQuery?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * d7b2acf8d362742123e4a84e1bf8****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **CLIENT_PROBLEM_CHECK**: a task of the Security Center agent
   * *   **CLIENT_DEV_OPS**: an O\\&M task of Cloud Assistant
   * *   **ASSET_SECURITY_CHECK**: a task of asset information collection
   * 
   * > You must specify at least one of the **TaskType** and **RootTaskId** parameters.
   * 
   * @example
   * CLIENT_PROBLEM_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTimeQuery: 'EndTimeQuery',
      pageSize: 'PageSize',
      rootTaskId: 'RootTaskId',
      source: 'Source',
      startTimeQuery: 'StartTimeQuery',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTimeQuery: 'number',
      pageSize: 'number',
      rootTaskId: 'string',
      source: 'string',
      startTimeQuery: 'number',
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

