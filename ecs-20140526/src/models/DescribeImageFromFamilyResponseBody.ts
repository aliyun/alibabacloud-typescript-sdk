// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageFromFamilyResponseBodyImage } from "./DescribeImageFromFamilyResponseBodyImage";


export class DescribeImageFromFamilyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image information.
   */
  image?: DescribeImageFromFamilyResponseBodyImage;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: DescribeImageFromFamilyResponseBodyImage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

