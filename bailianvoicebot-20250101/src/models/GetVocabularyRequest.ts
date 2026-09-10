// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVocabularyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Model Studio business space.
   * 
   * @example
   * llm-zop7ukgtksltamo4
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The hot word vocabulary ID.
   * 
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4061
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      vocabularyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

