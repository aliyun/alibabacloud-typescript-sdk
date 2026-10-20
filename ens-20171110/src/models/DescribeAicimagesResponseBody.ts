// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAICImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The Android version of the image.
   * 
   * @example
   * 10
   */
  androidVersion?: string;
  /**
   * @remarks
   * The time when the image was created, in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-01-22 10:54:34
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Console test operation
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Android in Container (AIC) image.
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
   * The image status. Valid values: **available**.
   * 
   * @example
   * available
   */
  status?: string;
  /**
   * @remarks
   * The repository username of the image.
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
   * The array of image information.
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
   * The number of entries per page for paging.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 72DC6C0A-D9A8-5345-A2BE-FE354CC728A0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

