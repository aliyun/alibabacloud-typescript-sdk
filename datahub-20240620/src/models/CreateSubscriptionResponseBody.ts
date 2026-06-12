// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionResponseBody extends $dara.Model {
  /**
   * @example
   * 2025092710234722c53d0b08e811d8
   */
  requestId?: string;
  /**
   * @example
   * 1764123368886L0S9H
   */
  subscriptionId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscriptionId: 'SubscriptionId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscriptionId: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

