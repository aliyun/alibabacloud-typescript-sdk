// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsShrinkRequestBody extends $dara.Model {
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

export class ListInstanceHistoryEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   */
  body?: ListInstanceHistoryEventsShrinkRequestBody[];
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
  eventCycleStatusShrink?: string;
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
  eventLevelShrink?: string;
  /**
   * @remarks
   * The event type.
   */
  eventTypeShrink?: string;
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
      eventCycleStatusShrink: 'eventCycleStatus',
      eventExecuteEndTime: 'eventExecuteEndTime',
      eventExecuteStartTime: 'eventExecuteStartTime',
      eventFinashEndTime: 'eventFinashEndTime',
      eventFinashStartTime: 'eventFinashStartTime',
      eventLevelShrink: 'eventLevel',
      eventTypeShrink: 'eventType',
      instanceId: 'instanceId',
      nodeIP: 'nodeIP',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ListInstanceHistoryEventsShrinkRequestBody },
      eventCreateEndTime: 'string',
      eventCreateStartTime: 'string',
      eventCycleStatusShrink: 'string',
      eventExecuteEndTime: 'string',
      eventExecuteStartTime: 'string',
      eventFinashEndTime: 'string',
      eventFinashStartTime: 'string',
      eventLevelShrink: 'string',
      eventTypeShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

