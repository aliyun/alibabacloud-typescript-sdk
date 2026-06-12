// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topic description.
   * 
   * @example
   * test_comment
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1724041098000
   */
  createTime?: string;
  /**
   * @remarks
   * The topic creator.
   * 
   * @example
   * 1397493986831962
   */
  creator?: string;
  /**
   * @remarks
   * Indicates whether multiple versions are supported.
   * 
   * @example
   * false
   */
  enableSchemaRegistry?: boolean;
  /**
   * @remarks
   * Indicates whether the extended mode is enabled.
   * 
   * @example
   * true
   */
  expandMode?: boolean;
  /**
   * @remarks
   * The lifecycle.
   * 
   * @example
   * 3
   */
  lifecycle?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The data schema for the TUPLE type.
   * 
   * @example
   * [{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"str\\"},{\\"Type\\":\\"STRING\\",\\"AllowNull\\":true,\\"Name\\":\\"dt\\"}]
   */
  recordSchema?: string;
  /**
   * @remarks
   * The topic type.
   * 
   * @example
   * TUPLE
   */
  recordType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A20A7093-8FE0-058C-BE0C-3C8057D5F1A1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 3
   */
  shardCount?: number;
  /**
   * @remarks
   * The total storage of the topic.
   * 
   * @example
   * 12252454
   */
  storage?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  /**
   * @remarks
   * The last update time.
   * 
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

