// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the task.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the task.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * g-59d8d22e78792ffe3d3eb6154d727
   */
  groupId?: string;
  /**
   * @remarks
   * The keyword for fuzzy search by task ID or task name.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 21a90f5d-a469-4ac4-a8ea-f6e1e7470e6f
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The module ID.
   * 
   * @example
   * mod-1525e992f1b62139d1c437d64ae
   */
  moduleId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Minimum value: 1. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * p-433aead7560572f8d95b25775c
   */
  projectId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Planning: The job is in the Plan execution phase.
   * - Planned: The job has completed the Plan execution.
   * - PlannedAndFinished: After the Plan execution is completed, no diff is found, and the job enters the final state.
   * - Applying: The job is in the Apply execution phase.
   * - Applied: The job has completed the Apply execution.
   * - Errored: The job execution encountered errors and entered the final state.
   * 
   * @example
   * Errored
   */
  status?: string;
  /**
   * @remarks
   * The list of task tags.
   */
  tag?: ListTasksRequestTag[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      keyword: 'keyword',
      kmsKeyId: 'kmsKeyId',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      status: 'status',
      tag: 'tag',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyword: 'string',
      kmsKeyId: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListTasksRequestTag },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

