// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReplicationLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the disaster recovery instance.
   * 
   * @example
   * PostgreSQL：pgm-bp1trqb4p1******
   * SQL Server：135****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1EFCFB59-7152-19C4-8C53-F887D107AFD3
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 159****
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * zbtest
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      requestId: 'string',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

