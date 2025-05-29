// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextEmbeddingResponseBodyResultsResultsEmbedding extends $dara.Model {
  embedding?: number[];
  static names(): { [key: string]: string } {
    return {
      embedding: 'Embedding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.embedding)) {
      $dara.Model.validateArray(this.embedding);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

