// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVocabularyShrinkRequest extends $dara.Model {
  /**
   * @example
   * llm-c11iig67g863rih8
   */
  businessUnitId?: string;
  vocabularyIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      vocabularyIdsShrink: 'VocabularyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      vocabularyIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

