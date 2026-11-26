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
   * Specifies whether to query only running subtasks. If you set this parameter to true, the system queries all running subtasks of the current tenant across root tasks. In this case, you do not need to specify RootTaskId.
   */
  onlyRunning?: boolean;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource directory account.
   * 
   * @example
   * 123456789
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The ID of the root task returned upon task submission.
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
      onlyRunning: 'OnlyRunning',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      rootTaskId: 'RootTaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      onlyRunning: 'boolean',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
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

