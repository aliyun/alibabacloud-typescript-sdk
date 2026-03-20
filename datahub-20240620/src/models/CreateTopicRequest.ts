// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Test
   */
  comment?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  enableSchemaRegistry?: boolean;
  /**
   * @example
   * true
   */
  expandMode?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  lifecycle?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xiaowutest
   */
  projectName?: string;
  /**
   * @example
   * "{\\"fields\\":[{\\"name\\":\\"field_init\\",\\"type\\":\\"STRING\\",\\"notnull\\":\\"false\\"}]}"
   */
  recordSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TUPLE
   */
  recordType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  shardCount?: number;
  /**
   * @remarks
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

