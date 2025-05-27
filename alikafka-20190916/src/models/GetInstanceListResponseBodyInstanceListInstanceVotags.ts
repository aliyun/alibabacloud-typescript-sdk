// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO } from "./GetInstanceListResponseBodyInstanceListInstanceVotagsTagVo";


export class GetInstanceListResponseBodyInstanceListInstanceVOTags extends $dara.Model {
  tagVO?: GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO[];
  static names(): { [key: string]: string } {
    return {
      tagVO: 'TagVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagVO: { 'type': 'array', 'itemType': GetInstanceListResponseBodyInstanceListInstanceVOTagsTagVO },
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

