// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestDataDiskList extends $dara.Model {
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
   * The size of the data cloud disk. Unit: GiB. Valid values: 40 to 2040. The value must be a multiple of 10.
   * 
   * >Notice: The larger the capacity of a standard SSD, the higher the performance level (PL) that you can select. For example, you can select PL2 for a standard SSD with a capacity of 460 GiB or larger. A higher PL incurs higher costs. Select an appropriate PL based on your business requirements.</notice>
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
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-709******
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud desktop specification.
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
   * The ID of the subnet.
   * 
   * @example
   * vsw-bp1yiu**********
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the virtual node pool. This parameter is used in workstation scenarios.
   * 
   * @example
   * vnp-0bydg********
   */
  virtualNodePoolId?: string;
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
   * The ID of the Key Management Service (KMS) key used when cloud disk encryption is enabled. You can call the [ListKeys](https://help.aliyun.com/document_detail/28951.html) operation to obtain the key ID.
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
   * The ID of the application control policy.
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
   * Specifies whether automatic payment is enabled for the subscription order.
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription shared cloud desktop.
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * > This parameter is not available for public use.
   * 
   * @example
   * 1
   */
  bizType?: string;
  /**
   * @remarks
   * The billing method of the cloud desktop.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The size and specification configurations of the data cloud disk.
   */
  dataDiskList?: CreateTemplateRequestDataDiskList[];
  /**
   * @remarks
   * The default language configured when the cloud desktop starts. This parameter takes effect only when you use a system image to create a cloud desktop.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * The description of the template. The description must meet the following requirements:
   * 
   * - The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * - The description can contain Chinese characters, English letters, digits, spaces, and special characters, and supports line breaks.
   * 
   * @example
   * Design department template
   */
  description?: string;
  /**
   * @remarks
   * The ID of the cloud desktop image. You can query the image ID on the Images page. System images and custom images are supported.
   * 
   * @example
   * desktopimage-windows-server-2022-64-asp
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * myHost
   */
  instanceName?: string;
  /**
   * @remarks
   * The subscription duration of the shared cloud desktop. This parameter is required and takes effect only when the `ChargeType` parameter is set to `PrePaid`. The unit is specified by the `PeriodUnit` parameter.
   * - If the `PeriodUnit` parameter is set to `Month`, valid values are:
   *     - 1
   *     - 2
   *     - 3
   *     - 6
   * - If the `PeriodUnit` parameter is set to `Year`, valid values are:
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
   * The time unit of the subscription Billable methods.
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
   * Specifies whether to automatically switch to the pay-as-you-go billing method after the usage duration plan is exhausted.
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
   * The region-specific template configurations. You can configure multiple regions. The configurations are matched based on the specific region when the template is used.
   * 
   * > You can configure up to 20 regions.
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
   * The tags of the cloud desktop. The tags are in key-value pairs. You can specify up to 20 tags.
   */
  resourceTagList?: CreateTemplateRequestResourceTagList[];
  /**
   * @remarks
   * Site configuration management.
   */
  siteConfigList?: CreateTemplateRequestSiteConfigList[];
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * > Only cloud desktops with high clock speeds or GPU-accelerated specifications support ESSDs.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values: 40 to 500. The value must be a multiple of 10.
   * 
   * > The size of the system cloud disk cannot be smaller than the size of the configured image.
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
   * - The name must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - The name can contain letters, digits, Chinese characters, colons (:), underscores (_), and hyphens (-), but cannot contain periods (.).
   * 
   * This parameter is required.
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
   * ccg-0caoeogrk9m5****
   */
  timerGroupId?: string;
  /**
   * @remarks
   * The usage duration plan for a single user.
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
      instanceName: 'InstanceName',
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
      instanceName: 'string',
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

