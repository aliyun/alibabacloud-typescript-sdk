// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent task returned after the task is submitted.
   * 
   * @example
   * 110146ac282314fe4f7cd11afc7540eb
   */
  rootTaskId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * SKILL_CHECK
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      rootTaskId: 'RootTaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      rootTaskId: 'string',
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

