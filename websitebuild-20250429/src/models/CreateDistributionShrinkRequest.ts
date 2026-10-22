// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDistributionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The article ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 28733
   */
  articleId?: string;
  /**
   * @remarks
   * The list of selected channels.
   * 
   * This parameter is required.
   */
  channelsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'ArticleId',
      channelsShrink: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      channelsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

