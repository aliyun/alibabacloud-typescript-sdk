// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobPlansShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  hasTemplate?: boolean;
  jobPlanName?: string;
  /**
   * @example
   * Distillation
   */
  jobPlanType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  tagShrink?: string;
  /**
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
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

