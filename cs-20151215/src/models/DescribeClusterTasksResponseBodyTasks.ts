// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterTasksResponseBodyTasksError } from "./DescribeClusterTasksResponseBodyTasksError";


export class DescribeClusterTasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2022-08-03T10:11:33+08:00
   */
  created?: string;
  /**
   * @remarks
   * The error returned for the task.
   */
  error?: DescribeClusterTasksResponseBodyTasksError;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  state?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * install-addons-c3xxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The type of task.
   * 
   * @example
   * cluster_addon_install
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 2022-08-03T10:12:03.482+08:00
   */
  updated?: string;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      error: 'error',
      state: 'state',
      taskId: 'task_id',
      taskType: 'task_type',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'string',
      error: DescribeClusterTasksResponseBodyTasksError,
      state: 'string',
      taskId: 'string',
      taskType: 'string',
      updated: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

