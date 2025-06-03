// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCloudNotePhrasesRequestPhraseWordWeights } from "./CreateCloudNotePhrasesRequestPhraseWordWeights";


export class CreateCloudNotePhrasesRequestPhrase extends $dara.Model {
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
   * 水果
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wordWeights?: CreateCloudNotePhrasesRequestPhraseWordWeights[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      wordWeights: 'WordWeights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      wordWeights: { 'type': 'array', 'itemType': CreateCloudNotePhrasesRequestPhraseWordWeights },
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

