// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVocabResponseBodyDataWordWeightList extends $dara.Model {
  /**
   * @example
   * 1
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

