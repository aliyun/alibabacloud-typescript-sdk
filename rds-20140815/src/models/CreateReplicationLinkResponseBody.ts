// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReplicationLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DR instance.
   * 
   * @example
   * pgm-****.pg.rds.aliyuncs.com
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F8C06AD-3F37-57A0-ABBF-ABD7824F55CE
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 564532302
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * test01
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

