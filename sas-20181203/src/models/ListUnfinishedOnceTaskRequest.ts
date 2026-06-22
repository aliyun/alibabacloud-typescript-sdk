// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnfinishedOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The target object value. Valid values:
   * - If the task type is **IMAGE_SCAN**, the target object value is the **Digest** of the image.
   * - If the task type is **ASSETS_COLLECTION**, the target object value is the **Uuid** of the server.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  target?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **ASSETS_COLLECTION**: asset information collection task
   * - **IMAGE_SCAN**: image scan task.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'string',
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

