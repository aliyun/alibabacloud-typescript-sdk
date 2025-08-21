// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIntentResponseBody extends $dara.Model {
  /**
   * @example
   * 12345
   */
  intentId?: number;
  /**
   * @example
   * 3464dfg3qwr34tf34
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

