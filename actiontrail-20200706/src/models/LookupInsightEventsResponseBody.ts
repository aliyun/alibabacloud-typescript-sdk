// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupInsightEventsResponseBody extends $dara.Model {
  events?: { [key: string]: any }[];
  /**
   * @example
   * VjE6bHJlTGoxdm1M****
   */
  nextToken?: string;
  /**
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

