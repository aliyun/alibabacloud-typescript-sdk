// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyDataTargetsConcurrentConfig extends $dara.Model {
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargetsDeadLetterQueue extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the dead-letter queue.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source
   */
  arn?: string;
  network?: string;
  securityGroupId?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      network: 'Network',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      network: 'string',
      securityGroupId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format that is used by the event target parameter. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource key of the event target. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template based on which events are delivered to the event target.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The event target.
   * 
   * @example
   * {\\"key\\"=\\"value\\"}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates when the event rule was created.
   * 
   * @example
   * 1607071602000
   */
  createdTimestamp?: number;
  /**
   * @remarks
   * The description of the event rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * Housekeeping-Bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event pattern, in JSON format. Valid values: stringEqual and stringExpression. You can specify up to five expressions in the map data structure in each field.
   * 
   * You can specify up to five expressions in the map data structure in each field.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event rule.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/myRule3
   */
  ruleARN?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * ramrolechange-fc
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values: ENABLE (default): The event rule is enabled. DISABLE: The event rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: GetRuleResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleARN: 'RuleARN',
      ruleName: 'RuleName',
      status: 'Status',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimestamp: 'number',
      description: 'string',
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': GetRuleResponseBodyDataTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned parameters.
   */
  data?: GetRuleResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The event rule not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BC1857D-E633-5E79-B2C2-43EF5F7730D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. If the operation is successful, the value true is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

