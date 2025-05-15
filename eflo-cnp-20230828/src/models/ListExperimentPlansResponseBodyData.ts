// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentPlansResponseBodyDataTags } from "./ListExperimentPlansResponseBodyDataTags";


export class ListExperimentPlansResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  createTime?: string;
  /**
   * @remarks
   * End Time
   * 
   * @example
   * 2024-07-08 10:22:42
   */
  endTime?: string;
  /**
   * @remarks
   * Plan ID
   * 
   * @example
   * 189
   */
  planId?: number;
  /**
   * @remarks
   * Test Plan Execution Status
   */
  planTaskStatus?: { [key: string]: number };
  /**
   * @remarks
   * Resource Group ID
   * 
   * @example
   * rg-aek5behqmwbfhuy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 189
   */
  resourceId?: number;
  /**
   * @remarks
   * Associated Resource Name
   * 
   * @example
   * q_ecs_xpec_postpay_c
   */
  resourceName?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  startTime?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: ListExperimentPlansResponseBodyDataTags[];
  /**
   * @remarks
   * Associated Test Plan Template ID
   * 
   * @example
   * 6
   */
  templateId?: number;
  /**
   * @remarks
   * Associated Test Plan Template Name
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * Update Time
   * 
   * @example
   * 2024-07-08 10:12:42
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      planId: 'PlanId',
      planTaskStatus: 'PlanTaskStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      startTime: 'StartTime',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      planId: 'number',
      planTaskStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      resourceGroupId: 'string',
      resourceId: 'number',
      resourceName: 'string',
      startTime: 'string',
      tags: { 'type': 'array', 'itemType': ListExperimentPlansResponseBodyDataTags },
      templateId: 'number',
      templateName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.planTaskStatus) {
      $dara.Model.validateMap(this.planTaskStatus);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

