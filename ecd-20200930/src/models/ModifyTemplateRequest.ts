// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestDataDiskList extends $dara.Model {
  /**
   * @remarks
   * The PL of the data disk. Default value: `AutoPL`.
   * 
   * Valid values:
   * 
   * *   PL1: a PL1 ESSD
   * *   PL0: a PL0 ESSD
   * *   AutoPL: an AutoPL ESSD
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data disk. Unit: GiB. Valid range: 40 to 2040 GiB with an increment of 10 GiB.
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
   * @example
   * cn-hangzhou+dir-709****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * eds.enterprise_office.8c16g
   */
  resourceInstanceType?: string;
  /**
   * @example
   * sp-35fvn8m2*****
   */
  snapshotPolicyId?: string;
  /**
   * @example
   * vsw-adjrehad1****
   */
  subnetId?: string;
  /**
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
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
   * @example
   * department
   */
  key?: string;
  /**
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
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * m-gx2x1dhsmusr2****
   */
  imageId?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  regionConfigList?: ModifyTemplateRequestRegionConfigList[];
  /**
   * @example
   * rg-a5fqjjqaejt***
   */
  resourceGroupId?: string;
  resourceTagList?: ModifyTemplateRequestResourceTagList[];
  siteConfigList?: ModifyTemplateRequestSiteConfigList[];
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b-0caoeogs88y*****
   */
  templateId?: string;
  templateName?: string;
  /**
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

