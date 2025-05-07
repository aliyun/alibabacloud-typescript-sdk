// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsrVocabResponseBodyDataWordsWord extends $dara.Model {
  /**
   * @example
   * 0
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

