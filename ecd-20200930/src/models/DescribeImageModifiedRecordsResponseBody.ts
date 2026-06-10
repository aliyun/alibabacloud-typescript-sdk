// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModifiedRecordsResponseBodyImageModifiedRecords extends $dara.Model {
  /**
   * @remarks
   * ID of the original image before modification.
   * 
   * @example
   * desktopimage-windows-server-2019-64-ch-asp
   */
  imageId?: string;
  /**
   * @remarks
   * Name of the original image before modification.
   * 
   * @example
   * Windows server 2019 Mainland
   */
  imageName?: string;
  /**
   * @remarks
   * ID of the new image after modification.
   * 
   * @example
   * desktopimage-windows-server-2022-64-ch-asp
   */
  newImageId?: string;
  /**
   * @remarks
   * Name of the new image after modification.
   * 
   * @example
   * Windows server 2022 Mainland asp
   */
  newImageName?: string;
  reason?: string;
  /**
   * @remarks
   * Status of the image modification.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Time when the image was last modified.
   * 
   * @example
   * 2022-03-03T02:43:44.851Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      newImageId: 'NewImageId',
      newImageName: 'NewImageName',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      newImageId: 'string',
      newImageName: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of image modification records.
   */
  imageModifiedRecords?: DescribeImageModifiedRecordsResponseBodyImageModifiedRecords[];
  /**
   * @remarks
   * Token for the next page of results. An empty NextToken means no more results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6koN7RqHg3d2z8LKmSoe821
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DC40EE61-7E83-59ED-AEA6-7EE9C437F352
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of image modification records.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageModifiedRecords: 'ImageModifiedRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageModifiedRecords: { 'type': 'array', 'itemType': DescribeImageModifiedRecordsResponseBodyImageModifiedRecords },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageModifiedRecords)) {
      $dara.Model.validateArray(this.imageModifiedRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

