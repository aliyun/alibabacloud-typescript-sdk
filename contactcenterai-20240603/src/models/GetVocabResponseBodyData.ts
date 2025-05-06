// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVocabResponseBodyDataWordWeightList } from "./GetVocabResponseBodyDataWordWeightList";


export class GetVocabResponseBodyData extends $dara.Model {
  /**
   * @example
   * nls
   */
  audioModelCode?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * rrbe***jrvrdd
   */
  vocabularyId?: string;
  wordWeightList?: GetVocabResponseBodyDataWordWeightList[];
  static names(): { [key: string]: string } {
    return {
      audioModelCode: 'audioModelCode',
      description: 'description',
      name: 'name',
      vocabularyId: 'vocabularyId',
      wordWeightList: 'wordWeightList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioModelCode: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordWeightList: { 'type': 'array', 'itemType': GetVocabResponseBodyDataWordWeightList },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeightList)) {
      $dara.Model.validateArray(this.wordWeightList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

