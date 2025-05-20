// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalEmbeddingResponseBodyResultEmbeddings extends $dara.Model {
  embedding?: number[];
  index?: number;
  static names(): { [key: string]: string } {
    return {
      embedding: 'embedding',
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedding: { 'type': 'array', 'itemType': 'number' },
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

