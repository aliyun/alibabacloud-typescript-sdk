// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesResponseBodyDataDataDiskList extends $dara.Model {
  /**
   * @example
   * AutoPL
   */
  performanceLevel?: string;
  /**
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
   * @example
   * 4
   */
  cpuCount?: number;
  /**
   * @example
   * 4GiB
   */
  gpuSpec?: string;
  /**
   * @example
   * 8192
   */
  memorySize?: number;
  /**
   * @example
   * cn-beijing+dir-3040*****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * eds.enterprise_office.4c8g
   */
  resourceInstanceType?: string;
  /**
   * @example
   * sp-b9fasjuu0*****
   */
  snapshotPolicyId?: string;
  /**
   * @example
   * vsw-dgea1*****
   */
  subnetId?: string;
  /**
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
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
   * @example
   * env
   */
  key?: string;
  /**
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
   * @example
   * bwr-5a5371e0*******
   */
  appRuleId?: string;
  /**
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
  dataDiskList?: DescribeTemplatesResponseBodyDataDataDiskList[];
  /**
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  description?: string;
  /**
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-04-25T05:18:46.000+00:00
   */
  gmtModified?: string;
  /**
   * @example
   * m-5q8ehbihx*****
   */
  imageId?: string;
  /**
   * @example
   * User
   */
  imageType?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @example
   * pg-0caoeogkhz*****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @example
   * CLOUD_DESKTOP
   */
  productType?: string;
  regionConfigList?: DescribeTemplatesResponseBodyDataRegionConfigList[];
  /**
   * @example
   * 1871984F-51F6-5588-BAF6-******
   */
  requestId?: string;
  /**
   * @example
   * rg-a5fqjjqaejt***
   */
  resourceGroupId?: string;
  resourceTagList?: DescribeTemplatesResponseBodyDataResourceTagList[];
  siteConfigList?: DescribeTemplatesResponseBodyDataSiteConfigList[];
  /**
   * @example
   * AutoPL
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 80
   */
  systemDiskSize?: number;
  /**
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * USER_TEMPLATE
   */
  templateType?: string;
  /**
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
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1871984F-51F6-5588-BAF6-*******
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
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

