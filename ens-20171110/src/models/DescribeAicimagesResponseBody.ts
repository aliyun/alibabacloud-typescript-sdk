// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICImagesResponseBodyImages extends $dara.Model {
  androidVersion?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2022-09-22 10:54:34
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Test operation of console
   */
  description?: string;
  /**
   * @remarks
   * The image ID of the AIC instance.
   * 
   * @example
   * m-ad0ddaddc2d54adeaa09b7c0f1e****
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the AIC image repository.
   * 
   * @example
   * ****.alibaba-inc.com/aic/socimage:test
   */
  imageUrl?: string;
  /**
   * @remarks
   * The status of the image. **Available** is returned for this parameter. Available indicates that the image is available.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The username of the image repository.
   * 
   * @example
   * user
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      androidVersion: 'AndroidVersion',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      status: 'Status',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidVersion: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      imageUrl: 'string',
      status: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAICImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the images.
   */
  images?: DescribeAICImagesResponseBodyImages[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72DC6C0A-D9A8-5345-A2BE-FE354CC728A0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeAICImagesResponseBodyImages },
      pageNumber: 'number',
      pageSize: 'number',
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

