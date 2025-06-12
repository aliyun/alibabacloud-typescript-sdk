// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationPlusResponseBodyDataResultCustomizedHit extends $dara.Model {
  /**
   * @remarks
   * The terms that are hit. Multiple terms are separated by commas (,).
   * 
   * @example
   * xxx
   */
  keyWords?: string;
  /**
   * @remarks
   * The library name.
   * 
   * @example
   * test
   */
  libName?: string;
  static names(): { [key: string]: string } {
    return {
      keyWords: 'KeyWords',
      libName: 'LibName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyWords: 'string',
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

