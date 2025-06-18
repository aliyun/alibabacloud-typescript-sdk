// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTargetsResponseBodyDataTargetsConcurrentConfig } from "./ListTargetsResponseBodyDataTargetsConcurrentConfig";
import { ListTargetsResponseBodyDataTargetsParamList } from "./ListTargetsResponseBodyDataTargetsParamList";


export class ListTargetsResponseBodyDataTargets extends $dara.Model {
  /**
   * @remarks
   * The concurrency configuration.
   */
  concurrentConfig?: ListTargetsResponseBodyDataTargetsConcurrentConfig;
  /**
   * @remarks
   * The endpoint of the event target.
   * 
   * @example
   * acs:fc:cn-hangzhou:123456789098****:services/guide.LATEST/functions/HelloFC
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values: ALL and NONE. 
   * 
   * - **ALL**: Fault tolerance is allowed. If an error occurs in an event, event processing is not blocked. If the event fails to be sent after the maximum number of retries specified by the retry policy is reached, the event is delivered to the dead-letter queue or discarded based on your configurations. 
   * - **NONE**: Fault tolerance is not allowed. If an error occurs in an event and the event fails to be sent after the maximum number of retries specified by the retry policy is reached, event processing is blocked.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * sls-beijing-one1-tf
   */
  eventBusName?: string;
  /**
   * @remarks
   * The ID of the event target.
   * 
   * @example
   * 1453
   */
  id?: string;
  /**
   * @remarks
   * The parameters that are configured for the event target.
   */
  paramList?: ListTargetsResponseBodyDataTargetsParamList[];
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * rule-uKAK2
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the event target. For more information, see [Event target parameters](https://help.aliyun.com/document_detail/183698.html).
   * 
   * @example
   * acs.fc.function
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      concurrentConfig: 'ConcurrentConfig',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      eventBusName: 'EventBusName',
      id: 'Id',
      paramList: 'ParamList',
      ruleName: 'RuleName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentConfig: ListTargetsResponseBodyDataTargetsConcurrentConfig,
      endpoint: 'string',
      errorsTolerance: 'string',
      eventBusName: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': ListTargetsResponseBodyDataTargetsParamList },
      ruleName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.concurrentConfig && typeof (this.concurrentConfig as any).validate === 'function') {
      (this.concurrentConfig as any).validate();
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

