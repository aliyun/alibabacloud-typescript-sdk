// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
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
   * The maximum number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID. This ID is returned when you call the **CreateReplicationLink** operation to create a disaster recovery instance.
   * 
   * @example
   * 8413252
   */
  taskId?: number;
  /**
   * @remarks
   * The task name. This is the name of the task when you call the **CreateReplicationLink** operation to create a disaster recovery instance.
   * 
   * @example
   * test01
   */
  taskName?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **create**: Creates a synchronization link.
   * - **create-dryrun**: Performs a precheck for creating a synchronization link.
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

