// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image that is being copied.
   * 
   * @example
   * m-2g65ljy3ynrdq****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 28A40F12-F340-442B-A35F-46EF6A03****
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

