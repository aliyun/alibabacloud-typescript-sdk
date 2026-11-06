// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobPlansRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobPlansRequest extends $dara.Model {
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
  tag?: ListJobPlansRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': ListJobPlansRequestTag },
      templateId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

