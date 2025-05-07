// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAsrVocabResponseBodyDataWordsWord } from "./GetAsrVocabResponseBodyDataWordsWord";


export class GetAsrVocabResponseBodyDataWords extends $dara.Model {
  word?: GetAsrVocabResponseBodyDataWordsWord[];
  static names(): { [key: string]: string } {
    return {
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      word: { 'type': 'array', 'itemType': GetAsrVocabResponseBodyDataWordsWord },
    };
  }

  validate() {
    if(Array.isArray(this.word)) {
      $dara.Model.validateArray(this.word);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

