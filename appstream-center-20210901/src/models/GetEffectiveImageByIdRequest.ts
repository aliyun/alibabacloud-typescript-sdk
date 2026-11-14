// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEffectiveImageByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business region to query. If this parameter is not specified, regions are not filtered by this parameter. The returned regions are still constrained by the product type and the visible scope of the account.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The content language of the community image documentation in BCP 47 format, such as zh-CN and en-US. Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  contentLocale?: string;
  /**
   * @remarks
   * Specifies whether to skip filtering based on the operating system and adaptation status of adapted applications. Default value: false. A value of false retains only applications that match the image operating system and have completed adaptation. A value of true skips these two filters. Application type filtering is still controlled by the API operation and the ShowHidden parameter.
   * 
   * @example
   * false
   */
  ignoreFilter?: boolean;
  /**
   * @remarks
   * The image ID. This parameter is required when querying effective versions.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * - System: system images.
   * - User: custom images.
   * - Shared: shared images.
   * - Community: community images.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The product type, such as CloudDesktop (Cloud Desktop), CloudApp (Cloud App), and WuyingServer (workstation).
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * Specifies the additional virtual application types to include in the response besides the default user and system applications. Valid values:
   * - VIRTUAL_DESKTOP_APP: desktop virtual applications.
   * - ALL_VIRTUAL_APP: all virtual applications.
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

