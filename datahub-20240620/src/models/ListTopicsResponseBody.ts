// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTopicsResponseBodyListTopic extends $dara.Model {
  comment?: string;
  /**
   * @example
   * 1753346106000
   */
  createTime?: number;
  /**
   * @example
   * 276887103073464052
   */
  creator?: string;
  /**
   * @example
   * false
   */
  enableSchemaRegistry?: string;
  /**
   * @example
   * true
   */
  expandMode?: string;
  /**
   * @example
   * 3
   */
  lifecycle?: number;
  /**
   * @example
   * poc_test
   */
  projectName?: string;
  /**
   * @example
   * [{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"str\\"},{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"dt\\"}]
   */
  recordSchema?: string;
  /**
   * @example
   * TUPLE
   */
  recordType?: string;
  /**
   * @example
   * 1
   */
  shardCount?: number;
  /**
   * @example
   * 10000
   */
  storage?: number;
  /**
   * @example
   * ods_bio_safety_env_disinfection
   */
  topicName?: string;
  /**
   * @example
   * 1753346106000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      enableSchemaRegistry: 'EnableSchemaRegistry',
      expandMode: 'ExpandMode',
      lifecycle: 'Lifecycle',
      projectName: 'ProjectName',
      recordSchema: 'RecordSchema',
      recordType: 'RecordType',
      shardCount: 'ShardCount',
      storage: 'Storage',
      topicName: 'TopicName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      enableSchemaRegistry: 'string',
      expandMode: 'string',
      lifecycle: 'number',
      projectName: 'string',
      recordSchema: 'string',
      recordType: 'string',
      shardCount: 'number',
      storage: 'number',
      topicName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyList extends $dara.Model {
  topic?: ListTopicsResponseBodyListTopic[];
  static names(): { [key: string]: string } {
    return {
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topic: { 'type': 'array', 'itemType': ListTopicsResponseBodyListTopic },
    };
  }

  validate() {
    if(Array.isArray(this.topic)) {
      $dara.Model.validateArray(this.topic);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $dara.Model {
  list?: ListTopicsResponseBodyList;
  /**
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * 9892074a2a89600ae4b0d5a34fb99a3f
   */
  nextToken?: string;
  /**
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListTopicsResponseBodyList,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

