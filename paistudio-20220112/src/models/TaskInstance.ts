// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInstance extends $dara.Model {
  /**
   * @remarks
   * The instance creation time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The instance end time.
   * 
   * @example
   * 2023-06-22T00:02:00Z
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * The task instance status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * taskxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The task instance ID.
   * 
   * @example
   * task-instance-xxxxx
   */
  taskInstanceId?: string;
  /**
   * @remarks
   * The cloud account ID.
   * 
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

