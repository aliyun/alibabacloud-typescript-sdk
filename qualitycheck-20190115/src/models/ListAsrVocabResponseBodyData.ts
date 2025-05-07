// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAsrVocabResponseBodyDataAsrVocab } from "./ListAsrVocabResponseBodyDataAsrVocab";


export class ListAsrVocabResponseBodyData extends $dara.Model {
  asrVocab?: ListAsrVocabResponseBodyDataAsrVocab[];
  static names(): { [key: string]: string } {
    return {
      asrVocab: 'AsrVocab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrVocab: { 'type': 'array', 'itemType': ListAsrVocabResponseBodyDataAsrVocab },
    };
  }

  validate() {
    if(Array.isArray(this.asrVocab)) {
      $dara.Model.validateArray(this.asrVocab);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

