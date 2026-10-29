// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTracedEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range to retrieve events. Unit: milliseconds.
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
   * The maximum number of entries to return per page. You can use this parameter together with NextToken to paginate query results. >Notice: The maximum number of entries returned per page cannot exceed 100.
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
   * The pagination token. If you specify Limit and more results are available, this token is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time of the time range to retrieve events. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661773509000
   */
  startTime?: number;
  /**
   * @remarks
   * The subject of the event.
   * 
   * @example
   * order-1001
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

