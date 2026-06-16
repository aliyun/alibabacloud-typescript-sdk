// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionTrackEventTypesResponseBodyEventTypes extends $dara.Model {
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * urn:alibaba:idaas:event:user:create
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionTrackEventTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of event types.
   */
  eventTypes?: ListActionTrackEventTypesResponseBodyEventTypes[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results.
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * The token to retrieve the previous page of results.
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: { 'type': 'array', 'itemType': ListActionTrackEventTypesResponseBodyEventTypes },
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

