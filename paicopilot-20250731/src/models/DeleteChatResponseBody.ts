// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChatResponseBody extends $dara.Model {
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

