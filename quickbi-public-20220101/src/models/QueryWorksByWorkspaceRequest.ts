// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the work. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * 
   * @example
   * PAGE
   */
  worksType?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksType: 'WorksType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      status: 'number',
      thirdPartAuthFlag: 'number',
      worksType: 'string',
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

