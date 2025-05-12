// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBundleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer template that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * b-2g65ljy4291vl****
   */
  bundleId?: string;
  /**
   * @remarks
   * The name of the new cloud computer template.
   * 
   * @example
   * newName
   */
  bundleName?: string;
  /**
   * @remarks
   * The description of the new cloud computer template.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The new image ID. The new image must meet the following conditions:
   * 
   * *   The new image must be in the Available state.
   * *   The operating system of the new image must be the same as that of the original image.
   * *   The required disk size for the new image cannot be greater than that for the original image.
   * *   The GPU type of the new image must be the same as that of the original image.
   * 
   * @example
   * m-aea3oaww001np****
   */
  imageId?: string;
  /**
   * @remarks
   * The OS language. This parameter is available only for system images.
   * 
   * Valid values:
   * 
   * *   en-US: American English
   * *   zh-HK: Traditional Chinese (Hong Kong)
   * *   zh-CN: Simplified Chinese.
   * 
   * *   ja-JP: Japanese
   * 
   * @example
   * zh-CN
   */
  language?: string;
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

