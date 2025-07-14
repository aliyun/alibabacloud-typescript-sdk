// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModifiedRecordsResponseBodyImageModifiedRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the original image.
   * 
   * @example
   * m-8rnz2imrpcfuh****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the original image.
   * 
   * @example
   * win10-0307
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the new image after the image was modified.
   * 
   * @example
   * xxxNewImageID
   */
  newImageId?: string;
  /**
   * @remarks
   * The name of the new image after the image was modified.
   * 
   * @example
   * xxxxImageID
   */
  newImageName?: string;
  reason?: string;
  /**
   * @remarks
   * The status of the image modification.
   * 
   * Valid values:
   * 
   * *   0: The image is being modified.
   * 
   * *   1: The image is successfully modified.
   * 
   * *   2: The image fails to be modified.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the image was last modified.
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
   * The image change records.
   */
  imageModifiedRecords?: DescribeImageModifiedRecordsResponseBodyImageModifiedRecords[];
  /**
   * @remarks
   * If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6koN7RqHg3d2z8LKmSoe821
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC40EE61-7E83-59ED-AEA6-7EE9C437F352
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image modification records.
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

