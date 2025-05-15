// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentPlansShrinkRequest extends $dara.Model {
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
  planTaskStatusShrink?: string;
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
  resourceNameShrink?: string;
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
  tagShrink?: string;
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
      planTaskStatusShrink: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceNameShrink: 'ResourceName',
      size: 'Size',
      startTimeOrder: 'StartTimeOrder',
      tagShrink: 'Tag',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatTimeOrder: 'string',
      endTimeOrder: 'string',
      page: 'number',
      planTaskStatusShrink: 'string',
      resourceGroupId: 'string',
      resourceId: 'number',
      resourceNameShrink: 'string',
      size: 'number',
      startTimeOrder: 'string',
      tagShrink: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

