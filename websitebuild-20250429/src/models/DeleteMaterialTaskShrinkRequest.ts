// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaterialTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskIdsShrink: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

