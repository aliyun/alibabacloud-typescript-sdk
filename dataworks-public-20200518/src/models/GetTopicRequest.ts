// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the event. You can call [listTopics](https://help.aliyun.com/document_detail/173973.html) to obtain the ID.
   * 
   * The documentation example is for format demonstration only. Valid TopicId values can be obtained from Data.Topics[].TopicId in the ListTopics response.
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

