// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-bp146shijn7hujku****
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-*******
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

