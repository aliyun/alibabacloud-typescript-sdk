// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * The topic name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      projectName: 'ProjectName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      projectName: 'string',
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

