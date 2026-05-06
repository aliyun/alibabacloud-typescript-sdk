// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVocabularyShrinkRequest extends $dara.Model {
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
  wordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      name: 'Name',
      vocabularyId: 'VocabularyId',
      wordsShrink: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      name: 'string',
      vocabularyId: 'string',
      wordsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

