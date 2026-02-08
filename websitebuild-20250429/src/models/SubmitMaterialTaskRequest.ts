// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMaterialTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskParam?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * IMAGE_LOGO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskParam: 'TaskParam',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

