// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVocabularyRequest extends $dara.Model {
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  vocabularyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      vocabularyIds: 'VocabularyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      vocabularyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vocabularyIds)) {
      $dara.Model.validateArray(this.vocabularyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

