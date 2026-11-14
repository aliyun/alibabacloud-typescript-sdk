// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business region to query. If this parameter is not specified, regions are not filtered by this parameter. The returned regions are still subject to the visibility scope of the product and the account.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * Specifies whether to skip the operating system and adaptation status filtering for adapted applications. Default value: false. A value of false indicates that only applications whose operating system matches the image and whose adaptation is complete are retained. A value of true indicates that these two filters are skipped. Application type filtering is still controlled by the API and ShowHidden.
   */
  ignoreFilter?: boolean;
  /**
   * @remarks
   * The image ID. You must specify at least one of ImageId and VersionId. If only this parameter is specified, the online version is queried.
   * 
   * @example
   * imgc-bp1example****
   */
  imageId?: string;
  /**
   * @remarks
   * The product type, such as CloudDesktop (Cloud Desktop), CloudApp (Cloud App), or WuyingServer (WUYING Workspace Enterprise Edition workstation).
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The types of virtual applications to include in addition to the default user applications and system applications. Valid values:
   * - VIRTUAL_DESKTOP_APP: desktop virtual applications.
   * - ALL_VIRTUAL_APP: all virtual applications.
   * 
   * @example
   * VIRTUAL_DESKTOP_APP
   */
  showHidden?: string;
  /**
   * @remarks
   * The image version ID. You can specify this parameter alone to query a specific version. If both ImageId and VersionId are specified, the version must belong to the specified image.
   * 
   * @example
   * iv-xxx
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      ignoreFilter: 'IgnoreFilter',
      imageId: 'ImageId',
      productType: 'ProductType',
      showHidden: 'ShowHidden',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      ignoreFilter: 'boolean',
      imageId: 'string',
      productType: 'string',
      showHidden: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

