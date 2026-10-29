// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetsResponseBodyDataTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent events allowed in the event target.
   * 
   * @example
   * 10
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

export class ListTargetsResponseBodyDataTargetsParamList extends $dara.Model {
  /**
   * @remarks
   * The format that is used by the event target parameter.
   * 
   * @example
   * TEMPLATE
   */
  form?: string;
  /**
   * @remarks
   * The resource parameter of the event target.
   * 
   * @example
   * body
   */
  resourceKey?: string;
  /**
   * @remarks
   * The template that is used by the event target parameter.
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

export class ListTargetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The event targets.
   */
  targets?: ListTargetsResponseBodyDataTargets[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 18
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      targets: 'Targets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsResponseBodyDataTargets },
      total: 'number',
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

export class ListTargetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For a list of error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTargetsResponseBodyData;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventRuleNotExisted
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5DAF96FB-A4B6-548C-B999-0BFDCB2261B9
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true
   * *   false
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
      data: ListTargetsResponseBodyData,
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

