// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionForView } from "./SubscriptionForView";


export class GetSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 111111-222-333-1111-33333
   */
  requestId?: string;
  subscription?: SubscriptionForView;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      subscription: 'subscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      subscription: SubscriptionForView,
    };
  }

  validate() {
    if(this.subscription && typeof (this.subscription as any).validate === 'function') {
      (this.subscription as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

