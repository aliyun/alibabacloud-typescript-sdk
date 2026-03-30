// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVocabularyRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  vocabularyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vocabularyIds: 'VocabularyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

