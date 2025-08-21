// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubscriptionAlbumCategoryRequest extends $dara.Model {
  /**
   * @example
   * 儿歌
   */
  categoryName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

