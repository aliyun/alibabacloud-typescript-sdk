// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO } from "./GetConsumerGroupSubscriptionResponseBodyDataConnectionDto";
import { GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO } from "./GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDto";


export class GetConsumerGroupSubscriptionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The connection details.
   */
  connectionDTO?: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO;
  /**
   * @remarks
   * The subscription details.
   */
  subscriptionDTO?: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO;
  static names(): { [key: string]: string } {
    return {
      connectionDTO: 'connectionDTO',
      subscriptionDTO: 'subscriptionDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDTO: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO,
      subscriptionDTO: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO,
    };
  }

  validate() {
    if(this.connectionDTO && typeof (this.connectionDTO as any).validate === 'function') {
      (this.connectionDTO as any).validate();
    }
    if(this.subscriptionDTO && typeof (this.subscriptionDTO as any).validate === 'function') {
      (this.subscriptionDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

