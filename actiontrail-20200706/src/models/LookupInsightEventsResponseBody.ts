// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupInsightEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Insights events.
   */
  events?: { [key: string]: any }[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 851038F3-33AB-4C49-97D7-6AB37D35****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

