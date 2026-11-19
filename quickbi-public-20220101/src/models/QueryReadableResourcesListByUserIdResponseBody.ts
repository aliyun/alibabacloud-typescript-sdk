// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  id?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * Test directory
   */
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of directory IDs, separated by forward slashes (/).
   * 
   * @example
   * e4276ea5-b232-4fb1-8f0f-efcee4a2****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of directory names, separated by forward slashes (/).
   * 
   * @example
   * Test directory
   */
  pathName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pathId: 'PathId',
      pathName: 'PathName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pathId: 'string',
      pathName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReadableResourcesListByUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The millisecond timestamp of the creation time.
   * 
   * @example
   * 1611023338000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the work.
   * 
   * @example
   * Remarks
   */
  description?: string;
  /**
   * @remarks
   * The directory structure where the work is located.
   */
  directory?: QueryReadableResourcesListByUserIdResponseBodyResultDirectory;
  /**
   * @remarks
   * The Alibaba Cloud account name of the user who last modified the work.
   * 
   * @example
   * Li Si
   */
  modifyName?: string;
  /**
   * @remarks
   * The millisecond timestamp of the last modification time.
   * 
   * @example
   * 1611023338000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The Quick BI user ID of the work owner.
   * 
   * @example
   * 46e5374665ba4b679ee22e2a2927****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * The security policy for collaborative authorization of the work. Valid values:
   * - 0: private
   * - 12: authorized to specified members
   * - 1 or 11: authorized to all workspace members
   * 
   * > - If you use the legacy permission model, the value 1 is returned.
   * > - If you use the new permission model, the value 11 is returned.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * - 0: unpublished
   * - 1: published
   * - 2: modified but unpublished
   * - 3: offline
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The third-party embedding status. Valid values:
   * 
   * - 0: Embedding is not enabled.
   * - 1: Embedding is enabled.
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
   * Company region table
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * - DATAPRODUCT: Data portal
   * - PAGE: Dashboard (legacy)
   * - FULLPAGE: Full-screen dashboard
   * - REPORT: Workbook
   * - DASHBOARD: Dashboard (new)
   * - DATAFORM: Data entry form
   * - dashboardOfflineQuery: Ad hoc query
   * - ANALYSIS: Ad hoc analysis
   * - SCREEN: Data screen
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
   * Test workspace
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

export class QueryReadableResourcesListByUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * The list of works that the user has permission to view.
   */
  result?: QueryReadableResourcesListByUserIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryReadableResourcesListByUserIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

