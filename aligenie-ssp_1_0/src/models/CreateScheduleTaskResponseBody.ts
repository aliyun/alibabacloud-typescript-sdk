// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduleTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * 1234567
   */
  result?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

