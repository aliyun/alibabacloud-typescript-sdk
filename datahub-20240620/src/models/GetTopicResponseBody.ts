// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBody extends $dara.Model {
  /**
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @example
   * 1397493986831962
   */
  creator?: string;
  /**
   * @example
   * false
   */
  enableSchemaRegistry?: boolean;
  /**
   * @example
   * true
   */
  expandMode?: boolean;
  /**
   * @example
   * 3
   */
  lifecycle?: number;
  /**
   * @example
   * test_project
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
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  shardCount?: number;
  /**
   * @example
   * 12252454
   */
  storage?: number;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @example
   * 1724041098000
   */
  updateTime?: string;
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
      requestId: 'RequestId',
      shardCount: 'ShardCount',
      storage: 'Storage',
      success: 'Success',
      topicName: 'TopicName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      creator: 'string',
      enableSchemaRegistry: 'boolean',
      expandMode: 'boolean',
      lifecycle: 'number',
      projectName: 'string',
      recordSchema: 'string',
      recordType: 'string',
      requestId: 'string',
      shardCount: 'number',
      storage: 'number',
      success: 'boolean',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

