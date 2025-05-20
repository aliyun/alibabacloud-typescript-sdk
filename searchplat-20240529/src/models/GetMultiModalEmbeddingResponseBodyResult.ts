// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMultiModalEmbeddingResponseBodyResultEmbeddings } from "./GetMultiModalEmbeddingResponseBodyResultEmbeddings";


export class GetMultiModalEmbeddingResponseBodyResult extends $dara.Model {
  embeddings?: GetMultiModalEmbeddingResponseBodyResultEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: { 'type': 'array', 'itemType': GetMultiModalEmbeddingResponseBodyResultEmbeddings },
    };
  }

  validate() {
    if(Array.isArray(this.embeddings)) {
      $dara.Model.validateArray(this.embeddings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

