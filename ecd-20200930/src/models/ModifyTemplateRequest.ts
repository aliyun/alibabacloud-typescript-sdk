// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The PL of the data disk. Default value: `AutoPL`.
   * Valid values:
   * *   PL1: a PL1 ESSD
   * *   PL0: a PL0 ESSD
   * *   AutoPL: an AutoPL ESSD
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.Valid range: 40 to 2040 GiB with an increment of 10 GiB.
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
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud computer type.
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
   * Specifies whether to enable disk encryption.
   * 
   * Valid values:
   * 
   * *   false (default): disables disk encryption.
   * *   true: enables disk encryption.
   * 
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that you want to use to encrypt disks.
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
   * The default language of the cloud computer during startup. This parameter takes effect only when the cloud computer is created from a system image.
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
  defaultLanguage?: string;
  /**
   * @remarks
   * The template description. It must meet the following criteria:
   * 
   * *   It can be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * *   It can contain letters, digits, and special characters, including spaces. Note: You can use carriage returns to break lines.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer image. You can query image IDs on the Images page. System images and custom images are supported.
   * 
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy group.
   * 
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The regions by which you can search for cloud computer templates. When this parameter takes effect, cloud computer templates are matched based on the specified regions.
   * 
   * >  You can specify up to 20 regions.
   */
  regionConfigList?: ModifyTemplateRequestRegionConfigList[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-a5fqjjqaejt***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to cloud computers. Specify tags in key-value pairs. You can specify up to 20 tags.
   */
  resourceTagList?: ModifyTemplateRequestResourceTagList[];
  siteConfigList?: ModifyTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The performance level (PL) of the system disk.
   * 
   * >  Only cloud computers of the Graphics or High Frequency type support Enterprise SSDs (ESSDs).
   * 
   * Valid values:
   * 
   * *   PL1: a PL1 ESSD.
   * *   PL0: a PL0 ESSD.
   * *   AutoPL: an AutoPL ESSD.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 40 to 500. Increments: 10 GiB.
   * 
   * >  The system disk size must be at least as large as the configured image size.
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
   * The template name. It must meet the following criteria:
   * 
   * *   It can be 2 to 126 characters in length.
   * *   It must begin with a letter and cannot start with `http://` or `https://`.
   * *   It can contain letters, digits, colons (:), underscores (_), and hyphens (-). Note: Periods (.) are not supported in the name.
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the scheduled task group.
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

