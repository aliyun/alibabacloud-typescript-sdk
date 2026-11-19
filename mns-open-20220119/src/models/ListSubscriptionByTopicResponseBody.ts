// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy extends $dara.Model {
  /**
   * @remarks
   * The destination queue for dead-letter message delivery.
   * 
   * @example
   * dead-letter-queue
   */
  deadLetterTargetQueue?: string;
  /**
   * @remarks
   * Indicates whether dead-letter message delivery is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetQueue: 'DeadLetterTargetQueue',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetQueue: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1449554806
   */
  createTime?: number;
  /**
   * @remarks
   * The dead-letter policy.
   */
  dlqPolicy?: ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy;
  /**
   * @remarks
   * The endpoint address of the subscription.
   * 
   * @example
   * http://example.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The tag used to filter messages in the subscription. Only messages with matching tags are pushed.
   * 
   * @example
   * important
   */
  filterTag?: string;
  /**
   * @remarks
   * The time when the subscription attributes were last modified. The value is a UNIX timestamp representing the number of seconds that have elapsed since 00:00:00 on January 1, 1970.
   * 
   * @example
   * 1449554806
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The format of the message content pushed to the endpoint. Valid values:
   * 
   * - XML
   * 
   * - JSON
   * 
   * - SIMPLIFIED
   * 
   * @example
   * XML
   */
  notifyContentFormat?: string;
  /**
   * @remarks
   * The retry strategy used when a message fails to be pushed to the endpoint. Valid values:
   * 
   * - BACKOFF_RETRY: backoff retry
   * 
   * - EXPONENTIAL_DECAY_RETRY: exponential decay retry
   * 
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  /**
   * @remarks
   * The name of the subscription.
   * 
   * @example
   * MySubscription
   */
  subscriptionName?: string;
  /**
   * @remarks
   * The name of the topic to which the subscription belongs.
   * 
   * @example
   * MyTopic
   */
  topicName?: string;
  /**
   * @remarks
   * The account ID of the topic owner to which the subscription belongs.
   * 
   * @example
   * 123456789098****
   */
  topicOwner?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dlqPolicy: 'DlqPolicy',
      endpoint: 'Endpoint',
      filterTag: 'FilterTag',
      lastModifyTime: 'LastModifyTime',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dlqPolicy: ListSubscriptionByTopicResponseBodyDataPageDataDlqPolicy,
      endpoint: 'string',
      filterTag: 'string',
      lastModifyTime: 'number',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
      topicName: 'string',
      topicOwner: 'string',
    };
  }

  validate() {
    if(this.dlqPolicy && typeof (this.dlqPolicy as any).validate === 'function') {
      (this.dlqPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The results returned on the current page.
   */
  pageData?: ListSubscriptionByTopicResponseBodyDataPageData[];
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
   * The number of entries returned on the current page.
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
      pageData: { 'type': 'array', 'itemType': ListSubscriptionByTopicResponseBodyDataPageData },
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

export class ListSubscriptionByTopicResponseBody extends $dara.Model {
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
  data?: ListSubscriptionByTopicResponseBodyData;
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
   * The ID of the request.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  requestId?: string;
  /**
   * @remarks
   * The response status.
   * 
   * @example
   * Success
   */
  status?: string;
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListSubscriptionByTopicResponseBodyData,
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

