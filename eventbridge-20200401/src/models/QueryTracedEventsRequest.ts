// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTracedEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range when event traces are queried. Unit: milliseconds.
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
   * The maximum number of entries to return in a request. You can use this parameter and NextToken to implement paging.
   * 
   * >  A maximum of 100 entries can be returned in a request.
   * 
   * @example
   * 50
   */
  limit?: number;
  /**
   * @remarks
   * The name of the event rule that is matched.
   * 
   * @example
   * test-mnsrule
   */
  matchedRule?: string;
  /**
   * @remarks
   * If you configure Limit and excess return values exist, this parameter is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The beginning of the time range to query event traces. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661773509000
   */
  startTime?: number;
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

