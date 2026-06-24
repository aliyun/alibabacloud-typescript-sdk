// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort in descending order. Valid values:
   * 
   * - true (default): Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The field by which the results are sorted. Valid values:
   * 
   * - event_time: event creation time
   * - event_execute_start_time: event execution time
   * - event_execute_finish_time: event completion time.
   * 
   * @example
   * event_time
   */
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      sortField: 'sortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'boolean',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: ListInstanceHistoryEventsRequestBody[];
  /**
   * @remarks
   * The end time for querying by event creation time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventCreateEndTime?: string;
  /**
   * @remarks
   * The start time for querying by event creation time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventCreateStartTime?: string;
  /**
   * @remarks
   * The lifecycle status of the event.
   */
  eventCycleStatus?: string[];
  /**
   * @remarks
   * The end time for querying by event execution time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventExecuteEndTime?: string;
  /**
   * @remarks
   * The start time for querying by event execution time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventExecuteStartTime?: string;
  /**
   * @remarks
   * The end time for querying by event completion time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventFinashEndTime?: string;
  /**
   * @remarks
   * The start time for querying by event completion time. Specify a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventFinashStartTime?: string;
  /**
   * @remarks
   * The event level.
   */
  eventLevel?: string[];
  /**
   * @remarks
   * The event type.
   */
  eventType?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * es-cn-2r42l7a740005****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the node that triggered the event.
   * 
   * @example
   * 10.1.xx.xx
   */
  nodeIP?: string;
  /**
   * @remarks
   * The starting document offset. The value must be a non-negative integer. Default value: 0.
   * 
   * @example
   * 0
   */
  page?: number;
  /**
   * @remarks
   * The number of events to return. The value must be a non-negative integer. Default value: 10.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      eventCreateEndTime: 'eventCreateEndTime',
      eventCreateStartTime: 'eventCreateStartTime',
      eventCycleStatus: 'eventCycleStatus',
      eventExecuteEndTime: 'eventExecuteEndTime',
      eventExecuteStartTime: 'eventExecuteStartTime',
      eventFinashEndTime: 'eventFinashEndTime',
      eventFinashStartTime: 'eventFinashStartTime',
      eventLevel: 'eventLevel',
      eventType: 'eventType',
      instanceId: 'instanceId',
      nodeIP: 'nodeIP',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ListInstanceHistoryEventsRequestBody },
      eventCreateEndTime: 'string',
      eventCreateStartTime: 'string',
      eventCycleStatus: { 'type': 'array', 'itemType': 'string' },
      eventExecuteEndTime: 'string',
      eventExecuteStartTime: 'string',
      eventFinashEndTime: 'string',
      eventFinashStartTime: 'string',
      eventLevel: { 'type': 'array', 'itemType': 'string' },
      eventType: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      nodeIP: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    if(Array.isArray(this.eventCycleStatus)) {
      $dara.Model.validateArray(this.eventCycleStatus);
    }
    if(Array.isArray(this.eventLevel)) {
      $dara.Model.validateArray(this.eventLevel);
    }
    if(Array.isArray(this.eventType)) {
      $dara.Model.validateArray(this.eventType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

