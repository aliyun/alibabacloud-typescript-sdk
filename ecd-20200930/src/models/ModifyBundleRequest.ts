// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBundleRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b-2g65ljy4291vl****
   */
  bundleId?: string;
  /**
   * @remarks
   * The new cloud computer template name.
   * 
   * @example
   * newName
   */
  bundleName?: string;
  /**
   * @remarks
   * The new cloud computer template description.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The new image ID. The new image must meet the following conditions:
   * 
   * - The new image must be in the Available state.
   * 
   * - The new image must have the same operating system as the original image.
   * 
   * - The disk size required by the new image cannot be larger than that of the original image.
   * 
   * - The GPU type of the new image must be the same as that of the original image.
   * 
   * @example
   * m-aea3oaww001np****
   */
  imageId?: string;
  /**
   * @remarks
   * The operating system language. Currently, only system images are supported.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      description: 'Description',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      description: 'string',
      imageId: 'string',
      language: 'string',
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

