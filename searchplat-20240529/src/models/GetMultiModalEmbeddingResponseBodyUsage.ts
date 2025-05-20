// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalEmbeddingResponseBodyUsage extends $dara.Model {
  image?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'number',
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

