// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentPlansRequestTag } from "./ListExperimentPlansRequestTag";


export class ListExperimentPlansRequest extends $dara.Model {
  /**
   * @remarks
   * Creation Time Sorting Rule
   * 
   * @example
   * desc
   */
  creatTimeOrder?: string;
  /**
   * @remarks
   * End Time Sorting Rule
   * 
   * @example
   * desc
   */
  endTimeOrder?: string;
  /**
   * @remarks
   * Page Number
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Execution Status
   */
  planTaskStatus?: string[];
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aekzij65sf2rr5i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Resource ID
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Resource
   */
  resourceName?: string[];
  /**
   * @remarks
   * Number of Items
   * 
   * @example
   * 100
   */
  size?: number;
  /**
   * @remarks
   * Start Time Sorting Rule
   * 
   * @example
   * desc
   */
  startTimeOrder?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListExperimentPlansRequestTag[];
  /**
   * @remarks
   * Template Id
   * 
   * @example
   * 96
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      creatTimeOrder: 'CreatTimeOrder',
      endTimeOrder: 'EndTimeOrder',
      page: 'Page',
      planTaskStatus: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      size: 'Size',
      startTimeOrder: 'StartTimeOrder',
      tag: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatTimeOrder: 'string',
      endTimeOrder: 'string',
      page: 'number',
      planTaskStatus: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceId: 'number',
      resourceName: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
      startTimeOrder: 'string',
      tag: { 'type': 'array', 'itemType': ListExperimentPlansRequestTag },
      templateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planTaskStatus)) {
      $dara.Model.validateArray(this.planTaskStatus);
    }
    if(Array.isArray(this.resourceName)) {
      $dara.Model.validateArray(this.resourceName);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

