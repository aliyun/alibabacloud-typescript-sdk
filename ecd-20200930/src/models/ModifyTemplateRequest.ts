// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTemplateRequestRegionConfigList } from "./ModifyTemplateRequestRegionConfigList";
import { ModifyTemplateRequestResourceTagList } from "./ModifyTemplateRequestResourceTagList";
import { ModifyTemplateRequestSiteConfigList } from "./ModifyTemplateRequestSiteConfigList";


export class ModifyTemplateRequest extends $dara.Model {
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
  /**
   * @example
   * pg-gx2x1dhsmthe9****
   */
  policyGroupId?: string;
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
  static names(): { [key: string]: string } {
    return {
      defaultLanguage: 'DefaultLanguage',
      description: 'Description',
      imageId: 'ImageId',
      policyGroupId: 'PolicyGroupId',
      regionConfigList: 'RegionConfigList',
      resourceGroupId: 'ResourceGroupId',
      resourceTagList: 'ResourceTagList',
      siteConfigList: 'SiteConfigList',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      timerGroupId: 'TimerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultLanguage: 'string',
      description: 'string',
      imageId: 'string',
      policyGroupId: 'string',
      regionConfigList: { 'type': 'array', 'itemType': ModifyTemplateRequestRegionConfigList },
      resourceGroupId: 'string',
      resourceTagList: { 'type': 'array', 'itemType': ModifyTemplateRequestResourceTagList },
      siteConfigList: { 'type': 'array', 'itemType': ModifyTemplateRequestSiteConfigList },
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      templateId: 'string',
      templateName: 'string',
      timerGroupId: 'string',
    };
  }

  validate() {
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

