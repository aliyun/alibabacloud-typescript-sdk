// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCancelTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EssayCorrectionTask
   */
  taskCode?: string;
  /**
   * @example
   * ["xxxx1","xxxx2"]
   */
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      taskCode: 'taskCode',
      taskIdsShrink: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskCode: 'string',
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

