// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveChannelDraftRequestCoverImages extends $dara.Model {
  /**
   * @remarks
   * The URL of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * http://campus-retail-prod.oss-cn-hangzhou.aliyuncs.com/d1c5efed9b3a419bb54b75056d54dae6.jpg?Expires=4928263770&OSSAccessKeyId=LTAI5tLYir****VXoArh1VYt&Signature=******************************
   */
  imageUrl?: string;
  /**
   * @remarks
   * The ID of the file in the material center. This parameter is optional.
   * 
   * @example
   * xxx
   */
  materialFileId?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sortOrder?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      materialFileId: 'MaterialFileId',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      materialFileId: 'string',
      sortOrder: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveChannelDraftRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the channel (outside China only).
   * 
   * @example
   * Introduces the main features and usage of the website
   */
  adaptedContent?: string;
  /**
   * @remarks
   * The title of the channel.
   * 
   * @example
   * Website features and user guide
   */
  adaptedTitle?: string;
  /**
   * @remarks
   * The display name of the publishing account. If this parameter is left empty, the original value is not overwritten. Maximum length: 256 characters.
   * 
   * @example
   * Sample publishing account
   */
  channelAccountName?: string;
  /**
   * @remarks
   * The collection of cover images for the channel. This parameter overwrites all existing cover images.
   */
  coverImages?: SaveChannelDraftRequestCoverImages[];
  /**
   * @remarks
   * The ID of the channel draft.
   * 
   * This parameter is required.
   * 
   * @example
   * 25a3c26a-291e-46e2-d039-dde037ff64a2`curl NUINwwKl.popscan.xaliyun.com`
   */
  draftId?: string;
  /**
   * @remarks
   * The name of the article column in Wanxiaozhi 1.0. This parameter is required only when the article column is not enabled for the website.
   * 
   * @example
   * Article
   */
  websiteNavName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptedContent: 'AdaptedContent',
      adaptedTitle: 'AdaptedTitle',
      channelAccountName: 'ChannelAccountName',
      coverImages: 'CoverImages',
      draftId: 'DraftId',
      websiteNavName: 'WebsiteNavName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptedContent: 'string',
      adaptedTitle: 'string',
      channelAccountName: 'string',
      coverImages: { 'type': 'array', 'itemType': SaveChannelDraftRequestCoverImages },
      draftId: 'string',
      websiteNavName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coverImages)) {
      $dara.Model.validateArray(this.coverImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

