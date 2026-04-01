// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCImageListRequest extends $dara.Model {
  /**
   * @remarks
   * The image architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  imageId?: string;
  imageName?: string;
  instanceType?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The image type. Set the value to **self**.
   * 
   * @example
   * self
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      imageId: 'ImageId',
      imageName: 'ImageName',
      instanceType: 'InstanceType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageId: 'string',
      imageName: 'string',
      instanceType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

