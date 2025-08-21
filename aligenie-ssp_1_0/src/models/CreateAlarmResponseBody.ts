// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
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

