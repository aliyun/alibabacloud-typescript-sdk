// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmBaseImageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ID of the transparent image. Images with the same ID have identical content.
   * 
   * @example
   * fafb432cdede9b20640e12105845386e-496883833-8242409229217337*****
   */
  imageId?: string;
  /**
   * @remarks
   * Temporary URL for downloading the image.
   * 
   * @example
   * https://example.com/test-*****.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * Expiration time of the temporary image URL, in seconds as a UNIX timestamp.
   * 
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

export class CreateWmBaseImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Transparent image information.
   */
  data?: CreateWmBaseImageResponseBodyData;
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateWmBaseImageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

