// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudNotePhrasesRequestPhraseWordWeights extends $dara.Model {
  /**
   * @remarks
   * The weight. The value must be an integer in the range of [-6, 5].
   * - A value greater than 0 increases the probability of recognizing the word, and a value less than 0 decreases the probability.
   * - A value of -6 indicates that the word should not be recognized if possible.
   * - A value of 2 is a common value.
   * If the effect is not obvious, you can increase the weight. However, a large weight may cause negative effects and lead to inaccurate recognition of other words.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  weight?: number;
  /**
   * @remarks
   * The hotword.
   * 
   * This parameter is required.
   * 
   * @example
   * Apple
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      weight: 'number',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudNotePhrasesRequestPhrase extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be encoded in UTF-8 and be 1 to 200 characters in length.
   * 
   * @example
   * Fruit description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the hotword table.
   * 
   * This parameter is required.
   * 
   * @example
   * 1qasw23ezcsrfsawq
   */
  id?: string;
  /**
   * @remarks
   * The name of the hotword table. The name must be encoded in UTF-8 and be 1 to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Fruit
   */
  name?: string;
  /**
   * @remarks
   * Each vocabulary can contain up to 300 hotwords. Each hotword can be up to 10 Chinese characters or 5 English words in length.
   * 
   * Hotwords must be encoded in UTF-8 and cannot contain punctuation marks or special characters. Otherwise, the hotwords do not take effect.
   * 
   * The weight of a hotword must be an integer in the range of [-6, 5].
   * 
   * Numbers in the text must be replaced with the corresponding Chinese characters based on their pronunciation. For example, \"59.9元\" must be replaced with \"五十九点九元\".
   * 
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

export class ModifyCloudNotePhrasesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query it in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * The hotword parameter.
   * 
   * This parameter is required.
   */
  phrase?: ModifyCloudNotePhrasesRequestPhrase;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      phrase: ModifyCloudNotePhrasesRequestPhrase,
    };
  }

  validate() {
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

