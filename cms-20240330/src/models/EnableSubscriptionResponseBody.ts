// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableSubscriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
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

