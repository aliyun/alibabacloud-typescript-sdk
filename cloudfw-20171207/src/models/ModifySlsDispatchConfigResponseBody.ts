// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySlsDispatchConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CD646BA-490F-5584-9272-B6FFE3BB****
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID. Modifying log configurations is an asynchronous task. This field indicates the unique identifier of the task. You can use this ID to query the status of the task.
   * 
   * @example
   * d8c995ec-40a5-4382-a3f3-57713096****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

