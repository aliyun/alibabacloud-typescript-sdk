// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageResponseBodyData extends $dara.Model {
  /**
   * @example
   * fafb432cdede9b20640e12105845386e-496883833-8242409229217337*****
   */
  imageId?: string;
  /**
   * @example
   * https://example.com/test-*****.png
   */
  imageUrl?: string;
  /**
   * @example
   * 17185*****
   */
  imageUrlExp?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      imageUrlExp: 'ImageUrlExp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageUrl: 'string',
      imageUrlExp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

