// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The custom tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The custom tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageRequest extends $dara.Model {
  /**
   * @remarks
   * The list of supported regions.
   * WUYING images are centralized. Use this parameter to query the regions where the image is deployed.
   */
  bizRegionIdList?: string[];
  /**
   * @remarks
   * The business type. This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of all business types. This parameter is not publicly available.
   */
  bizTypeList?: number[];
  distro?: string;
  /**
   * @remarks
   * The list of features supported by the image.
   */
  featureList?: string[];
  /**
   * @remarks
   * The image version information.
   * 
   * @example
   * 2.0.3-xxxx
   */
  fotaVersion?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The image name. Fuzzy match is supported.
   * 
   * @example
   * DemoImage
   */
  imageName?: string;
  /**
   * @remarks
   * The image type.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh-CN
   */
  languageType?: string;
  /**
   * @remarks
   * The operating system type of the image.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image package type.
   * 
   * @example
   * Ecs
   */
  packageType?: string;
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
   * The number of entries per page for paging queries. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The operating system platform name.
   * 
   * @example
   * Windows Server 2019
   */
  platformName?: string;
  /**
   * @remarks
   * The list of supported platform types. For valid values, refer to PlatformName above.
   */
  platformNameList?: string[];
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of products supported when the image supports multiple products.
   */
  productTypeList?: string[];
  /**
   * @remarks
   * The protocol type of the image.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * Queries images of specific defined specifications.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  resourceInstanceType?: string;
  /**
   * @remarks
   * The image status. Specifies the status of images to query. By default, all images that are not deleted are queried.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags for query.
   */
  tagList?: ListImageRequestTagList[];
  static names(): { [key: string]: string } {
    return {
      bizRegionIdList: 'BizRegionIdList',
      bizType: 'BizType',
      bizTypeList: 'BizTypeList',
      distro: 'Distro',
      featureList: 'FeatureList',
      fotaVersion: 'FotaVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      languageType: 'LanguageType',
      osType: 'OsType',
      packageType: 'PackageType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platformName: 'PlatformName',
      platformNameList: 'PlatformNameList',
      productType: 'ProductType',
      productTypeList: 'ProductTypeList',
      protocolType: 'ProtocolType',
      resourceInstanceType: 'ResourceInstanceType',
      status: 'Status',
      tagList: 'TagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionIdList: { 'type': 'array', 'itemType': 'string' },
      bizType: 'number',
      bizTypeList: { 'type': 'array', 'itemType': 'number' },
      distro: 'string',
      featureList: { 'type': 'array', 'itemType': 'string' },
      fotaVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      languageType: 'string',
      osType: 'string',
      packageType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      platformName: 'string',
      platformNameList: { 'type': 'array', 'itemType': 'string' },
      productType: 'string',
      productTypeList: { 'type': 'array', 'itemType': 'string' },
      protocolType: 'string',
      resourceInstanceType: 'string',
      status: 'string',
      tagList: { 'type': 'array', 'itemType': ListImageRequestTagList },
    };
  }

  validate() {
    if(Array.isArray(this.bizRegionIdList)) {
      $dara.Model.validateArray(this.bizRegionIdList);
    }
    if(Array.isArray(this.bizTypeList)) {
      $dara.Model.validateArray(this.bizTypeList);
    }
    if(Array.isArray(this.featureList)) {
      $dara.Model.validateArray(this.featureList);
    }
    if(Array.isArray(this.platformNameList)) {
      $dara.Model.validateArray(this.platformNameList);
    }
    if(Array.isArray(this.productTypeList)) {
      $dara.Model.validateArray(this.productTypeList);
    }
    if(Array.isArray(this.tagList)) {
      $dara.Model.validateArray(this.tagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

