// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionForView } from "./SubscriptionForView";


export class ListSubscriptionsResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 123-123-234-345-123
   */
  requestId?: string;
  subscriptionList?: SubscriptionForView[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      subscriptionList: 'subscriptionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      subscriptionList: { 'type': 'array', 'itemType': SubscriptionForView },
    };
  }

  validate() {
    if(Array.isArray(this.subscriptionList)) {
      $dara.Model.validateArray(this.subscriptionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

