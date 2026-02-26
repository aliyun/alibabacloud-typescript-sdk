// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SimilarImage extends $dara.Model {
  /**
   * @remarks
   * The aesthetic score.
   * 
   * @example
   * 0.709
   */
  imageScore?: number;
  /**
   * @remarks
   * The URI of the image.
   * 
   * @example
   * oss://test-bucket/test-object
   */
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

