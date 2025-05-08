// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-5xxgg
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8BEF0D72-9901-5D43-B7D3-8B42AC26C516
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

