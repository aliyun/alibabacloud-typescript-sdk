// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInnerConvertAsyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID that uniquely identifies a task.
   * 
   * @example
   * 10001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

