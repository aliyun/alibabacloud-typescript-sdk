// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO } from "./GetConsumerListResponseBodyConsumerListConsumerVotagsTagVo";


export class GetConsumerListResponseBodyConsumerListConsumerVOTags extends $dara.Model {
  tagVO?: GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetConsumerListResponseBodyConsumerListConsumerVOTagsTagVO },
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

