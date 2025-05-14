// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * imgc-075cllfeuazh0****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20393E53-8FF1-524C-B494-B478A5369733
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

