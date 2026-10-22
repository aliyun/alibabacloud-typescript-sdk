// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDistributionRequest extends $dara.Model {
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
  channels?: string[];
  static names(): { [key: string]: string } {
    return {
      articleId: 'ArticleId',
      channels: 'Channels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      channels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

