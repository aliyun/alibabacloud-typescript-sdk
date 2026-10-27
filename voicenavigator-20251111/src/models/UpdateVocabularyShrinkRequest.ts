// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVocabularyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Contains professional terms for finance scenarios
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the hot word.
   * 
   * @example
   * Finance scenario hot words
   */
  name?: string;
  /**
   * @remarks
   * The hot word ID.
   * 
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4061
   */
  vocabularyId?: string;
  /**
   * @remarks
   * The list of hot words.
   */
  wordsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      vocabularyId: 'VocabularyId',
      wordsShrink: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
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

