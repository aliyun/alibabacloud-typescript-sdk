// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42CD2EF5-D77E-5AD4-961B-159330D98286
   */
  requestId?: string;
  /**
   * @remarks
   * The task IDs.
   * 
   * @example
   * 11111,22222
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

