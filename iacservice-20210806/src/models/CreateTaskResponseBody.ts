// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * CD478792-6952-5A1C-9F57-78932BF0FAC6
   */
  requestId?: string;
  /**
   * @example
   * task-433aead756057fffeaba4828f5195
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

