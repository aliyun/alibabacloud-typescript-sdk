// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTemplatesResponseBodyDataDataDiskList } from "./DescribeTemplatesResponseBodyDataDataDiskList";
import { DescribeTemplatesResponseBodyDataRegionConfigList } from "./DescribeTemplatesResponseBodyDataRegionConfigList";
import { DescribeTemplatesResponseBodyDataResourceTagList } from "./DescribeTemplatesResponseBodyDataResourceTagList";
import { DescribeTemplatesResponseBodyDataSiteConfigList } from "./DescribeTemplatesResponseBodyDataSiteConfigList";


export class DescribeTemplatesResponseBodyData extends $dara.Model {
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
  /**
   * @example
   * pg-0caoeogkhz*****
   */
  policyGroupId?: string;
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
  static names(): { [key: string]: string } {
    return {
      dataDiskList: 'DataDiskList',
      defaultLanguage: 'DefaultLanguage',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      imageId: 'ImageId',
      imageType: 'ImageType',
      policyGroupId: 'PolicyGroupId',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskList: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyDataDataDiskList },
      defaultLanguage: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      imageId: 'string',
      imageType: 'string',
      policyGroupId: 'string',
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

