// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCloudNotePhrasesRequestPhraseWordWeights } from "./ModifyCloudNotePhrasesRequestPhraseWordWeights";


export class ModifyCloudNotePhrasesRequestPhrase extends $dara.Model {
  /**
   * @example
   * 水果描述
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1qasw23ezcsrfsawq
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 水果
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeights?: ModifyCloudNotePhrasesRequestPhraseWordWeights[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      wordWeights: { 'type': 'array', 'itemType': ModifyCloudNotePhrasesRequestPhraseWordWeights },
    };
  }

  validate() {
    if(Array.isArray(this.wordWeights)) {
      $dara.Model.validateArray(this.wordWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

