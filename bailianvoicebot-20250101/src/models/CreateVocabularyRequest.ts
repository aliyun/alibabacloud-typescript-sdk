// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVocabularyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian business workspace.
   * 
   * @example
   * llm-baployoyopf22m2r
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Contains financial industry terminology
   */
  description?: string;
  /**
   * @remarks
   * The name of the hot word list.
   * 
   * @example
   * Financial industry hot words
   */
  name?: string;
  /**
   * @remarks
   * The hot word list.
   */
  words?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      name: 'Name',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      name: 'string',
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

