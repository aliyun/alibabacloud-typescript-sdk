// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTopicListResponseBodyTopicListTopicVOTagsTagVO } from "./GetTopicListResponseBodyTopicListTopicVotagsTagVo";


export class GetTopicListResponseBodyTopicListTopicVOTags extends $dara.Model {
  tagVO?: GetTopicListResponseBodyTopicListTopicVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetTopicListResponseBodyTopicListTopicVOTagsTagVO },
    };
  }

  validate() {
    if(Array.isArray(this.tagVO)) {
      $dara.Model.validateArray(this.tagVO);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

