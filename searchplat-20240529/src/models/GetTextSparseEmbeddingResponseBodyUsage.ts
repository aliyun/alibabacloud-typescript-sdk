// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTextSparseEmbeddingResponseBodyUsage extends $dara.Model {
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

