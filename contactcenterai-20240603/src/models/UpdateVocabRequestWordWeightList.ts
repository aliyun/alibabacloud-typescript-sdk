// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVocabRequestWordWeightList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   */
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

