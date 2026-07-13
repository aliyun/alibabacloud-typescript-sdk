// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventMatchRule } from "./EventMatchRule";


export class ListEventRulesResponseBodyDataPageDataEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - **topic**: A topic can deliver messages to multiple subscribers. You can add or remove subscribers later.
   * 
   * - **queue**: Messages are delivered directly to a queue. This simplifies the delivery path, but you cannot add new subscribers later.
   * 
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @remarks
   * The actual value of the endpoint.
   * 
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
   * @remarks
   * The endpoint type.
   * 
   * @example
   * queue
   */
  endpointType?: string;
  /**
   * @remarks
   * The actual value of the endpoint.
   * 
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
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * --
   */
  deliveryMode?: string;
  /**
   * @remarks
   * The endpoint of the subscription.
   */
  endpoint?: ListEventRulesResponseBodyDataPageDataEndpoint;
  /**
   * @remarks
   * The list of event types.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The event matching rules. The rules have an OR relationship.
   */
  matchRules?: EventMatchRule[][];
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  /**
   * @remarks
   * The subscribers. A maximum of 20 entries are returned. If there are more subscribers, see [List Subscriptions](https://help.aliyun.com/document_detail/2804757.html).
   */
  subscriptions?: ListEventRulesResponseBodyDataPageDataSubscriptions[];
  /**
   * @remarks
   * The name of the topic.
   * 
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
   * @remarks
   * This parameter is deprecated. The maximum number of entries is based on Total.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is deprecated. Paged queries are based on PageNum.
   * 
   * @example
   * a88f58d504b8b4c4e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @remarks
   * The data entries.
   */
  pageData?: ListEventRulesResponseBodyDataPageData[];
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 3
   */
  pages?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: ListEventRulesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123E62C
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the response.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

