// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicResponseBodyDataPageDataTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyDataPageData extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554962
   */
  createTime?: number;
  enableSSE?: boolean;
  encryptionEnabled?: boolean;
  kmsKeyId?: string;
  /**
   * @remarks
   * The time when the subscription attributes were last modified. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1449554962
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * Indicates whether the Log Management feature is enabled. Valid values:
   * 
   * - True: Enabled.
   * 
   * - False: Disabled.
   * 
   * @example
   * True
   */
  loggingEnabled?: boolean;
  /**
   * @remarks
   * The maximum length of the message body sent to the topic. Unit: bytes.
   * 
   * @example
   * 65536
   */
  maxMessageSize?: number;
  /**
   * @remarks
   * The number of messages in the topic.
   * 
   * @example
   * 0
   */
  messageCount?: number;
  /**
   * @remarks
   * The maximum duration for which a message is retained in the topic. After the time specified by this parameter elapses since the message is sent to the topic, the message is deleted regardless of whether it has been successfully pushed to the user. Unit: seconds.
   * 
   * @example
   * 86400
   */
  messageRetentionPeriod?: number;
  sseAlgorithm?: string;
  sseType?: string;
  /**
   * @remarks
   * The list of resource tags.
   */
  tags?: ListTopicResponseBodyDataPageDataTags[];
  /**
   * @remarks
   * The internal URL of the topic.
   * 
   * @example
   * http:// 111111111****.mns.us-west-1-internal.aliyuncs.com/topics/testTopic
   */
  topicInnerUrl?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * demo-topic
   */
  topicName?: string;
  /**
   * @remarks
   * The type of the topic. Valid values:
   *    * normal: normal topic
   *    * fifo: FIFO topic
   * 
   * @example
   * normal
   */
  topicType?: string;
  /**
   * @remarks
   * The URL of the topic.
   * 
   * @example
   * http:// 111111111****.mns.us-west-1.aliyuncs.com/topics/testTopic
   */
  topicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      enableSSE: 'EnableSSE',
      encryptionEnabled: 'EncryptionEnabled',
      kmsKeyId: 'KmsKeyId',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maxMessageSize: 'MaxMessageSize',
      messageCount: 'MessageCount',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      sseAlgorithm: 'SseAlgorithm',
      sseType: 'SseType',
      tags: 'Tags',
      topicInnerUrl: 'TopicInnerUrl',
      topicName: 'TopicName',
      topicType: 'TopicType',
      topicUrl: 'TopicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      enableSSE: 'boolean',
      encryptionEnabled: 'boolean',
      kmsKeyId: 'string',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maxMessageSize: 'number',
      messageCount: 'number',
      messageRetentionPeriod: 'number',
      sseAlgorithm: 'string',
      sseType: 'string',
      tags: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageDataTags },
      topicInnerUrl: 'string',
      topicName: 'string',
      topicType: 'string',
      topicUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The results returned on the current page.
   */
  pageData?: ListTopicResponseBodyDataPageData[];
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
   * The number of results returned per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of results.
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
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
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

export class ListTopicResponseBody extends $dara.Model {
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
  data?: ListTopicResponseBodyData;
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
      data: ListTopicResponseBodyData,
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

