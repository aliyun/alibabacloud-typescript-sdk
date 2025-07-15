// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicListResponseBodyTopicListTopicVOTagsTagVO extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetTopicListResponseBodyTopicListTopicVOTags extends $dara.Model {
  tagVO?: GetTopicListResponseBodyTopicListTopicVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVOTagsTagVO },
    };
  }

  validate() {
    if(Array.isArray(this.tagVO)) {
      $dara.Model.validateArray(this.tagVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicListTopicVO extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the topic was automatically created.
   * 
   * @example
   * false
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The log cleanup policy for the topic. This parameter is returned only if **LocalTopic** is set to **true**. Valid values:
   * 
   * *   false: the default log cleanup policy.
   * *   true: the Apache Kafka log compaction policy.
   * 
   * @example
   * false
   */
  compactTopic?: boolean;
  /**
   * @remarks
   * The timestamp that indicates when the topic was created. Unit: milliseconds.
   * 
   * @example
   * 1576563109000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * alikafka_pre-cn-0pp1954n****
   */
  instanceId?: string;
  /**
   * @remarks
   * The storage type that is used for the topic. Valid values:
   * 
   * *   false: cloud storage
   * *   true: local storage
   * 
   * @example
   * false
   */
  localTopic?: boolean;
  /**
   * @remarks
   * The number of partitions in the topic.
   * 
   * @example
   * 6
   */
  partitionNum?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The topic description. Valid values:
   * 
   * *   The description can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The description must be 3 to 64 characters in length.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The topic status. Valid value:
   * 
   * **0**: running.
   * 
   * If the topic is deleted, this parameter is not returned.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The topic status. Valid value:
   * 
   * **Running**.
   * 
   * If the topic is deleted, this parameter is not returned.
   * 
   * @example
   * Running
   */
  statusName?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetTopicListResponseBodyTopicListTopicVOTags;
  /**
   * @remarks
   * The topic name. Valid values:
   * 
   * *   The name can contain only letters, digits, hyphens (-), and underscores (_).
   * *   The name must be 3 to 64 characters in length. If the name contains more than 64 characters, the system automatically truncates the name.
   * 
   * @example
   * topic_name
   */
  topic?: string;
  /**
   * @remarks
   * The topic configuration.
   * 
   * @example
   * {"replication-factor":3}
   */
  topicConfig?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      compactTopic: 'CompactTopic',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      localTopic: 'LocalTopic',
      partitionNum: 'PartitionNum',
      regionId: 'RegionId',
      remark: 'Remark',
      status: 'Status',
      statusName: 'StatusName',
      tags: 'Tags',
      topic: 'Topic',
      topicConfig: 'TopicConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      compactTopic: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      localTopic: 'boolean',
      partitionNum: 'number',
      regionId: 'string',
      remark: 'string',
      status: 'number',
      statusName: 'string',
      tags: GetTopicListResponseBodyTopicListTopicVOTags,
      topic: 'string',
      topicConfig: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBodyTopicList extends $dara.Model {
  topicVO?: GetTopicListResponseBodyTopicListTopicVO[];
  static names(): { [key: string]: string } {
    return {
      topicVO: 'TopicVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVO },
    };
  }

  validate() {
    if(Array.isArray(this.topicVO)) {
      $dara.Model.validateArray(this.topicVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned. The HTTP status code 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * operation success.
   */
  message?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C0D3DC5B-5C37-47AD-9F22-1F559880****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The topics.
   */
  topicList?: GetTopicListResponseBodyTopicList;
  /**
   * @remarks
   * The number of topics.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      topicList: 'TopicList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      topicList: GetTopicListResponseBodyTopicList,
      total: 'number',
    };
  }

  validate() {
    if(this.topicList && typeof (this.topicList as any).validate === 'function') {
      (this.topicList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

