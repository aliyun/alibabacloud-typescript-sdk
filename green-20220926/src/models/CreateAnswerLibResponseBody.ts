// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAnswerLibResponseBodyResult } from "./CreateAnswerLibResponseBodyResult";


export class CreateAnswerLibResponseBody extends $dara.Model {
  /**
   * @example
   * alxxxx
   */
  libId?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  result?: CreateAnswerLibResponseBodyResult;
  /**
   * @example
   * alAxbbxxxx-xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      requestId: 'RequestId',
      result: 'Result',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      requestId: 'string',
      result: CreateAnswerLibResponseBodyResult,
      taskId: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

