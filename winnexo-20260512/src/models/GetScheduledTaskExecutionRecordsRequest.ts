// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs, such as cg_101. If this parameter is specified, a group workspace task is created and the caller must be a valid group member. If this parameter is left empty, a personal task is created.
   * 
   * @example
   * 1112
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The platform user ID of the initiator for filtering. The scope is the executor of the record. For manual execution, this is the user who triggered the execution. For automatic execution, this is the task creator. To view only tasks initiated by yourself, pass the current user ID.
   * 
   * @example
   * 5
   */
  initiatorUserId?: string;
  /**
   * @remarks
   * The page number. Default value: 1. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * exampleCollaborationGroupId
   */
  page?: number;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The execution status filter (lowercase). Valid values:
   * - pending: Queued.
   * - running: Running.
   * - success: Succeeded.
   * - failed: Failed.
   * - timeout: Timed out.
   * - cancelled: Cancelled.
   * 
   * If this parameter is not specified, no status filtering is applied. If this parameter is specified, future planned items are no longer generated.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * The ID of a single task for pre-filtering. If this parameter is not specified, execution records of all visible tasks are returned.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      initiatorUserId: 'initiatorUserId',
      page: 'page',
      pageSize: 'pageSize',
      status: 'status',
      taskId: 'taskId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      initiatorUserId: 'string',
      page: 'number',
      pageSize: 'number',
      status: 'string',
      taskId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

