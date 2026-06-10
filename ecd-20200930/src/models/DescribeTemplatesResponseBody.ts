// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyDataDataDiskList extends $dara.Model {
  /**
   * @remarks
   * Data disk performance level.
   * 
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Data disk size in GiB.
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
   * Number of vCPUs in the Cloud Desktop instance type.
   * 
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @remarks
   * GPU memory size. This field appears only for graphics instance types.
   * 
   * @example
   * 4GiB
   */
  gpuSpec?: string;
  /**
   * @remarks
   * Memory size in MiB.
   * 
   * @example
   * 8192
   */
  memorySize?: number;
  /**
   * @remarks
   * Office site ID.
   * 
   * @example
   * cn-beijing+dir-3040*****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * Cloud Desktop instance type ID.
   * 
   * @example
   * eds.enterprise_office.4c8g
   */
  resourceInstanceType?: string;
  /**
   * @remarks
   * Snapshot policy ID.
   * 
   * @example
   * sp-b9fasjuu0*****
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * Subnet ID.
   * 
   * @example
   * vsw-dgea1*****
   */
  subnetId?: string;
  /**
   * @remarks
   * Whether disk encryption is enabled.
   * 
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @remarks
   * KMS key ID used when disk encryption is enabled.
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
   * Tag key.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
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
   * Application control policy ID.
   * 
   * @example
   * bwr-5a5371e0*******
   */
  appRuleId?: string;
  /**
   * @remarks
   * Site name.
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
   * Data disk size and specification configuration.
   */
  dataDiskList?: DescribeTemplatesResponseBodyDataDataDiskList[];
  /**
   * @remarks
   * Default startup language for the template.
   * 
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @remarks
   * Template description.
   * 
   * @example
   * My template
   */
  description?: string;
  /**
   * @remarks
   * Template creation time in UTC.
   * 
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Template modification time in UTC.
   * 
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Image ID.
   * 
   * @example
   * m-5q8ehbihx*****
   */
  imageId?: string;
  /**
   * @remarks
   * Image type.
   * 
   * @example
   * User
   */
  imageType?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * pg-0caoeogkhz*****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @remarks
   * Product type.
   * 
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  /**
   * @remarks
   * Region-specific configuration parameters.
   */
  regionConfigList?: DescribeTemplatesResponseBodyDataRegionConfigList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1871984F-51F6-5588-BAF6-******
   */
  requestId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-a5fqjjqaejt***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Cloud Desktop tags in key-value format.
   */
  resourceTagList?: DescribeTemplatesResponseBodyDataResourceTagList[];
  /**
   * @remarks
   * Site configuration management.
   */
  siteConfigList?: DescribeTemplatesResponseBodyDataSiteConfigList[];
  /**
   * @remarks
   * System disk type.
   * 
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * System disk size in GiB.
   * 
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * Template ID.
   * 
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  /**
   * @remarks
   * Template name.
   * 
   * @example
   * My template 001
   */
  templateName?: string;
  /**
   * @remarks
   * Template type.
   * 
   * @example
   * USER_TEMPLATE
   */
  templateType?: string;
  /**
   * @remarks
   * Scheduled task group ID.
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
   * Operation result. Returns `success` if successful. Otherwise, returns an error message.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * List of template information.
   */
  data?: DescribeTemplatesResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message. This parameter is not returned when Code is `success`.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1871984F-51F6-5588-BAF6-*******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
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

