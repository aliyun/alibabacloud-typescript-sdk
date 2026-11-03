// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskDispatchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID, which is the unique identifier of the log configuration update task. You can obtain it from the TaskId parameter in the response of the ModifySlsDispatchConfig operation.
   * 
   * @example
   * 65db4ce2418b44b3be7c3xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

