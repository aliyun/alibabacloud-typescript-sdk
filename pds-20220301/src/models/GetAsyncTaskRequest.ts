// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
   */
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

