// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**.
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
   * The number of client tasks per page in a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The root task ID.
   * > **TaskType** and **RootTaskId** cannot both be empty.
   * 
   * @example
   * bb5d657479bba5e1d308b6c9e85c9174
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The node source. Valid values include but are not limited to:
   * - **schedule**: automatic scheduling of vulnerability scanning
   * - **console**: one-click detection from the vulnerability scanning console
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
   * The task ID.
   * 
   * @example
   * d7b2acf8d362742123e4a84e1bf8****
   */
  taskId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * - **VUL_CHECK_TASK**: vulnerability scanning node
   * - **CLIENT_PROBLEM_CHECK**: client node
   * - **CLIENT_DEV_OPS**: cloud O&M node
   * - **ASSET_SECURITY_CHECK**: asset information collection node
   * > **TaskType** and **RootTaskId** cannot both be empty.
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

