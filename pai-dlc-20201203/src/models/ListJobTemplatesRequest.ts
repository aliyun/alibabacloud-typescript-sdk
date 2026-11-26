// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the list by fuzzy match on the template description.
   * 
   * @example
   * PyTorch training template
   */
  description?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
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
   * The number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Filters the list by exact template ID.
   * 
   * @example
   * tpl1****6jcq2q
   */
  templateId?: string;
  /**
   * @remarks
   * Filters the list by fuzzy match on the template name.
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 20**************02
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4***9
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      templateId: 'string',
      templateName: 'string',
      userId: 'string',
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

