// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceInfoResponseBodyImages } from "./DescribeAvailableResourceInfoResponseBodyImages";
import { DescribeAvailableResourceInfoResponseBodySupportResources } from "./DescribeAvailableResourceInfoResponseBodySupportResources";


export class DescribeAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the image.
   */
  images?: DescribeAvailableResourceInfoResponseBodyImages;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8629F679-B51D-4194-A1CC-5D8F504C362B
   */
  requestId?: string;
  /**
   * @remarks
   * The specifications of resources that you can purchase.
   */
  supportResources?: DescribeAvailableResourceInfoResponseBodySupportResources;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      supportResources: 'SupportResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeAvailableResourceInfoResponseBodyImages,
      requestId: 'string',
      supportResources: DescribeAvailableResourceInfoResponseBodySupportResources,
    };
  }

  validate() {
    if(this.images && typeof (this.images as any).validate === 'function') {
      (this.images as any).validate();
    }
    if(this.supportResources && typeof (this.supportResources as any).validate === 'function') {
      (this.supportResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

