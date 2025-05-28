// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySharesToUserListResponseBodyResultDirectory } from "./QuerySharesToUserListResponseBodyResultDirectory";


export class QuerySharesToUserListResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description of the test report
   */
  description?: string;
  /**
   * @remarks
   * Information about the directory where the work is located.
   */
  directory?: QuerySharesToUserListResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * 13855265****@163.com
   */
  modifyName?: string;
  /**
   * @remarks
   * The timestamp of the modification time in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The UserID of the work owner in Quickbi.
   * 
   * @example
   * 74f5527216d14e9892245320ebf2****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * w****@aliyun.com
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policies for collaborative authorization of works. Valid values:
   * 
   * *   0: private
   * *   12: Authorize specified members
   * *   1 or 11: Authorize all workspace members
   * 
   * > 
   * 
   * *   If you use legacy permissions, the return value is 1.
   * 
   * *   If you use the new permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The publishing status of the report. Valid values:
   * 
   * *   0: unpublished
   * *   1: published
   * *   2: modified but not published
   * *   3: unpublished
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Valid values:
   * 
   * *   0: No embedding is enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 0
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * *   DATAPRODUCT: BI portal
   * *   PAGE: Dashboard
   * *   FULLPAGE: full-screen dashboards
   * *   REPORT: workbook
   * *   dashboardOfflineQuery: self-service data retrieval
   * 
   * @example
   * DATAFORM
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the operations report.
   * 
   * @example
   * 97f7f4c1-543a-4069-8e8d-a56cfcd6****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the report belongs.
   * 
   * @example
   * c5f86ad2-ef53-4c51-8720-162ecfdb****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the report belongs.
   * 
   * @example
   * Return to Professional Edition
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      directory: 'Directory',
      modifyName: 'ModifyName',
      modifyTime: 'ModifyTime',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      directory: QuerySharesToUserListResponseBodyResultDirectory,
      modifyName: 'string',
      modifyTime: 'string',
      ownerId: 'string',
      ownerName: 'string',
      securityLevel: 'string',
      status: 'number',
      thirdPartAuthFlag: 'number',
      workName: 'string',
      workType: 'string',
      worksId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

