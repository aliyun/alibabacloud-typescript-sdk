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

export class ListRulesResponseBodyDataRules extends $dara.Model {
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
   * The rule description.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The details of the event rule.
   */
  detailMap?: { [key: string]: any };
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
   * The event pattern, in JSON format. Valid values:
   * 
   * *   **stringEqual**: Up to five expressions in the map data structure can be specified in each field.
   * *   **stringExpression**: Up to five expressions in the map data structure can be specified in each field.
   * 
   * @example
   * {\\"source\\":[\\"acs.oss\\"],\\"type\\":[\\"oss:BucketQueried:GetBucketStat\\"]}
   */
  filterPattern?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the rule.
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
   * tf-testacc-rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the event rule. Valid values:
   * 
   * *   **ENABLE** (default)
   * *   **DISABLE**
   * 
   * @example
   * ENABLE
   */
  status?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: ListRulesResponseBodyDataRulesTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
      detailMap: 'DetailMap',
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
      detailMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRulesTargets },
    };
  }

  validate() {
    if(this.detailMap) {
      $dara.Model.validateMap(this.detailMap);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The event rules.
   */
  rules?: ListRulesResponseBodyDataRules[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      rules: 'Rules',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRules },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * *   **Success**: The request was successful.
   * *   **Other codes**: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRulesResponseBodyData;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * Specified parameter Limit is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7043799-F4DA-5290-9249-97C359876D97
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
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
      data: ListRulesResponseBodyData,
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

