// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVocabularyRequest extends $dara.Model {
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66b
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

