// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScheduleTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  message?: string;
  /**
   * @example
   * F7E2****B7C94
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

