// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllPublicMediaTagsResponseBodyMediaTagListOptions extends $dara.Model {
  /**
   * @remarks
   * The Chinese name of the filter option.
   * 
   * @example
   * 愤怒
   */
  optionChineseName?: string;
  /**
   * @remarks
   * The English name of the filter option.
   * 
   * @example
   * Angry
   */
  optionEnglishName?: string;
  /**
   * @remarks
   * The ID of the filter option.
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
   * The ID of the media asset tag.
   * 
   * @example
   * sticker-gif
   */
  mediaTagId?: string;
  /**
   * @remarks
   * The Chinese name of the media asset tag.
   * 
   * @example
   * 动图
   */
  mediaTagNameChinese?: string;
  /**
   * @remarks
   * The English name of the media asset tag.
   * 
   * @example
   * Gif
   */
  mediaTagNameEnglish?: string;
  /**
   * @remarks
   * The list of options.
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
   * The list of tags in the public media asset library.
   */
  mediaTagList?: ListAllPublicMediaTagsResponseBodyMediaTagList[];
  /**
   * @remarks
   * The ID of the request.
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

