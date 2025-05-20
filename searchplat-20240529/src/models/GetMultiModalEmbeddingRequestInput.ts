// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultiModalEmbeddingRequestInput extends $dara.Model {
  image?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

