// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeletePracticeTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  idempotentId?: string;
  taskIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
      taskIdsShrink: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
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

