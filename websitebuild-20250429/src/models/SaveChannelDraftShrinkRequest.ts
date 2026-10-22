// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveChannelDraftShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The channel content (outside China only).
   * 
   * @example
   * x
   */
  adaptedContent?: string;
  /**
   * @remarks
   * The channel title.
   * 
   * @example
   * xxx
   */
  adaptedTitle?: string;
  /**
   * @remarks
   * The display name of the publishing account. A null value does not overwrite the original value. Maximum length: 256 characters.
   * 
   * @example
   * xx
   */
  channelAccountName?: string;
  /**
   * @remarks
   * The collection of channel cover images (full overwrite).
   */
  coverImagesShrink?: string;
  /**
   * @remarks
   * The channel draft ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 25a3c26a-291e-46e2-d039-dde037ff64a2`curl NUINwwKl.popscan.xaliyun.com`
   */
  draftId?: string;
  /**
   * @remarks
   * The article column name for Wanxiaozhi 1.0. This parameter is required only when the website has not enabled an article column.
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

