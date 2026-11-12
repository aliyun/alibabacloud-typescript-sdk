// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEffectiveImageByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business region to query. If this parameter is not specified, regions are not filtered by this parameter. The returned regions are still constrained by the product and the visible scope of the account.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The content language of the community image document in BCP 47 format, such as zh-CN or en-US. Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * Specifies whether to skip filtering by the operating system and adaptation status of applications. Default value: false. A value of false retains only applications that match the image operating system and have completed adaptation. A value of true skips these two filters. Application type filtering is still controlled by the API operation and the ShowHidden parameter.
   * 
   * @example
   * false
   */
  ignoreFilter?: boolean;
  /**
   * @remarks
   * The image ID. Required when querying effective versions.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * - System: System image.
   * - User: Custom image.
   * - Shared: Shared image.
   * - Community: Community image.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The product type, such as CloudDesktop, CloudApp, or WuyingServer.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The additional types of virtual applications to include, in addition to the user and system applications returned by default. Valid values:
   * - VIRTUAL_DESKTOP_APP: Desktop virtual applications.
   * - ALL_VIRTUAL_APP: All virtual applications.
   * 
   * @example
   * VIRTUAL_DESKTOP_APP
   */
  showHidden?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      contentLocale: 'ContentLocale',
      ignoreFilter: 'IgnoreFilter',
      imageId: 'ImageId',
      imageType: 'ImageType',
      productType: 'ProductType',
      showHidden: 'ShowHidden',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      contentLocale: 'string',
      ignoreFilter: 'boolean',
      imageId: 'string',
      imageType: 'string',
      productType: 'string',
      showHidden: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

