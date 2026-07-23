// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyDataTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent pushes.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The network type of the dead-letter queue.
   */
  network?: string;
  /**
   * @remarks
   * The security group ID.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID.
   */
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
   * The format of the event target parameter. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
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
   * The template of the event target parameter.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The value of the event target parameter.
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
  /**
   * @remarks
   * The concurrency settings.
   */
  concurrentConfig?: GetRuleResponseBodyDataTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue.
   */
  deadLetterQueue?: GetRuleResponseBodyDataTargetsDeadLetterQueue;
  /**
   * @remarks
   * The details of the event target.
   */
  detailMap?: { [key: string]: any };
  /**
   * @remarks
   * The delivery endpoint for the event.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance policy. Valid values:
   * 
   * - **ALL**: Enables fault tolerance. Errors do not block event delivery. If all retries fail, the system sends the event to the specified dead-letter queue or discards it.
   * 
   * - **NONE**: Disables fault tolerance. If an error persists after all retries, the system blocks event delivery.
   * 
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @remarks
   * The custom ID of the event target.
   * 
   * @example
   * Mlm123456JHd2RsRoKw
   */
  id?: string;
  /**
   * @remarks
   * The list of parameters for the event target.
   */
  paramList?: GetRuleResponseBodyDataTargetsParamList[];
  /**
   * @remarks
   * The retry policy for pushing events. Valid values:
   * 
   * - **BACKOFF_RETRY**: A backoff retry policy. The event is retried 3 times at a random interval between 10 and 20 seconds.
   * 
   * - **EXPONENTIAL_DECAY_RETRY**: An exponential decay retry policy. The event is retried 176 times over one day. The retry interval starts at 1 second and exponentially increases to a maximum of 512 seconds. The specific retry intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, and then 512 for the remaining 167 retries.
   * 
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
  /**
   * @remarks
   * The push selector.
   * 
   * @example
   * PARAM_TRANSFORMER
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
   * The creation timestamp of the rule.
   * 
   * @example
   * 1607071602000
   */
  createdTimestamp?: number;
  /**
   * @remarks
   * The description of the rule.
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
   * The event pattern in JSON format. The following modes are supported:
   * 
   * - **stringEqual mode**: In the map structure, each field can contain up to five expressions.
   * 
   * - **stringExpression mode**: In the map structure, each field can contain up to five expressions.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The ARN of the rule.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/myRule3
   */
  ruleARN?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ramrolechange-fc
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **ENABLE**: The rule is enabled. This is the default.
   * 
   * - **DISABLE**: The rule is disabled.
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The list of event targets.
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
   * The response code. Valid values:
   * 
   * - **Success**: The request was successful.
   * 
   * - **Other values**: The request returned an error code. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetRuleResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The event rule not existed!
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID generated by Alibaba Cloud.
   * 
   * @example
   * 2BC1857D-E633-5E79-B2C2-43EF5F7730D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. A value of `true` indicates success.
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

