// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageBatchModerationResponseBodyDataResultsExtTextInImageCustomText extends $dara.Model {
  /**
   * @remarks
   * Custom words, separate multiple words with commas.
   * 
   * @example
   * Custom Word 1  and  Custom Word 2
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
   * Custom Library 1
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

