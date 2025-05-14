// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllPublicMediaTagsResponseBodyMediaTagListOptions } from "./ListAllPublicMediaTagsResponseBodyMediaTagListOptions";


export class ListAllPublicMediaTagsResponseBodyMediaTagList extends $dara.Model {
  /**
   * @remarks
   * The ID of the media tag.
   * 
   * @example
   * sticker-gif
   */
  mediaTagId?: string;
  /**
   * @remarks
   * The name of the media tag in Chinese.
   * 
   * @example
   * Gif
   */
  mediaTagNameChinese?: string;
  /**
   * @remarks
   * The name of the material tag in English.
   */
  mediaTagNameEnglish?: string;
  /**
   * @remarks
   * The options.
   */
  options?: ListAllPublicMediaTagsResponseBodyMediaTagListOptions[];
  static names(): { [key: string]: string } {
    return {
      mediaTagId: 'MediaTagId',
      mediaTagNameChinese: 'MediaTagNameChinese',
      mediaTagNameEnglish: 'MediaTagNameEnglish',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaTagId: 'string',
      mediaTagNameChinese: 'string',
      mediaTagNameEnglish: 'string',
      options: { 'type': 'array', 'itemType': ListAllPublicMediaTagsResponseBodyMediaTagListOptions },
    };
  }

  validate() {
    if(Array.isArray(this.options)) {
      $dara.Model.validateArray(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

