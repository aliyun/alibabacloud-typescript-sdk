// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageModifiedRecordsResponseBodyImageModifiedRecords extends $dara.Model {
  /**
   * @remarks
   * The image ID before the change.
   * 
   * @example
   * desktopimage-windows-server-2019-64-ch-asp
   */
  imageId?: string;
  /**
   * @remarks
   * The image name before the change.
   * 
   * @example
   * Windows server 2019 Mainland
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the new image after the change.
   * 
   * @example
   * desktopimage-windows-server-2022-64-ch-asp
   */
  newImageId?: string;
  /**
   * @remarks
   * The name of the new image after the change.
   * 
   * @example
   * Windows server 2022 Mainland asp
   */
  newImageName?: string;
  /**
   * @remarks
   * The reason for ignoring the vulnerability. This parameter is required only when you perform the ignore vulnerability operation, that is, when `OperateType` is set to `vul_ignore`.
   * 
   * @example
   * Defer fix
   */
  reason?: string;
  /**
   * @remarks
   * The status of the image change.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The time when the image was last changed. The time is in the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ss.SSSZ.
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
   * The pagination token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6koN7RqHg3d2z8LKmSoe821
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC40EE61-7E83-59ED-AEA6-7EE9C437F352
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image change records.
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

