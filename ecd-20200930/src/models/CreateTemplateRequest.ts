// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTemplateRequestDataDiskList } from "./CreateTemplateRequestDataDiskList";
import { CreateTemplateRequestRegionConfigList } from "./CreateTemplateRequestRegionConfigList";
import { CreateTemplateRequestResourceTagList } from "./CreateTemplateRequestResourceTagList";
import { CreateTemplateRequestSiteConfigList } from "./CreateTemplateRequestSiteConfigList";


export class CreateTemplateRequest extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  bizType?: string;
  chargeType?: string;
  dataDiskList?: CreateTemplateRequestDataDiskList[];
  /**
   * @example
   * zh-CN
   */
  defaultLanguage?: string;
  description?: string;
  /**
   * @example
   * desktopimage-windows-server-2022-64-asp
   */
  imageId?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @example
   * pg-8hlryfn331******
   */
  policyGroupId?: string;
  postPaidAfterUsedUp?: boolean;
  /**
   * @example
   * CloudDesktop
   */
  productType?: string;
  regionConfigList?: CreateTemplateRequestRegionConfigList[];
  /**
   * @example
   * rg-4knxmfneq1e******
   */
  resourceGroupId?: string;
  resourceTagList?: CreateTemplateRequestResourceTagList[];
  siteConfigList?: CreateTemplateRequestSiteConfigList[];
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
   */
  templateName?: string;
  /**
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

