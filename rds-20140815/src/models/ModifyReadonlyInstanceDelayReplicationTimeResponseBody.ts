// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyReadonlyInstanceDelayReplicationTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the read-only instance.
   * 
   * @example
   * rr-bpxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The latency at which to replicate data from the primary instance to the read-only instance. Unit: seconds.
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
   * BBB11B5A-7B37-493A-87E6-490BCB7BDF98
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 241535739
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

