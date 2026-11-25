// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveChannelDraftShrinkRequest extends $dara.Model {
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
  coverImagesShrink?: string;
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
      coverImagesShrink: 'CoverImages',
      draftId: 'DraftId',
      websiteNavName: 'WebsiteNavName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptedContent: 'string',
      adaptedTitle: 'string',
      channelAccountName: 'string',
      coverImagesShrink: 'string',
      draftId: 'string',
      websiteNavName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

