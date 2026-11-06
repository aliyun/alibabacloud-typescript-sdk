// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageRequest extends $dara.Model {
  /**
   * @remarks
   * The complete list of application adapter IDs for the selected image version. A maximum of 100 items are supported. **When a non-empty list is passed, it must include the adapters that you still want to retain. Omitting this parameter or passing an empty list does not clear the existing associations.**
   */
  adaptorIdList?: string[];
  /**
   * @remarks
   * The updated description of the image.
   * 
   * @example
   * Update office software and basic configurations
   */
  description?: string;
  /**
   * @remarks
   * The operating system distribution information of the image. This must be consistent with the actual operating system distribution of the image.
   * 
   * @example
   * Ubuntu 22.04 64-bit
   */
  distro?: string;
  /**
   * @remarks
   * The ID of the image to be modified. You must provide at least one of ImageId and VersionId. If both are provided, they must belong to the same image.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The new name of the image. Specify this parameter only when you need to update the name.
   * 
   * @example
   * OfficeImage_202611
   */
  imageName?: string;
  /**
   * @remarks
   * The language of the image. Valid values:
   * 
   * - **zh-CN**: Simplified Chinese.
   * - **zh-HK**: Traditional Chinese (Hong Kong).
   * - **en-US**: English.
   * - **ja-JP**: Japanese.
   * - **CN**: A compatible value for Simplified Chinese.
   * - **EN**: A compatible value for English.
   * - **JP**: A compatible value for Japanese.
   * - **CN-HK**: A compatible value for Traditional Chinese (Hong Kong).
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the image version to be modified. If this parameter is omitted, the current effective version of the image specified by ImageId is used. You must provide at least one of ImageId and VersionId.
   * 
   * @example
   * iv-bp1example****
   */
  versionId?: string;
  /**
   * @remarks
   * The new display name of the image version.
   * 
   * @example
   * Office environment-202611
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      adaptorIdList: 'AdaptorIdList',
      description: 'Description',
      distro: 'Distro',
      imageId: 'ImageId',
      imageName: 'ImageName',
      language: 'Language',
      versionId: 'VersionId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptorIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      distro: 'string',
      imageId: 'string',
      imageName: 'string',
      language: 'string',
      versionId: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adaptorIdList)) {
      $dara.Model.validateArray(this.adaptorIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

