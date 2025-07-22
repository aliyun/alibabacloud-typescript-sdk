// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudNotePhrasesRequestPhraseWordWeights extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  weight?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 苹果
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

export class ModifyCloudNotePhrasesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
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

