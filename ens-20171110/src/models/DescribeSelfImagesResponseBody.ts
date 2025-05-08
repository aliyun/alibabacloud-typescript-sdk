// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSelfImagesResponseBodyImages } from "./DescribeSelfImagesResponseBodyImages";


export class DescribeSelfImagesResponseBody extends $dara.Model {
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
   * The image information.
   */
  images?: DescribeSelfImagesResponseBodyImages;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8B8EB73-B4FD-4262-8EF6-680DF39C9BA0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      images: DescribeSelfImagesResponseBodyImages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
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

