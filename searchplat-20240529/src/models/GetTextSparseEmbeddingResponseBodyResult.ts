// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings } from "./GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings";


export class GetTextSparseEmbeddingResponseBodyResult extends $dara.Model {
  sparseEmbeddings?: GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      sparseEmbeddings: 'sparse_embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sparseEmbeddings: { 'type': 'array', 'itemType': GetTextSparseEmbeddingResponseBodyResultSparseEmbeddings },
    };
  }

  validate() {
    if(Array.isArray(this.sparseEmbeddings)) {
      $dara.Model.validateArray(this.sparseEmbeddings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

