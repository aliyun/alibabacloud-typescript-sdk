// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnfinishedOnceTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The target object value.
   * 
   * - If TaskType is set to IMAGE_SCAN, you must provide the image digest.
   * - If TaskType is set to ASSETS_COLLECTION, you must provide the machine UUID.
   * 
   * If this parameter is not provided in the preceding scenarios, the service returns HTTP 400 with error code -101.
   * 
   * @example
   * 4fe8e1cd-3c37-4851-b9de-124da32c****
   */
  target?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **ASSETS_COLLECTION**: asset information collection task
   * - **IMAGE_SCAN**: image scan task
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

