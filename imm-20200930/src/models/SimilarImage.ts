// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimilarImage extends $dara.Model {
  imageScore?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      imageScore: 'ImageScore',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScore: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

