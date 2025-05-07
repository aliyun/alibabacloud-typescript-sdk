// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchReplicationLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DR instance.
   * 
   * @example
   * 135****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F2DD69B-90AF-1E72-923C-87575658A9D9
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

