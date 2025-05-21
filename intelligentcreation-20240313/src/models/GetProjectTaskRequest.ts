// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectTaskRequest extends $dara.Model {
  /**
   * @example
   * 20230823218109326025-1200
   */
  idempotentId?: string;
  /**
   * @example
   * 313123123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      idempotentId: 'IdempotentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idempotentId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

