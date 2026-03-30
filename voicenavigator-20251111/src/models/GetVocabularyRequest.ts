// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVocabularyRequest extends $dara.Model {
  /**
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4060
   */
  instanceId?: string;
  /**
   * @example
   * d74d6290-7cbe-4436-b5d7-014ebb0f4061
   */
  vocabularyId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      vocabularyId: 'VocabularyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

