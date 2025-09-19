// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnfinishedOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the object on which the task runs. If you set TaskType to IMAGE_SCAN, set this parameter to the UUID of the image that you want to scan. If you set TaskType to ASSETS_COLLECTION, set this parameter to the UUID of the server whose information you want to collect.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  target?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **ASSETS_COLLECTION**: asset information collection task
   * *   **IMAGE_SCAN**: image scan task
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

