// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubscriptionForView } from "./SubscriptionForView";


export class ListSubscriptionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 2-3408-4595-9d80-****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123-123-234-345-123
   */
  requestId?: string;
  /**
   * @remarks
   * The list of subscriptions.
   */
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

