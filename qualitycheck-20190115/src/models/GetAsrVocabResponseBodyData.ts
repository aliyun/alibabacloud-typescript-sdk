// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAsrVocabResponseBodyDataWords } from "./GetAsrVocabResponseBodyDataWords";


export class GetAsrVocabResponseBodyData extends $dara.Model {
  asrVersion?: number;
  modelCustomizationId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  words?: GetAsrVocabResponseBodyDataWords;
  static names(): { [key: string]: string } {
    return {
      asrVersion: 'AsrVersion',
      modelCustomizationId: 'ModelCustomizationId',
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVersion: 'number',
      modelCustomizationId: 'string',
      name: 'string',
      words: GetAsrVocabResponseBodyDataWords,
    };
  }

  validate() {
    if(this.words && typeof (this.words as any).validate === 'function') {
      (this.words as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

