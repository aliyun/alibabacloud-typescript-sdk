// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptsRequest extends $dara.Model {
  /**
   * @remarks
   * The prompt template framework type.
   * 
   * @example
   * ICIO
   */
  frameworkType?: string;
  /**
   * @remarks
   * The sorting order for the specified field during paging. Default value: ASC.
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The page size. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * - Name: the run name.
   * - GmtCreateTime (default): the run creation time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID. For information about how to obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 145883
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      frameworkType: 'FrameworkType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frameworkType: 'string',
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
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

