// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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

