// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskConversationRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The user ID of the task initiator.
   * 
   * @example
   * 5
   */
  initiatorUserId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The maximum number of data records to return in this request.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The running status of the task.
   * 
   * @example
   * failed
   */
  status?: string;
  /**
   * @remarks
   * The execution status filter in lowercase. Valid values: pending (queued), running (running), success (successful), failed (failed), timeout (timed out), and cancelled (cancelled). If you do not specify this parameter, no filtering is applied. If you specify this parameter, future scheduled items are not generated.
   * 
   * @example
   * exampleTaskId
   */
  taskId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If you do not specify this parameter, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
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

