// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDictResponseBody extends $dara.Model {
  /**
   * @example
   * 2BF6B57E-5AAD-5389-80CD-E200BBF91FF9
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

