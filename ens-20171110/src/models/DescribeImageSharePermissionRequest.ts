// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSharePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 171710408091****
   */
  aliyunId?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-5s7qotzavwbrnzaqh4unm****
   */
  imageId?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'number',
      imageId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

