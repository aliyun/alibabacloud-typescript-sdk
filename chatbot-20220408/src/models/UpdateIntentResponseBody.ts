// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntentResponseBody extends $dara.Model {
  /**
   * @example
   * 234234234534
   */
  intentId?: number;
  /**
   * @example
   * dfaf23dfas234234234534
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intentId: 'IntentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentId: 'number',
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

