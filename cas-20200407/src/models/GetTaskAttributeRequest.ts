// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the asynchronous task. The default value is ApplyCertificate, which specifies a query for the result of a certificate application.
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

