// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskDispatchStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID. It is the unique identifier of the log configuration modification task. You can obtain the task ID from the TaskId parameter in the response of the ModifySlsDispatchConfig operation.
   * 
   * **Note**: This parameter is required. If it is not provided, the server returns a 400 error and rejects the request. Make sure to specify a valid TaskId.
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

