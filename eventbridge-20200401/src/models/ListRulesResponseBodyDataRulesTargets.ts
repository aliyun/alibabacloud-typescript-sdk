// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyDataRulesTargets extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the event target.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values:
   * 
   * *   **ALL**: Fault tolerance is allowed. If an error occurs in an event, event processing is not blocked. If the event fails to be sent after the maximum number of retries specified by the retry policy is reached, the event is delivered to the dead-letter queue or discarded based on your configurations.
   * *   **NONE**: Fault tolerance is prohibited. If an error occurs in an event and the event fails to be sent after the maximum number of retries specified by the retry policy is reached, event processing is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The ID of the custom event target.
   * 
   * @example
   * 177
   */
  id?: string;
  /**
   * @remarks
   * The transformer that is used to push events.
   * 
   * @example
   * MATCHED_EVENT
   */
  pushSelector?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters.](https://www.alibabacloud.com/help/en/eventbridge/latest/event-target-parameters)
   * 
   * @example
   * acs.mns.queue
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      pushSelector: 'PushSelector',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      pushSelector: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

