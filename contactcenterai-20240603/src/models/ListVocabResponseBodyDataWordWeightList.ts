// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVocabResponseBodyDataWordWeightList extends $dara.Model {
  /**
   * @example
   * 3
   */
  weight?: number;
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'weight',
      word: 'word',
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

