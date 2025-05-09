// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTaskInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The instances.
   */
  taskInstancesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      taskInstancesShrink: 'TaskInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      taskInstancesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

