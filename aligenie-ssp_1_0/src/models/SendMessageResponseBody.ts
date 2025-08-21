// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

