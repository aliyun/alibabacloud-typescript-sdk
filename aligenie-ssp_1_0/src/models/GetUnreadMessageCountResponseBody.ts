// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUnreadMessageCountResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  /**
   * @example
   * 10
   */
  result?: number;
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

