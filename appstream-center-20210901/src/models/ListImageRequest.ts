// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRequestTagList extends $dara.Model {
  key?: string;
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
  bizRegionIdList?: string[];
  /**
   * @example
   * 1
   */
  bizType?: number;
  bizTypeList?: number[];
  featureList?: string[];
  /**
   * @example
   * 2.0.3-xxxx
   */
  fotaVersion?: string;
  /**
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @example
   * DemoImage
   */
  imageName?: string;
  /**
   * @example
   * User
   */
  imageType?: string;
  /**
   * @example
   * zh-CN
   */
  languageType?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @example
   * Ecs
   */
  packageType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Windows Server 2019
   */
  platformName?: string;
  platformNameList?: string[];
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  productTypeList?: string[];
  /**
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @example
   * eds.enterprise_office.2c4g
   */
  resourceInstanceType?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
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

