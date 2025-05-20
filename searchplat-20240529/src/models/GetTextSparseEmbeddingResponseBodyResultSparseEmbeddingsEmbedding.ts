// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextSparseEmbeddingResponseBodyResultSparseEmbeddingsEmbedding extends $dara.Model {
  token?: string;
  tokenId?: number;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      tokenId: 'token_id',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      tokenId: 'number',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

