// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskExecutionRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group to which the task belongs, such as cg_101. If you specify this parameter, a group space task is created, and the caller must be a valid group member. If you leave this parameter empty, a personal task is created.
   * 
   * @example
   * 1112
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure is indicated by a backend error code, such as ERR.* or InvalidParameter.*.
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
   * 1
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
   * The initiator filter based on the platform user ID. The scope is the executor of the record. For manual execution, it is the user who triggers the task. For automatic execution, it is the task creator. To view only the tasks that you initiated, specify the current user ID.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * The execution status filter in lowercase. Valid values: pending (queued), running (running), success (successful), failed (failed), timeout (timed out), and cancelled (cancelled). If you do not specify this parameter, no filtering is applied. If you specify this parameter, no future plan items are generated.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the active tenant.
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

