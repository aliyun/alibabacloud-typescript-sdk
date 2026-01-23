// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @example
   * 7
   */
  shardId?: string;
  /**
   * @example
   * 1769065251123
   */
  startTime?: number;
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
      shardId: 'ShardId',
      startTime: 'StartTime',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      shardId: 'string',
      startTime: 'number',
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

