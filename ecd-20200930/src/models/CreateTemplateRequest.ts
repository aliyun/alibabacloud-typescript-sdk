// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The PL of the data disk. Default value: `AutoPL`.
   * 
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Valid values: 40 to 2040. Increments: 10 GiB.
   * 
   * **
   * 
   * **Keep in mind** that the larger the ESSD disk capacity, the higher the available PL (for example, PL2 is available for disks larger than 460 GiB). A higher PL comes with a higher cost. Select an ESSD based on your specific needs.
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
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * @example
   * cn-hangzhou
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
   * The ID of the Key Management Service (KMS) key that you want to use to encrypt disks. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to query KMS keys.
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
   * 应用管控策略ID
   * 
   * @example
   * bwr-5a5371e0db954d********
   */
  appRuleId?: string;
  /**
   * @remarks
   * 站点ID。
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
  autoPay?: boolean;
  autoRenew?: boolean;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   1: the Enterprise edition.
   * 
   * @example
   * 1
   */
  bizType?: string;
  chargeType?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDiskList?: CreateTemplateRequestDataDiskList[];
  /**
   * @remarks
   * The default language of cloud computers during startup. This parameter takes effect only when cloud computers are created from system images.
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
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud computer image. You can query image IDs on the Images page. System images and custom images are supported.
   * 
   * @example
   * desktopimage-windows-server-2022-64-asp
   */
  imageId?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy group.
   * 
   * @example
   * pg-8hlryfn331******
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The service type. Set the value to `CloudDesktop`.
   * 
   * *
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The regions of the template. You can create cloud computers by using a template only within the same region as the template itself.
   * 
   * >  You can specify up to 20 regions.
   */
  regionConfigList?: CreateTemplateRequestRegionConfigList[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-4knxmfneq1e******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags added to cloud computers. Specify tags in key-value pairs. You can specify up to 20 tags.
   */
  resourceTagList?: CreateTemplateRequestResourceTagList[];
  /**
   * @remarks
   * 区域配置管理
   */
  siteConfigList?: CreateTemplateRequestSiteConfigList[];
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
   * The template name. It must meet the following criteria:
   * 
   * *   It can be 2 to 126 characters in length.
   * *   It must begin with a letter and cannot start with `http://` or `https://`.
   * *   It can contain letters, digits, colons (:), underscores (_), and hyphens (-). Note: Periods (.) are not supported in the name.
   * 
   * This parameter is required.
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
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

