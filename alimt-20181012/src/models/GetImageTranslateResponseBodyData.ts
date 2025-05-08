// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageTranslateResponseBodyData extends $dara.Model {
  orc?: string;
  pictureEditor?: string;
  /**
   * @example
   * https://ae01.alicdn.com/kf/xxxxx.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      orc: 'Orc',
      pictureEditor: 'PictureEditor',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orc: 'string',
      pictureEditor: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

