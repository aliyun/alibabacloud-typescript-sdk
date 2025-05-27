// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyDataTargetsConcurrentConfig } from "./GetRuleResponseBodyDataTargetsConcurrentConfig";
import { GetRuleResponseBodyDataTargetsDeadLetterQueue } from "./GetRuleResponseBodyDataTargetsDeadLetterQueue";
import { GetRuleResponseBodyDataTargetsParamList } from "./GetRuleResponseBodyDataTargetsParamList";


export class GetRuleResponseBodyDataTargets extends $dara.Model {
  concurrentConfig?: GetRuleResponseBodyDataTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue.
   */
  deadLetterQueue?: GetRuleResponseBodyDataTargetsDeadLetterQueue;
  /**
   * @remarks
   * The information about the event target.
   */
  detailMap?: { [key: string]: any };
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
   * The fault tolerance policy. Valid values: ALL and NONE. ALL: Fault tolerance is allowed. If an error occurs in an event, event processing is not blocked. If the event fails to be sent after the maximum number of retries specified by the retry policy is reached, the event is delivered to the dead-letter queue or discarded based on your configurations. NONE: Fault tolerance is not allowed. If an error occurs in an event and the event fails to be sent after the maximum number of retries specified by the retry policy is reached, event processing is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The ID of the event target.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The parameters that are configured for the event target.
   */
  paramList?: GetRuleResponseBodyDataTargetsParamList[];
  /**
   * @remarks
   * The retry policy that is used to push failed events. Valid values: BACKOFF_RETRY and EXPONENTIAL_DECAY_RETRY. BACKOFF_RETRY: backoff retry. A failed event can be retried up to three times. The interval between two consecutive retries is a random value between 10 seconds and 20 seconds. EXPONENTIAL_DECAY_RETRY: exponential decay retry. A failed event can be retried up to 176 times. The interval between two consecutive retries exponentially increases to a maximum of 512 seconds. The total retry time is 1 day. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, and 512 seconds. The interval of 512 seconds is used for 167 retries.
   * 
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
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
   * The type of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/185887.html).
   * 
   * @example
   * acs.mns.queue
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      concurrentConfig: 'ConcurrentConfig',
      deadLetterQueue: 'DeadLetterQueue',
      detailMap: 'DetailMap',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      paramList: 'ParamList',
      pushRetryStrategy: 'PushRetryStrategy',
      pushSelector: 'PushSelector',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentConfig: GetRuleResponseBodyDataTargetsConcurrentConfig,
      deadLetterQueue: GetRuleResponseBodyDataTargetsDeadLetterQueue,
      detailMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': GetRuleResponseBodyDataTargetsParamList },
      pushRetryStrategy: 'string',
      pushSelector: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.concurrentConfig && typeof (this.concurrentConfig as any).validate === 'function') {
      (this.concurrentConfig as any).validate();
    }
    if(this.deadLetterQueue && typeof (this.deadLetterQueue as any).validate === 'function') {
      (this.deadLetterQueue as any).validate();
    }
    if(this.detailMap) {
      $dara.Model.validateMap(this.detailMap);
    }
    if(Array.isArray(this.paramList)) {
      $dara.Model.validateArray(this.paramList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

