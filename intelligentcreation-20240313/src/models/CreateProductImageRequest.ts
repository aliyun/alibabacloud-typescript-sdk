// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProductImageRequest extends $dara.Model {
  backgroundDescription?: string;
  /**
   * @example
   * 75
   */
  backgroundPriority?: number;
  /**
   * @example
   * http://xxx/background.png
   */
  backgroundUrl?: string;
  highlightText?: string;
  /**
   * @example
   * 1
   */
  imageCount?: number;
  /**
   * @example
   * http://xxx/image.png
   */
  imageUrl?: string;
  subTitle?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundDescription: 'backgroundDescription',
      backgroundPriority: 'backgroundPriority',
      backgroundUrl: 'backgroundUrl',
      highlightText: 'highlightText',
      imageCount: 'imageCount',
      imageUrl: 'imageUrl',
      subTitle: 'subTitle',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundDescription: 'string',
      backgroundPriority: 'number',
      backgroundUrl: 'string',
      highlightText: 'string',
      imageCount: 'number',
      imageUrl: 'string',
      subTitle: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

