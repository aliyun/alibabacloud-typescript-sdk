// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The performance level of the data disk. The default value is `AutoPL`.
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. The value must be between 40 and 2040, inclusive. The step size is 10 GiB.
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
   * The ID of the workspace.
   * 
   * @example
   * cn-hangzhou+dir-709****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](~~DescribeRegions~~) to obtain a list of regions that WUYING Workspace supports.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud desktop instance type.
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-adjrehad1****
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
   * The ID of the KMS key to use when disk encryption is enabled.
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
   * The default language to set when the WUYING Workspace starts. This parameter is valid only when you create a WUYING Workspace from an OS image.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The description of the template. The description must meet the following requirements:
   * 
   * - It must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * - It can contain Chinese characters, letters, digits, spaces, and special characters. Use line breaks to start a new line.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the WUYING Workspace image. You can find the ID on the Image Management page. OS images and custom images are supported.
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
   * The region-specific template configurations. You can specify configurations for multiple regions. The system matches the configuration based on the specific region.
   * 
   * > You can specify configurations for up to 20 regions.
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
   * Tags for the cloud computer, in key-value format. You can specify up to 20 tags.
   */
  resourceTagList?: ModifyTemplateRequestResourceTagList[];
  siteConfigList?: ModifyTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The type of the system disk.
   * 
   * > Enhanced SSD (ESSD) disks are supported only by cloud computers with high clock speeds and powerful graphics capabilities.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. The value must be between 40 and 500, inclusive. The step size is 10 GiB.
   * 
   * > The system disk size cannot be smaller than the size of the image.
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
   * - It must be 2 to 126 characters in length.
   * 
   * - It must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - It can contain letters, digits, Chinese characters, colons (:), underscores (_), and hyphens (-). It cannot contain periods (.).
   * 
   * @example
   * My cloud desktop template 001
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the configuration group.
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

