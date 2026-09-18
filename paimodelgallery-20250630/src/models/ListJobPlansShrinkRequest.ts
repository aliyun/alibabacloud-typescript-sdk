// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobPlansShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to filter by template association. Valid values:
   * - true: Returns only scenario-specific job plans that have a template.
   * - false: Returns only general-purpose job plans that do not have a template.
   * 
   * If this parameter is not specified, no filtering is applied. If both this parameter and TemplateId are specified, the value of TemplateId takes precedence.
   * 
   * @example
   * true
   */
  hasTemplate?: boolean;
  /**
   * @remarks
   * The name of the job plan.
   * 
   * @example
   * JobPlan1
   */
  jobPlanName?: string;
  /**
   * @remarks
   * The type of the job plan.
   * 
   * @example
   * Distillation
   */
  jobPlanType?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The distillation template ID. Filters results to return only scenario-specific tasks that use the specified template.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 32495
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      hasTemplate: 'HasTemplate',
      jobPlanName: 'JobPlanName',
      jobPlanType: 'JobPlanType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      tagShrink: 'Tag',
      templateId: 'TemplateId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasTemplate: 'boolean',
      jobPlanName: 'string',
      jobPlanType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      tagShrink: 'string',
      templateId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

