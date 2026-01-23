// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  recordsShrink?: string;
  /**
   * @example
   * 7
   */
  shardId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      recordsShrink: 'Records',
      shardId: 'ShardId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      recordsShrink: 'string',
      shardId: 'string',
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

