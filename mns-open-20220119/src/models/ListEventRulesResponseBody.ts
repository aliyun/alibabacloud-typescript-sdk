// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventMatchRule } from "./EventMatchRule";


export class ListEventRulesResponseBodyDataPageDataEndpoint extends $dara.Model {
  /**
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @example
   * test-topic
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

export class ListEventRulesResponseBodyDataPageDataSubscriptions extends $dara.Model {
  /**
   * @example
   * queue
   */
  endpointType?: string;
  /**
   * @example
   * wyx-vp-complete-queue
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

export class ListEventRulesResponseBodyDataPageData extends $dara.Model {
  /**
   * @example
   * --
   */
  deliveryMode?: string;
  endpoint?: ListEventRulesResponseBodyDataPageDataEndpoint;
  eventTypes?: string[];
  matchRules?: EventMatchRule[][];
  /**
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  subscriptions?: ListEventRulesResponseBodyDataPageDataSubscriptions[];
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
      endpoint: ListEventRulesResponseBodyDataPageDataEndpoint,
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': EventMatchRule } },
      ruleName: 'string',
      subscriptions: { 'type': 'array', 'itemType': ListEventRulesResponseBodyDataPageDataSubscriptions },
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

export class ListEventRulesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * a88f58d504b8b4c4e0b5e8707e68181f
   */
  nextToken?: string;
  pageData?: ListEventRulesResponseBodyDataPageData[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 3
   */
  pages?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * 130
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageData: { 'type': 'array', 'itemType': ListEventRulesResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageData)) {
      $dara.Model.validateArray(this.pageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: ListEventRulesResponseBodyData;
  /**
   * @example
   * operation success
   */
  message?: string;
  /**
   * @example
   * 06273500-249F-5863-121D-74D51123E62C
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListEventRulesResponseBodyData,
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

