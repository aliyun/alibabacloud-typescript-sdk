// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImagePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-4zfb6zj728hhr****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

