// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 551FF252-6CFC-5DDA-9F84-9B07302385C2
   */
  requestId?: string;
  /**
   * @example
   * 313123123
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

