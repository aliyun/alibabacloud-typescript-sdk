// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The performance level of the data cloud disk. Default value: `AutoPL`.
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. Valid values: 40 to 2040. The value must be a multiple of 10.
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
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the list of regions supported by Elastic Desktop Service.
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
   * The ID of the automatic snapshot policy.
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
   * Specifies whether to enable cloud disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @remarks
   * The ID of the KMS key used when cloud disk encryption is enabled.
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
  appRuleId?: string;
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
  autoPay?: boolean;
  autoRenew?: boolean;
  chargeType?: string;
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
   * The ID of the cloud computer image. You can query the ID on the image management page. System images and custom images are supported.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the global policy.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The region-specific template configurations. Multiple configurations are supported. The configuration that matches the specific region is used.
   * 
   * > A maximum of 20 region configurations are supported.
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
   * The tags of the cloud computer in key-value format. A maximum of 20 tags can be specified.
   */
  resourceTagList?: ModifyTemplateRequestResourceTagList[];
  siteConfigList?: ModifyTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * > Only high-frequency and GPU-accelerated cloud computer specifications support ESSD cloud disks.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values: 40 to 500. The value must be a multiple of 10.
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
   * My cloud desktop template 001
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

