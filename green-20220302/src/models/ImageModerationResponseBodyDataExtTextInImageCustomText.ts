// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageModerationResponseBodyDataExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * Custom words, multiple words separated by commas.
   * 
   * @example
   * aaa,bbb
   */
  keyWords?: string;
  /**
   * @remarks
   * Custom library ID.
   * 
   * @example
   * 123456
   */
  libId?: string;
  /**
   * @remarks
   * Custom library name.
   * 
   * @example
   * xxxx
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libId: 'LibId',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
      libId: 'string',
      libName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

