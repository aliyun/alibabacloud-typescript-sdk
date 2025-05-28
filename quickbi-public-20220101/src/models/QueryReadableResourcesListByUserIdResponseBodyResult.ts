// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryReadableResourcesListByUserIdResponseBodyResultDirectory } from "./QueryReadableResourcesListByUserIdResponseBodyResultDirectory";


export class QueryReadableResourcesListByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the creation time in milliseconds.
   * 
   * @example
   * 1611023338000
   */
  createTime?: string;
  /**
   * @remarks
   * Remarks on the work.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The directory structure in which the work is located.
   */
  directory?: QueryReadableResourcesListByUserIdResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the Alibaba Cloud account to which the modifier belongs.
   * 
   * @example
   * Li Si
   */
  modifyName?: string;
  /**
   * @remarks
   * The timestamp of the modification time in milliseconds.
   * 
   * @example
   * 1611023338000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Quick BI UserID of the work owner.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the owner.
   * 
   * @example
   * Tom
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
   * The status of the report. Valid values:
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
   * *   0: The embed service is not enabled.
   * *   1: Embed is enabled.
   * 
   * @example
   * 1
   */
  thirdPartAuthFlag?: number;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Company Region Table
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
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the work.
   * 
   * @example
   * 03366b16-69ce-43c8-b782-56c2f6ec****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * 89713491-cb4f-4579-b889-e82c35f1****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * Test Workspace
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
      directory: QueryReadableResourcesListByUserIdResponseBodyResultDirectory,
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

