// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeletePracticeTaskRequest extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  idempotentId?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'idempotentId',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

