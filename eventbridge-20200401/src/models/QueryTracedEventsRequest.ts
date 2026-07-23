// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTracedEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range for the query, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661773509000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * mse
   */
  eventSource?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * eventbridge:Events:HTTPEvent
   */
  eventType?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Use this parameter with NextToken to paginate the results.>Notice: The maximum value is 100.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The name of the matched rule.
   * 
   * @example
   * test-mnsrule
   */
  matchedRule?: string;
  /**
   * @remarks
   * The token for retrieving the next page of results. It is returned in the response to a previous request if more results are available.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range for the query, specified as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661773509000
   */
  startTime?: number;
  /**
   * @remarks
   * The event subject.
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventBusName: 'EventBusName',
      eventSource: 'EventSource',
      eventType: 'EventType',
      limit: 'Limit',
      matchedRule: 'MatchedRule',
      nextToken: 'NextToken',
      startTime: 'StartTime',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventBusName: 'string',
      eventSource: 'string',
      eventType: 'string',
      limit: 'number',
      matchedRule: 'string',
      nextToken: 'string',
      startTime: 'number',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

