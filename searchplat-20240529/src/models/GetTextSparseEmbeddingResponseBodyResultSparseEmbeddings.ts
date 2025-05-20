// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding } from "./GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding";


export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings extends $dara.Model {
  embedding?: GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding[];
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'embedding',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding },
      index: 'number',
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

