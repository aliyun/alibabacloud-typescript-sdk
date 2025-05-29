// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TextEmbeddingResponseBodyResultsResultsEmbedding } from "./TextEmbeddingResponseBodyResultsResultsEmbedding";


export class TextEmbeddingResponseBodyResultsResults extends $dara.Model {
  embedding?: TextEmbeddingResponseBodyResultsResultsEmbedding;
  /**
   * @example
   * 0
   */
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'Embedding',
      index: 'Index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: TextEmbeddingResponseBodyResultsResultsEmbedding,
      index: 'number',
    };
  }

  validate() {
    if(this.embedding && typeof (this.embedding as any).validate === 'function') {
      (this.embedding as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

