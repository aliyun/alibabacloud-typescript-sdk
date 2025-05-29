// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The count of embedding entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: number;
  /**
   * @remarks
   * The number of tokens that are used for vectorization.
   * 
   * >  A token is the minimum unit for splitting text. A token can be a word, phrase, punctuation, or character.
   * 
   * @example
   * 475
   */
  embeddingTokens?: number;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'number',
      embeddingTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

