// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The performance level of the data cloud disk. Default value: `AutoPL`.
   * 
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. Valid values: 40 to 2040, in increments of 10 GiB.
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

export class ModifyTemplateRequestRegionConfigList extends $dara.Model {
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-709****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by Elastic Desktop Service.
   * 
   * @example
   * cn-beijing
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
   * The automatic snapshot policy ID.
   * 
   * @example
   * sp-35fvn8m2*****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-adjrehad1****
   */
  subnetId?: string;
  /**
   * @remarks
   * The virtual node pool ID.
   * 
   * @example
   * vnp-0bz55ic*******
   */
  virtualNodePoolId?: string;
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
   * The ID of the KMS key used when disk encryption is enabled.
   * 
   * @example
   * a7b3c0c8-b3a2-4876-b1cc-116dddc9****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceInstanceType: 'ResourceInstanceType',
      snapshotPolicyId: 'SnapshotPolicyId',
      subnetId: 'SubnetId',
      virtualNodePoolId: 'VirtualNodePoolId',
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
      virtualNodePoolId: 'string',
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

export class ModifyTemplateRequestResourceTagList extends $dara.Model {
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

export class ModifyTemplateRequestSiteConfigList extends $dara.Model {
  /**
   * @remarks
   * The application control policy ID.
   * 
   * @example
   * bwr-5a5371e0*******
   */
  appRuleId?: string;
  /**
   * @remarks
   * The site name.
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

export class ModifyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic payment is enabled for the subscription order.
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription cloud computer.
   */
  autoRenew?: boolean;
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
   * The system cloud disk performance level.
   */
  dataDiskList?: ModifyTemplateRequestDataDiskList[];
  /**
   * @remarks
   * The default language that is set when the cloud computer starts. This parameter takes effect only when a system image is used to create the cloud computer.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The description of the template. The description must meet the following requirements:
   * 
   * - The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * - The description can contain Chinese characters, letters, digits, spaces, and special characters. Line breaks are supported.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The cloud computer image ID. You can query the ID on the image management page. System images, custom images, and other image types are supported.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * wework-aim-test
   */
  instanceName?: string;
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
   * The unit of the subscription duration for the subscription billing method.
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
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * Specifies whether to automatically switch to pay-as-you-go billing after the duration plan is used up.
   */
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The region-specific template configurations. You can specify multiple configurations. The configuration that matches the specific region is used.
   * 
   * > You can specify configurations for up to 20 regions.
   */
  regionConfigList?: ModifyTemplateRequestRegionConfigList[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-a5fqjjqaejt***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The cloud computer tags in key-value format. You can specify up to 20 tags.
   */
  resourceTagList?: ModifyTemplateRequestResourceTagList[];
  /**
   * @remarks
   * The site configuration management.
   */
  siteConfigList?: ModifyTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * > Only high frequency and GPU-accelerated cloud computer specifications support ESSD cloud disks.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values: 40 to 500, in increments of 10 GiB.
   * 
   * > The system cloud disk size cannot be smaller than the size of the configured image.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template. The name must meet the following requirements:
   * 
   * - The name must be 2 to 126 characters in length and can contain letters and Chinese characters.
   * - The name must start with a letter or a Chinese character. The name cannot start with `http://` or `https://`.
   * - The name can contain letters, digits, Chinese characters, colons (:), underscores (_), or hyphens (-). Periods (.) are not supported.
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
   * bcc-dweha*****
   */
  timerGroupId?: string;
  /**
   * @remarks
   * The duration plan for a single user.
   * 
   * @example
   * 120
   */
  userDuration?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      dataDiskList: 'DataDiskList',
      defaultLanguage: 'DefaultLanguage',
      description: 'Description',
      imageId: 'ImageId',
      instanceName: 'InstanceName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      postPaidAfterUsedUp: 'PostPaidAfterUsedUp',
      regionConfigList: 'RegionConfigList',
      resourceGroupId: 'ResourceGroupId',
      resourceTagList: 'ResourceTagList',
      siteConfigList: 'SiteConfigList',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timerGroupId: 'TimerGroupId',
      userDuration: 'UserDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      dataDiskList: { 'type': 'array', 'itemType': ModifyTemplateRequestDataDiskList },
      defaultLanguage: 'string',
      description: 'string',
      imageId: 'string',
      instanceName: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      postPaidAfterUsedUp: 'boolean',
      regionConfigList: { 'type': 'array', 'itemType': ModifyTemplateRequestRegionConfigList },
      resourceGroupId: 'string',
      resourceTagList: { 'type': 'array', 'itemType': ModifyTemplateRequestResourceTagList },
      siteConfigList: { 'type': 'array', 'itemType': ModifyTemplateRequestSiteConfigList },
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      templateId: 'string',
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

