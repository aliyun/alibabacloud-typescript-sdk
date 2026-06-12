// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the topic.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to enable multi-version schema. After this feature is enabled, a topic can have multiple schemas. You can select one of the schemas for writing. The consumer automatically parses each record based on the version tag. If the schema for the corresponding version has been deleted, parsing fails.
   * 
   * > Enabling multi-version schema has the following impacts:
   * 1. You can no longer use the appendFields operation.
   *  2. You can create, delete, modify, and query schemas.
   *  3. Connectors are created by using the schema of the latest version.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  enableSchemaRegistry?: boolean;
  /**
   * @remarks
   * The expansion mode of the topic. After the expansion mode is enabled, shards support horizontal scaling and no longer support merge or split operations. The number of shards can only increase and cannot decrease. After this mode is enabled, you can consume the current topic by using Kafka.
   * 
   * @example
   * true
   */
  expandMode?: boolean;
  /**
   * @remarks
   * The lifecycle of the topic. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  lifecycle?: number;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaowutest
   */
  projectName?: string;
  /**
   * @remarks
   * The schema table structure.
   * 
   * @example
   * "{\\"fields\\":[{\\"name\\":\\"field_init\\",\\"type\\":\\"STRING\\",\\"notnull\\":\\"false\\"}]}"
   */
  recordSchema?: string;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * 1. Blob: supports writing a block of binary data as a single record.
   * 
   * 1. Tuple: supports database-like records where each record contains multiple columns. You must specify RecordSchema because data is transmitted over the network as strings and requires a schema to convert the data into the corresponding types.
   * 
   * This parameter is required.
   * 
   * @example
   * TUPLE
   */
  recordType?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  shardCount?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * adsb_cat021
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      enableSchemaRegistry: 'EnableSchemaRegistry',
      expandMode: 'ExpandMode',
      lifecycle: 'Lifecycle',
      projectName: 'ProjectName',
      recordSchema: 'RecordSchema',
      recordType: 'RecordType',
      shardCount: 'ShardCount',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      enableSchemaRegistry: 'boolean',
      expandMode: 'boolean',
      lifecycle: 'number',
      projectName: 'string',
      recordSchema: 'string',
      recordType: 'string',
      shardCount: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

