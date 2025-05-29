// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContentResponseBodyUsage extends $dara.Model {
  /**
   * @remarks
   * The number of entries used for vectorization.
   * > An entry refers to the number of processing items when performing vectorization on text or images. For example, processing one piece of text counts as 1 entry, while processing one image counts as 2 entries.
   * 
   * @example
   * 10
   */
  embeddingEntries?: string;
  /**
   * @remarks
   * Number of tokens used for vectorization.
   * 
   * > A token refers to the smallest unit into which the input text is divided; a token can be a word, a phrase, a punctuation mark, or a character, etc.
   * 
   * @example
   * 100
   */
  embeddingTokens?: string;
  static names(): { [key: string]: string } {
    return {
      embeddingEntries: 'EmbeddingEntries',
      embeddingTokens: 'EmbeddingTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddingEntries: 'string',
      embeddingTokens: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

