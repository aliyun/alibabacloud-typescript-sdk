// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRequestTagList extends $dara.Model {
  /**
   * @remarks
   * The key of the custom tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom tag.
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
   * The regions that are supported. The EDS images are centralized. Use this parameter to query the regions where the image is deployed.
   */
  bizRegionIdList?: string[];
  /**
   * @remarks
   * The service type. This parameter is not available publicly.
   * 
   * Valid value:
   * 
   * *   1 (default)
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The list of all service types. It is not available publicly.
   */
  bizTypeList?: number[];
  /**
   * @remarks
   * The features supported by the image.
   */
  featureList?: string[];
  /**
   * @remarks
   * The image version.
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
   * The type of the images.
   * 
   * Valid values:
   * 
   * *   User: a custom image.
   * *   Shared: a shared image.
   * *   System: a system image.
   * *   Community: a community image.
   * 
   * @example
   * User
   */
  imageType?: string;
  /**
   * @remarks
   * The language.
   * 
   * Valid values:
   * 
   * *   en-US: English.
   * *   zh-HK: Chinese, Traditional (Hong Kong, China).
   * *   zh-CN: Simplified Chinese.
   * *   ja-JP: Japanese.
   * 
   * @example
   * zh-CN
   */
  languageType?: string;
  /**
   * @remarks
   * The OS type of the image.
   * 
   * Valid values:
   * 
   * *   Linux
   * *   Unknown
   * *   Windows
   * *   Android
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The image encapsulation type.
   * 
   * Valid values:
   * 
   * *   Ecs_Container: ECS and Docker image
   * *   Ecs: ECS image
   * 
   * @example
   * Ecs
   */
  packageType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the operating system platform.
   * 
   * Valid values:
   * 
   * *   Ubuntu
   * *   Debian
   * *   Windows Server 2022
   * *   Windows Server 2019
   * *   Windows Server 2016
   * *   Windows 11
   * *   Windows 10
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
   * Valid values:
   * 
   * *   CloudDesktop: Elastic Desktop Service
   * *   CloudApp: App Streaming
   * *   WuyingServer: Workstation
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The list of products that are supported when the image supports multiple products.
   */
  productTypeList?: string[];
  /**
   * @remarks
   * The protocol type of the image.
   * 
   * Valid values:
   * 
   * *   HDX: the High-definition Experience (HDX) protocol
   * *   ASP: the Alibaba Cloud-developed ASP protocol
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * Find images with certain fixed specifications.
   * 
   * @example
   * eds.enterprise_office.2c4g
   */
  resourceInstanceType?: string;
  /**
   * @remarks
   * The status of the image. You can query images in the specified status. By default, all images in the Not Deleted state are queried.
   * 
   * Valid values:
   * 
   * *   AVAILABLE: The image is available.
   * *   INIT: The image is being initialized.
   * *   CREATE_FAILED: The image failed to be created.
   * *   CREATING: The image is being created.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The tags to query.
   */
  tagList?: ListImageRequestTagList[];
  static names(): { [key: string]: string } {
    return {
      bizRegionIdList: 'BizRegionIdList',
      bizType: 'BizType',
      bizTypeList: 'BizTypeList',
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

