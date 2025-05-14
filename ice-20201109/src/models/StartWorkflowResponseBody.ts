// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******42-E8E1-4FBB-8E52-F4225C******
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the workflow task.
   * 
   * @example
   * ******22dad741d086a50325f9******
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

