// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVocabularyRequest extends $dara.Model {
  description?: string;
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4061
   */
  vocabularyId?: string;
  words?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      vocabularyId: 'VocabularyId',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
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

