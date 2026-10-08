// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the disaster recovery instance.
   * 
   * @example
   * PostgreSQL：pgm-****.pg.rds.aliyuncs.com
   * SQL Server：92****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 442FC501-C4DD-1349-B70A-DE13D189072E
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 159****
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
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

