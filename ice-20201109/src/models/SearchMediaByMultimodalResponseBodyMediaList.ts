// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByMultimodalResponseBodyMediaListClipInfo } from "./SearchMediaByMultimodalResponseBodyMediaListClipInfo";


export class SearchMediaByMultimodalResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The information about the clip.
   */
  clipInfo?: SearchMediaByMultimodalResponseBodyMediaListClipInfo[];
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * a18936e0e28771edb59ae6f6f47a****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      clipInfo: 'ClipInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfo: { 'type': 'array', 'itemType': SearchMediaByMultimodalResponseBodyMediaListClipInfo },
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clipInfo)) {
      $dara.Model.validateArray(this.clipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

