// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID. You must set this parameter to the ID of the task that you create by calling the **CreateReplicationLink** operation for the disaster recovery instance.
   * 
   * @example
   * 8413252
   */
  taskId?: number;
  /**
   * @remarks
   * The task name. You must set this parameter to the name of the task that you create by calling the **CreateReplicationLink** operation for the disaster recovery instance.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **create**: creates a synchronization link.
   * *   **create-dryrun**: performs a precheck before a synchronization link is created.
   * 
   * Valid values:
   * 
   * *   create: creates a replication link.
   * *   create-dryrun: performs a precheck before a replication link is created.
   * 
   * This parameter is required.
   * 
   * @example
   * create
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'number',
      taskName: 'string',
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

