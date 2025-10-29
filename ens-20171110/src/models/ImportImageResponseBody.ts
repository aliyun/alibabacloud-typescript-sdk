// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * m-5wn1dh*******b48f440ntvad
   */
  imageId?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
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

