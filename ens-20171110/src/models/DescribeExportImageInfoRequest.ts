// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExportImageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-xxxxx
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * testImageName
   */
  imageName?: string;
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

