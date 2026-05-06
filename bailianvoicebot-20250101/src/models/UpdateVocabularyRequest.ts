// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVocabularyRequest extends $dara.Model {
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  description?: string;
  name?: string;
  /**
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4061
   */
  vocabularyId?: string;
  words?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      name: 'Name',
      vocabularyId: 'VocabularyId',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      words: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.words) {
      $dara.Model.validateMap(this.words);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

