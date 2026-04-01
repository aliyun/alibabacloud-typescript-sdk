// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReplicationLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DR instance.
   * 
   * @example
   * pgm-bp1trqb4p1xd****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 3472****
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

