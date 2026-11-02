// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID. This parameter specifies the task identifier returned by the ApplyCertificate asynchronous task. You can obtain the value from the TaskId field in the response after you call the ApplyCertificate operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * Specifies the type of the asynchronous task. Set the value to ApplyCertificate to query the submission result of the ApplyCertificate asynchronous task. Default value: ApplyCertificate.
   * 
   * @example
   * ApplyCertificate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

