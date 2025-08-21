// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntentResponseBody extends $dara.Model {
  /**
   * @example
   * 43546474
   */
  intentId?: number;
  /**
   * @example
   * df56gjh5et34g3g3
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

