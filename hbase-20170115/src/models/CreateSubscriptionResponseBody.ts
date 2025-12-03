// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubscriptionResponseBody extends $dara.Model {
  requestId?: string;
  subscriptionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      subscriptionId: 'SubscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscriptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

