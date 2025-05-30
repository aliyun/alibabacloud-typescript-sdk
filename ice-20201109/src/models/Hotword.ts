// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranspositionResult } from "./TranspositionResult";


export class Hotword extends $dara.Model {
  /**
   * @example
   * en
   */
  language?: string;
  /**
   * @example
   * hello
   */
  text?: string;
  transpositionResultList?: TranspositionResult[];
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      text: 'Text',
      transpositionResultList: 'TranspositionResultList',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      text: 'string',
      transpositionResultList: { 'type': 'array', 'itemType': TranspositionResult },
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.transpositionResultList)) {
      $dara.Model.validateArray(this.transpositionResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

