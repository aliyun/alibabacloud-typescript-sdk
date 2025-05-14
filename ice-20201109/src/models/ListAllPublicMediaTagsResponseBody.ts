// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllPublicMediaTagsResponseBodyMediaTagList } from "./ListAllPublicMediaTagsResponseBodyMediaTagList";


export class ListAllPublicMediaTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tags of media assets in the public media library.
   */
  mediaTagList?: ListAllPublicMediaTagsResponseBodyMediaTagList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B45F83B7-7F87-4792-BFE9-63CD2137CAF0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaTagList: 'MediaTagList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagList: { 'type': 'array', 'itemType': ListAllPublicMediaTagsResponseBodyMediaTagList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaTagList)) {
      $dara.Model.validateArray(this.mediaTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

