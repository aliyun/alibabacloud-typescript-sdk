// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID. You can call the [ListTopics](https://help.aliyun.com/document_detail/173973.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  topicId?: number;
  static names(): { [key: string]: string } {
    return {
      topicId: 'TopicId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

