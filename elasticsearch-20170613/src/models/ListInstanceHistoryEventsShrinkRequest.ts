// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHistoryEventsShrinkRequestBody extends $dara.Model {
  /**
   * @example
   * true
   */
  desc?: boolean;
  /**
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
  body?: ListInstanceHistoryEventsShrinkRequestBody[];
  /**
   * @example
   * 1645596516000
   */
  eventCreateEndTime?: string;
  /**
   * @example
   * 1645596516000
   */
  eventCreateStartTime?: string;
  eventCycleStatusShrink?: string;
  /**
   * @example
   * 1645596516000
   */
  eventExecuteEndTime?: string;
  /**
   * @example
   * 1645596516000
   */
  eventExecuteStartTime?: string;
  /**
   * @example
   * 1645596516000
   */
  eventFinashEndTime?: string;
  /**
   * @example
   * 1645596516000
   */
  eventFinashStartTime?: string;
  eventLevelShrink?: string;
  eventTypeShrink?: string;
  /**
   * @example
   * es-cn-2r42l7a740005****
   */
  instanceId?: string;
  /**
   * @example
   * 10.1.xx.xx
   */
  nodeIP?: string;
  /**
   * @example
   * 0
   */
  page?: number;
  /**
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

