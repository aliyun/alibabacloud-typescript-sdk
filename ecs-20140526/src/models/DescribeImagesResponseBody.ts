// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImagesResponseBodyImages } from "./DescribeImagesResponseBodyImages";


export class DescribeImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the images.
   */
  images?: DescribeImagesResponseBodyImages;
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66189103-EDB2-43E2-BB60-BFF2B62F4EB8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeImagesResponseBodyImages,
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
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

