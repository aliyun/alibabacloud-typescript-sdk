// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventTracesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the event trace. Valid values: PutEvent, FilterEvent, and PushEvent. The value PutEvent indicates that the event was delivered. The value FilterEvent indicates that the event was filtered. The value PushEvent indicates that the event was pushed.
   * 
   * @example
   * PutEvent
   */
  action?: string;
  /**
   * @remarks
   * The execution time of the event trace.
   * 
   * @example
   * 1659495343896
   */
  actionTime?: number;
  /**
   * @remarks
   * The endpoint of the event target. This parameter is returned only if Action is set to PushEvent.
   * 
   * @example
   * acs:mns:cn-zhangjiakou:123456789098****:queues/testQueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * demo
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * a5747e4f-2af2-40b6-b262-d0140e995bf7
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * cert-api
   */
  eventSource?: string;
  /**
   * @remarks
   * The delay period for which the event was delivered to the event target. This parameter is returned only if Action is set to PushEvent.
   * 
   * @example
   * 80
   */
  notifyLatency?: string;
  /**
   * @remarks
   * The delivery status.
   * 
   * @example
   * [200]Ok
   */
  notifyStatus?: string;
  /**
   * @remarks
   * The time when the event was delivered to the event target. This parameter is returned only if Action is set to PushEvent.
   * 
   * @example
   * 1659495343896
   */
  notifyTime?: number;
  /**
   * @remarks
   * The time when the event was delivered to the event bus. This parameter is returned only if Action is set to PutEvent.
   * 
   * @example
   * 1659495343896
   */
  receivedTime?: number;
  /**
   * @remarks
   * The time when the event rule was matched. This parameter is returned only if Action is set to FilterEvent.
   * 
   * @example
   * 1659495343896
   */
  ruleMatchingTime?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * ramrolechange-mns
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      endpoint: 'Endpoint',
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventSource: 'EventSource',
      notifyLatency: 'NotifyLatency',
      notifyStatus: 'NotifyStatus',
      notifyTime: 'NotifyTime',
      receivedTime: 'ReceivedTime',
      ruleMatchingTime: 'RuleMatchingTime',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'number',
      endpoint: 'string',
      eventBusName: 'string',
      eventId: 'string',
      eventSource: 'string',
      notifyLatency: 'string',
      notifyStatus: 'string',
      notifyTime: 'number',
      receivedTime: 'number',
      ruleMatchingTime: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

