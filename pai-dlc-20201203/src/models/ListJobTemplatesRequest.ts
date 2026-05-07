// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobTemplatesRequest extends $dara.Model {
  /**
   * @example
   * desc
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
  /**
   * @remarks
   * 按模板 ID 精确筛选。
   * 
   * @example
   * tpl1****6jcq2q
   */
  templateId?: string;
  /**
   * @remarks
   * 按模板名称模糊筛选。
   * 
   * @example
   * job-template-example-1778047****
   */
  templateName?: string;
  /**
   * @remarks
   * 按创建者用户 ID 筛选。
   * 
   * @example
   * 20**************02
   */
  userId?: string;
  /**
   * @remarks
   * 工作空间 ID。如何获取工作空间 ID，请参见 ListWorkspaces。
   * 
   * This parameter is required.
   * 
   * @example
   * 4***9
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
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

