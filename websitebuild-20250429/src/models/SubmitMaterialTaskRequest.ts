// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMaterialTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The business group ID.
   * 
   * @example
   * xxx
   */
  bizGroupId?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "brandName": "Brand name",
   *     "direction": "HORIZONTAL",
   *     "userPrompt": "Design requirements"
   * }
   */
  taskParam?: string;
  /**
   * @remarks
   * The task type.
   * 
   * This parameter is required.
   * 
   * @example
   * IMAGE_LOGO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      bizGroupId: 'BizGroupId',
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizGroupId: 'string',
      taskParam: 'string',
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

