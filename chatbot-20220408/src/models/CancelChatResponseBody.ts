// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelChatResponseBody extends $dara.Model {
  cancelResult?: boolean;
  /**
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelResult: 'CancelResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelResult: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

