// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventMatchRule } from "./EventMatchRule";


export class GetEventRuleResponseBodyDataEndpoint extends $dara.Model {
  /**
   * @example
   * queue
   */
  endpointType?: string;
  /**
   * @example
   * retry-queue
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRuleResponseBodyDataSubscriptions extends $dara.Model {
  /**
   * @example
   * queue
   */
  endpointType?: string;
  /**
   * @example
   * retry-queue
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * --
   */
  deliveryMode?: string;
  endpoint?: GetEventRuleResponseBodyDataEndpoint;
  eventTypes?: string[];
  matchRules?: EventMatchRule[][];
  /**
   * @example
   * event-recorder
   */
  ruleName?: string;
  subscriptions?: GetEventRuleResponseBodyDataSubscriptions[];
  /**
   * @example
   * demo-topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryMode: 'DeliveryMode',
      endpoint: 'Endpoint',
      eventTypes: 'EventTypes',
      matchRules: 'MatchRules',
      ruleName: 'RuleName',
      subscriptions: 'Subscriptions',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryMode: 'string',
      endpoint: GetEventRuleResponseBodyDataEndpoint,
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': EventMatchRule } },
      ruleName: 'string',
      subscriptions: { 'type': 'array', 'itemType': GetEventRuleResponseBodyDataSubscriptions },
      topicName: 'string',
    };
  }

  validate() {
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    if(Array.isArray(this.matchRules)) {
      $dara.Model.validateArray(this.matchRules);
    }
    if(Array.isArray(this.subscriptions)) {
      $dara.Model.validateArray(this.subscriptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetEventRuleResponseBodyData;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetEventRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

