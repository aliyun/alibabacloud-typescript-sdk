// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-dk******fa
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
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

