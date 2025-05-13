// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

