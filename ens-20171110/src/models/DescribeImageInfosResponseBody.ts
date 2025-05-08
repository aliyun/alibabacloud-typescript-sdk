// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageInfosResponseBodyImages } from "./DescribeImageInfosResponseBodyImages";


export class DescribeImageInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about images.
   */
  images?: DescribeImageInfosResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5568A08C-10A9-47F3-902F-647298B463FB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeImageInfosResponseBodyImages,
      requestId: 'string',
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

