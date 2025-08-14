// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPublicMediaTagsResponseBodyMediaTagListOptions extends $dara.Model {
  /**
   * @remarks
   * The option name in Chinese.
   */
  optionChineseName?: string;
  /**
   * @remarks
   * The option name in English.
   * 
   * @example
   * Angry
   */
  optionEnglishName?: string;
  /**
   * @remarks
   * The option ID.
   * 
   * @example
   * Angry
   */
  optionId?: string;
  static names(): { [key: string]: string } {
    return {
      optionChineseName: 'OptionChineseName',
      optionEnglishName: 'OptionEnglishName',
      optionId: 'OptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionChineseName: 'string',
      optionEnglishName: 'string',
      optionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

