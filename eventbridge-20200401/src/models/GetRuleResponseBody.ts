// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyDataTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The concurrency.
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
   * The Alibaba Cloud Resource Name (ARN) of the queried dead-letter queue.
   * 
   * @example
   * acs:eventbridge:cn-hangzhou:164901546557****:eventbus/my-event-bus/eventsource/myRocketMQ.source
   */
  arn?: string;
  /**
   * @remarks
   * The network type of the dead-letter queue.
   * 
   * @example
   * PrivateNetwork
   */
  network?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2v****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch IDs.
   * 
   * @example
   * vsw-m5e****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC where the dead-letter queue resides.
   * 
   * @example
   * vpc-2z****
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
   * The resource parameter of the event target. For more information, see [Limits](https://help.aliyun.com/document_detail/163289.html).
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The style of the event target parameter template.
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
   * The concurrency configuration.
   */
  concurrentConfig?: GetRuleResponseBodyDataTargetsConcurrentConfig;
  /**
   * @remarks
   * The dead-letter queue.
   */
  deadLetterQueue?: GetRuleResponseBodyDataTargetsDeadLetterQueue;
  /**
   * @remarks
   * The detailed information.
   */
  detailMap?: { [key: string]: any };
  /**
   * @remarks
   * The endpoint URL for delivery.
   * 
   * @example
   * acs:mns:cn-hangzhou:123456789098****:queues/myqueue
   */
  endpoint?: string;
  /**
   * @remarks
   * The fault tolerance strategy. Valid values:
   * 
   * - **ALL**: Allows fault tolerance. When an exception occurs, the execution is not blocked. If the retry strategy is exhausted, the message is delivered to the dead-letter queue or discarded based on the configuration.
   * - **NONE**: Disables fault tolerance. When an exception occurs and the retry strategy is exhausted, the execution is blocked.
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
   * The push retry policy. Valid values:
   * 
   * - **BACKOFF_RETRY**: The backoff retry policy. The system retries three times. The interval between two consecutive retries is a random value between 10 seconds and 20 seconds.
   * - **EXPONENTIAL_DECAY_RETRY**: The exponential decay retry. The system retries 176 times. The interval between two consecutive retries exponentially increments up to 512 seconds. The total retry time is one day. The specific intervals are 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, and 512 seconds (167 intervals of 512 seconds).
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
   * The creation timestamp.
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
   * The event pattern in JSON format. The following rules apply:
   * 
   * - **stringEqual mode**: A maximum of five expressions are allowed for each field (map structure).
   * - **stringExpression mode**: A maximum of five expressions are allowed for each field (map structure).
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
   * - **ENABLE**: The rule is enabled. This is the default status.
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
   * - **Success**: The request is successful.
   * - **Other values**: The error code. For more information, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
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
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 2BC1857D-E633-5E79-B2C2-43EF5F7730D8
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

