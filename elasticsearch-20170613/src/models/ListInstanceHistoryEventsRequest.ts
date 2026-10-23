// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsRequestBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in descending order. Valid values:
   * - true: Sorts the results in descending order. This is the default value.
   * - false: Sorts the results in ascending order.
   * 
   * @example
   * true
   */
  desc?: boolean;
  /**
   * @remarks
   * The field by which to sort the returned results. Valid values:
   * - event_time: the creation time of the event
   * - event_execute_start_time: the execution time of the event
   * - event_execute_finish_time: the completion time of the event
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
   * The end time for querying events by creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventCreateEndTime?: string;
  /**
   * @remarks
   * The start time for querying events by creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventCreateStartTime?: string;
  /**
   * @remarks
   * The lifecycle status object of the event.
   */
  eventCycleStatus?: string[];
  /**
   * @remarks
   * The end time for querying events by execution time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventExecuteEndTime?: string;
  /**
   * @remarks
   * The start time for querying events by execution time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventExecuteStartTime?: string;
  /**
   * @remarks
   * The end time for querying events by completion time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1645596516000
   */
  eventFinashEndTime?: string;
  /**
   * @remarks
   * The start time for querying events by completion time. The value is a timestamp in milliseconds.
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
   * The starting document offset. The value must be a non-negative number. Default value: 0.
   * 
   * @example
   * 0
   */
  page?: number;
  /**
   * @remarks
   * The number of events to return. The value must be a non-negative number. Default value: 10.
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

