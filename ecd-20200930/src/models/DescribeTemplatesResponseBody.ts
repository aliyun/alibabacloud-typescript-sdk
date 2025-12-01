// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyDataDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The PL of the data disk.
   * 
   * Valid values:
   * 
   * *   PL1: a PL1 ESSD.
   * *   PL0: a PL0 ESSD.
   * *   AutoPL: an AutoPL SSD.
   * 
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB.
   * 
   * @example
   * 100
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceLevel: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyDataRegionConfigList extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @remarks
   * The GPU memory information. This parameter is supported only by Graphics cloud computer types.
   * 
   * @example
   * 4GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 8192
   */
  memorySize?: number;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-beijing+dir-3040*****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud computer type.
   * 
   * @example
   * eds.enterprise_office.4c8g
   */
  resourceInstanceType?: string;
  /**
   * @remarks
   * The snapshot policy ID.
   * 
   * @example
   * sp-b9fasjuu0*****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * vsw-dgea1*****
   */
  subnetId?: string;
  /**
   * @remarks
   * Indicates whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key that is used to encrypt the disk.
   * 
   * @example
   * 3bc77be0-cbce-4a29-b07b-13f16394****
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
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
      cpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
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

export class DescribeTemplatesResponseBodyDataResourceTagList extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The property value.
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

export class DescribeTemplatesResponseBodyDataSiteConfigList extends $dara.Model {
  /**
   * @remarks
   * 应用管控策略ID
   * 
   * @example
   * bwr-5a5371e0*******
   */
  appRuleId?: string;
  /**
   * @remarks
   * 站点名称。
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

export class DescribeTemplatesResponseBodyData extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  chargeType?: string;
  /**
   * @remarks
   * The sizes of the data disks.
   */
  dataDiskList?: DescribeTemplatesResponseBodyDataDataDiskList[];
  /**
   * @remarks
   * The default language of the template.
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
   * The template description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the template was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the template was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-5q8ehbihx*****
   */
  imageId?: string;
  /**
   * @remarks
   * The image type.
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
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-0caoeogkhz*****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * The service type.
   * 
   * Valid value:
   * 
   * *   CloudDesktop: cloud computers.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * The region-related settings.
   */
  regionConfigList?: DescribeTemplatesResponseBodyDataRegionConfigList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1871984F-51F6-5588-BAF6-******
   */
  requestId?: string;
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
   * The tags added to cloud computers. A tag is a key-value pair.
   */
  resourceTagList?: DescribeTemplatesResponseBodyDataResourceTagList[];
  /**
   * @remarks
   * 区域配置管理
   */
  siteConfigList?: DescribeTemplatesResponseBodyDataSiteConfigList[];
  /**
   * @remarks
   * The performance level (PL) of the system disk.
   * 
   * Valid value:
   * 
   * *   PL1: a PL1 Enterprise SSD (ESSD).
   * *   PL0: a PL0 ESSD.
   * *   AutoPL: an AutoPL SSD.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   */
  templateName?: string;
  /**
   * @remarks
   * The template type.
   * 
   * Valid values:
   * 
   * *   USER_TEMPLATE: custom templates.
   * *   SYSTEM_TEMPLATE: system templates.
   * 
   * @example
   * USER_TEMPLATE
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the scheduled task group.
   * 
   * @example
   * bcc-dweha*****
   */
  timerGroupId?: string;
  userDuration?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      dataDiskList: 'DataDiskList',
      defaultLanguage: 'DefaultLanguage',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageType: 'ImageType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      postPaidAfterUsedUp: 'PostPaidAfterUsedUp',
      productType: 'ProductType',
      regionConfigList: 'RegionConfigList',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      resourceTagList: 'ResourceTagList',
      siteConfigList: 'SiteConfigList',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      timerGroupId: 'TimerGroupId',
      userDuration: 'UserDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      dataDiskList: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyDataDataDiskList },
      defaultLanguage: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageType: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      postPaidAfterUsedUp: 'boolean',
      productType: 'string',
      regionConfigList: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyDataRegionConfigList },
      requestId: 'string',
      resourceGroupId: 'string',
      resourceTagList: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyDataResourceTagList },
      siteConfigList: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyDataSiteConfigList },
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
      timerGroupId: 'string',
      userDuration: 'string',
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

export class DescribeTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The modification result. If the request was successful, `success` is returned. If the request failed, an error message is returned.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The templates.
   */
  data?: DescribeTemplatesResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned. This parameter is not returned if the value of Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1871984F-51F6-5588-BAF6-*******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 94
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

