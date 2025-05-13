// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceHistoryEventsRequestBody } from "./ListInstanceHistoryEventsRequestBody";


export class ListInstanceHistoryEventsRequest extends $dara.Model {
  body?: ListInstanceHistoryEventsRequestBody[];
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
  eventCycleStatus?: string[];
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
  eventLevel?: string[];
  eventType?: string[];
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

