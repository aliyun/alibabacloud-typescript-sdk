// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTextEmbeddingResponseBodyResultEmbeddings } from "./GetTextEmbeddingResponseBodyResultEmbeddings";


export class GetTextEmbeddingResponseBodyResult extends $dara.Model {
  embeddings?: GetTextEmbeddingResponseBodyResultEmbeddings[];
  static names(): { [key: string]: string } {
    return {
      embeddings: 'embeddings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embeddings: { 'type': 'array', 'itemType': GetTextEmbeddingResponseBodyResultEmbeddings },
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

