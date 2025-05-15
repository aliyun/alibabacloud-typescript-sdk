// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanResponseBodyDataPlanPipeline } from "./GetExperimentPlanResponseBodyDataPlanPipeline";
import { GetExperimentPlanResponseBodyDataTags } from "./GetExperimentPlanResponseBodyDataTags";


export class GetExperimentPlanResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-07-07 02:08:54
   */
  createTime?: string;
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
   * Test plan pipeline
   */
  planPipeline?: GetExperimentPlanResponseBodyDataPlanPipeline[];
  /**
   * @remarks
   * Resource group ID
   * 
   * @example
   * rg-acfmvmpzi7lmxhq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Associated resource ID
   * 
   * @example
   * 260860230684
   */
  resourceId?: number;
  /**
   * @remarks
   * The tag.
   */
  tags?: GetExperimentPlanResponseBodyDataTags[];
  /**
   * @remarks
   * Associated test plan template ID
   * 
   * @example
   * 2162
   */
  templateId?: number;
  /**
   * @remarks
   * Associated test plan template name
   * 
   * @example
   * MM
   */
  templateName?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-07-07 02:08:54
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      planId: 'PlanId',
      planPipeline: 'PlanPipeline',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      planId: 'number',
      planPipeline: { 'type': 'array', 'itemType': GetExperimentPlanResponseBodyDataPlanPipeline },
      resourceGroupId: 'string',
      resourceId: 'number',
      tags: { 'type': 'array', 'itemType': GetExperimentPlanResponseBodyDataTags },
      templateId: 'number',
      templateName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.planPipeline)) {
      $dara.Model.validateArray(this.planPipeline);
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

