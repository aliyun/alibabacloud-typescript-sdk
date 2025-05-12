// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-d4dwr5tgrgvd****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CC66B0A-BA3B-5D87-BFBE-11AAAD7A****
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

