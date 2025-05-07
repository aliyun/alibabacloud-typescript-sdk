// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCImageListResponseBodyImages } from "./DescribeRcimageListResponseBodyImages";


export class DescribeRCImageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  images?: DescribeRCImageListResponseBodyImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
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
   * 2553A660-E4EB-4AF4-A402-8AFF70A49143
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of images.
   * 
   * @example
   * 2
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
      images: { 'type': 'array', 'itemType': DescribeRCImageListResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

