// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionTrackEventTypesResponseBodyEventTypes extends $dara.Model {
  /**
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
  eventTypes?: ListActionTrackEventTypesResponseBodyEventTypes[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于上一次翻页查询。
   * 
   * @example
   * PTxxxexample
   */
  previousToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
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

