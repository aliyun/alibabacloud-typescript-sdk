// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The performance level of the data disk. Default value: `AutoPL`.
   * 
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. Valid values: 40 to 2040. The value must be a multiple of 10.
   * 
   * >Notice: The larger the ESSD cloud disk capacity, the higher the performance level (PL) available (for example, PL2 is available for capacities of 460 GiB or more). Higher performance levels (PLs) incur higher costs. Select the ESSD cloud disk performance level (PL) based on your requirements. Note: Only standard SSD and ESSD cloud disks are supported.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestRegionConfigList extends $dara.Model {
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-709******
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cloud computer specification ID.
   * 
   * @example
   * eds.enterprise_office.8c16g
   */
  resourceInstanceType?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * @example
   * sp-35fvn8m21pnx2****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-bp1yiu**********
   */
  subnetId?: string;
  /**
   * @remarks
   * Specifies whether to enable disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used when disk encryption is enabled. You can call [ListKeys](https://help.aliyun.com/document_detail/28951.html) to obtain the key ID.
   * 
   * @example
   * a7b3c0c8-b3a2-4876-b1cc-*********
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceInstanceType: 'ResourceInstanceType',
      snapshotPolicyId: 'SnapshotPolicyId',
      subnetId: 'SubnetId',
      volumeEncryptionEnable: 'VolumeEncryptionEnable',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
      resourceInstanceType: 'string',
      snapshotPolicyId: 'string',
      subnetId: 'string',
      volumeEncryptionEnable: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequestResourceTagList extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * design
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

export class CreateTemplateRequestSiteConfigList extends $dara.Model {
  /**
   * @remarks
   * The application control policy ID.
   * 
   * @example
   * bwr-5a5371e0db954d********
   */
  appRuleId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * mainland
   */
  siteId?: string;
  static names(): { [key: string]: string } {
    return {
      appRuleId: 'AppRuleId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appRuleId: 'string',
      siteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic payment is enabled for the subscription order.
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription cloud computer.
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bizType?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The size and specification configurations of data disks.
   */
  dataDiskList?: CreateTemplateRequestDataDiskList[];
  /**
   * @remarks
   * The default language set when the cloud computer starts. This parameter takes effect only when a system image is used to create the cloud computer.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The description of the template. The description must meet the following requirements:
   * 
   * - The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * - The description can contain Chinese characters, letters, digits, spaces, and special characters. Line breaks are supported.
   * 
   * @example
   * DesignDepartmentTemplate
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer image. You can query the ID on the image management page. System images and custom images are supported.
   * 
   * @example
   * desktopimage-windows-server-2022-64-asp
   */
  imageId?: string;
  /**
   * @remarks
   * The subscription duration of the subscription cloud computer. This parameter takes effect and is required only when `ChargeType` is set to `PrePaid`. The unit is specified by `PeriodUnit`.
   * - If `PeriodUnit` is set to `Month`, valid values:
   *     - 1
   *     - 2
   *     - 3
   *     - 6
   * - If `PeriodUnit` is set to `Year`, valid values:
   *     - 1
   *     - 2
   *     - 3
   *     - 4
   *     - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billable methods duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the global policy.
   * 
   * @example
   * pg-8hlryfn331******
   */
  policyGroupId?: string;
  /**
   * @remarks
   * Specifies whether to automatically switch to pay-as-you-go billing after the duration plan is used up.
   */
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The product type. Set the value to `CloudDesktop`.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The region-specific template configurations. You can specify multiple configurations. The configuration that matches the specific region is used.
   * 
   * > You can specify configurations for up to 20 regions.
   */
  regionConfigList?: CreateTemplateRequestRegionConfigList[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4knxmfneq1e******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the cloud computer in key-value format. You can specify up to 20 tags.
   */
  resourceTagList?: CreateTemplateRequestResourceTagList[];
  /**
   * @remarks
   * The site configuration management.
   */
  siteConfigList?: CreateTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The type of the system disk.
   * 
   * > Only high-frequency and GPU-accelerated cloud computer specifications support ESSD disks.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 40 to 500. The value must be a multiple of 10.
   * 
   * > The system disk size cannot be smaller than the image size.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The name of the template. The name must meet the following requirements:
   * 
   * - The name must be 2 to 126 characters in length.
   * - The name must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * - The name can contain letters, digits, Chinese characters, colons (:), underscores (_), or hyphens (-). Periods (.) are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * MyCloudComputerTemplate001
   */
  templateName?: string;
  /**
   * @remarks
   * The configuration group ID.
   * 
   * @example
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
  /**
   * @remarks
   * The usage duration plan per user.
   * 
   * @example
   * 120
   */
  userDuration?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      dataDiskList: 'DataDiskList',
      defaultLanguage: 'DefaultLanguage',
      description: 'Description',
      imageId: 'ImageId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      postPaidAfterUsedUp: 'PostPaidAfterUsedUp',
      productType: 'ProductType',
      regionConfigList: 'RegionConfigList',
      resourceGroupId: 'ResourceGroupId',
      resourceTagList: 'ResourceTagList',
      siteConfigList: 'SiteConfigList',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      templateName: 'TemplateName',
      timerGroupId: 'TimerGroupId',
      userDuration: 'UserDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bizType: 'string',
      chargeType: 'string',
      dataDiskList: { 'type': 'array', 'itemType': CreateTemplateRequestDataDiskList },
      defaultLanguage: 'string',
      description: 'string',
      imageId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      postPaidAfterUsedUp: 'boolean',
      productType: 'string',
      regionConfigList: { 'type': 'array', 'itemType': CreateTemplateRequestRegionConfigList },
      resourceGroupId: 'string',
      resourceTagList: { 'type': 'array', 'itemType': CreateTemplateRequestResourceTagList },
      siteConfigList: { 'type': 'array', 'itemType': CreateTemplateRequestSiteConfigList },
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      templateName: 'string',
      timerGroupId: 'string',
      userDuration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataDiskList)) {
      $dara.Model.validateArray(this.dataDiskList);
    }
    if(Array.isArray(this.regionConfigList)) {
      $dara.Model.validateArray(this.regionConfigList);
    }
    if(Array.isArray(this.resourceTagList)) {
      $dara.Model.validateArray(this.resourceTagList);
    }
    if(Array.isArray(this.siteConfigList)) {
      $dara.Model.validateArray(this.siteConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

