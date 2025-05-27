// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicListResponseBodyTopicListTopicVO } from "./GetTopicListResponseBodyTopicListTopicVo";


export class GetTopicListResponseBodyTopicList extends $dara.Model {
  topicVO?: GetTopicListResponseBodyTopicListTopicVO[];
  static names(): { [key: string]: string } {
    return {
      topicVO: 'TopicVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVO },
    };
  }

  validate() {
    if(Array.isArray(this.topicVO)) {
      $dara.Model.validateArray(this.topicVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

