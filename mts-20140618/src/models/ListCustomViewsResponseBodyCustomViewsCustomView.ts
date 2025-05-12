// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomViewsResponseBodyCustomViewsCustomView extends $dara.Model {
  /**
   * @example
   * 1
   */
  customViewId?: string;
  /**
   * @example
   * http://``127.66.**.**``/photo.jpeg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      customViewId: 'CustomViewId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customViewId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

