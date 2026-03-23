// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicationLinkLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  taskId?: number;
  taskName?: string;
  /**
   * @remarks
   * This parameter is required.
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

