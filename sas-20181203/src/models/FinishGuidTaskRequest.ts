// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishGuidTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the task type.
   * 
   * This parameter is required.
   * 
   * @example
   * guide_sub_task_config_add_collection
   */
  taskTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      taskTypeName: 'TaskTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskTypeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

