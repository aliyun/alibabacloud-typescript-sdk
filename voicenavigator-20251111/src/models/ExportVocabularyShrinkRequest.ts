// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVocabularyShrinkRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  vocabularyIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vocabularyIdsShrink: 'VocabularyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

