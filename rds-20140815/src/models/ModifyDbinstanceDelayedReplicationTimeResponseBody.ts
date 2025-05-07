// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceDelayedReplicationTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The replication latency of the read-only instance. Unit: seconds.
   * 
   * @example
   * 100
   */
  readSQLReplicationTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFB6083A-7699-489B-8278-C0CB4793A96E
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1715482.0
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      readSQLReplicationTime: 'ReadSQLReplicationTime',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      readSQLReplicationTime: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

