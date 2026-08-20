// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs (such as cg_101). If specified, a group space task is created (the caller must be a valid group member). If left empty, a personal task is created.
   * 
   * @example
   * 1112
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * Filters by initiator (platform user ID). The scope is the executor of the record (manual execution = the person who triggered it, automatic execution = the task creator). To view only tasks initiated by yourself, pass the current user ID.
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
   * Filters by execution status (lowercase). Valid values:
   * - pending: queued.
   * - running: in progress.
   * - success: succeeded.
   * - failed: failed.
   * - timeout: timed out.
   * - cancelled: terminated.
   * 
   * If not specified, no status filter is applied. If specified, future planned items are no longer generated.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * Filters by a single task ID. If not specified, execution records of all visible tasks are returned.
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

