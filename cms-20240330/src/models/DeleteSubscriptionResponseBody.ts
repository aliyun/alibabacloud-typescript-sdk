// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8A33DBEA-*****-*****-*****-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the subscription.
   * 
   * @example
   * 123123123123
   */
  subscriptionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      subscriptionId: 'subscriptionId',
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

