// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationResponseBodyDataChecklist } from "./GetApplicationResponseBodyDataChecklist";
import { GetApplicationResponseBodyDataComplianceList } from "./GetApplicationResponseBodyDataComplianceList";
import { GetApplicationResponseBodyDataPriceList } from "./GetApplicationResponseBodyDataPriceList";
import { GetApplicationResponseBodyDataResourceList } from "./GetApplicationResponseBodyDataResourceList";


export class GetApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * App ID
   * 
   * @example
   * VVK605ZH00OA4MRT
   */
  applicationId?: string;
  /**
   * @remarks
   * The resource tag.
   */
  checklist?: GetApplicationResponseBodyDataChecklist[];
  complianceList?: GetApplicationResponseBodyDataComplianceList[];
  /**
   * @remarks
   * The time when the app was created
   * 
   * @example
   * 2021-08-09 14:37:16
   */
  createTime?: string;
  deployPercent?: number;
  /**
   * @remarks
   * Application description
   * 
   * @example
   * remark
   */
  description?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Success
   */
  error?: string;
  /**
   * @remarks
   * The URL of the image in the database.
   * 
   * @example
   * The details of the application.
   */
  imageURL?: string;
  /**
   * @remarks
   * App name
   * 
   * @example
   * 1411182597819805/sr-8DWU4RUS49NIDII0.png
   */
  name?: string;
  /**
   * @remarks
   * The billing results.
   */
  priceList?: GetApplicationResponseBodyDataPriceList[];
  /**
   * @remarks
   * The ID of the resource group to which the app belongs
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource specification.
   */
  resourceList?: GetApplicationResponseBodyDataResourceList[];
  /**
   * @remarks
   * Verification passed
   * 
   * @example
   * Deployed_Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template associated with the application
   * 
   * @example
   * FYS9VZ535U20V7HT
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      checklist: 'Checklist',
      complianceList: 'ComplianceList',
      createTime: 'CreateTime',
      deployPercent: 'DeployPercent',
      description: 'Description',
      error: 'Error',
      imageURL: 'ImageURL',
      name: 'Name',
      priceList: 'PriceList',
      resourceGroupId: 'ResourceGroupId',
      resourceList: 'ResourceList',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      checklist: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataChecklist },
      complianceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataComplianceList },
      createTime: 'string',
      deployPercent: 'number',
      description: 'string',
      error: 'string',
      imageURL: 'string',
      name: 'string',
      priceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataPriceList },
      resourceGroupId: 'string',
      resourceList: { 'type': 'array', 'itemType': GetApplicationResponseBodyDataResourceList },
      status: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checklist)) {
      $dara.Model.validateArray(this.checklist);
    }
    if(Array.isArray(this.complianceList)) {
      $dara.Model.validateArray(this.complianceList);
    }
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

