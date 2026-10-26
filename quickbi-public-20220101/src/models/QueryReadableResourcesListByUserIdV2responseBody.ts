// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory to which it belongs.
   * 
   * @example
   * a3eecab7-618d-4f9f-*****
   */
  id?: string;
  /**
   * @remarks
   * The name of the directory to which it belongs.
   * 
   * @example
   * asdas
   */
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of directory IDs, separated by『/』.
   * 
   * @example
   * 88b680****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of directory names, separated by『/』.
   * 
   * @example
   * asdas/safas
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

export class QueryReadableResourcesListByUserIdV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Timestamp of creation in milliseconds.
   * 
   * @example
   * 1611023338000
   */
  createTime?: string;
  /**
   * @remarks
   * Work remarks.
   * 
   * @example
   * asdas
   */
  description?: string;
  /**
   * @remarks
   * The directory structure where the work is located.
   */
  directory?: QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory;
  /**
   * @remarks
   * Alibaba Cloud account name of the modifier.
   * 
   * @example
   * asdas
   */
  modifyName?: string;
  /**
   * @remarks
   * Timestamp of the last modification in milliseconds.
   * 
   * @example
   * 1530078690000
   */
  modifyTime?: string;
  /**
   * @remarks
   * The UserID of the work owner in Quick BI.
   * 
   * @example
   * fe67f61a35a94b7da1a34ba174a7****
   */
  ownerId?: string;
  /**
   * @remarks
   * Alibaba Cloud account name of the owner.
   * 
   * @example
   * asdas
   */
  ownerName?: string;
  /**
   * @remarks
   * Security policy for collaborative work. Values: - 0: Private - 12: Authorize specific members - 1 or 11: Authorize all space members
   * >- If you are using the old version of permissions, the return value is 1. - If you are using the new version of permissions, the return value is 11.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * Report status. Possible values:
   * - 0: Unpublished
   * - 1: Published
   * - 2: Modified but not published
   * - 3: Offline
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Third-party embedding status. Possible values:
   * - 0: Embedding not enabled
   * - 1: Embedding enabled
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
   * asdas
   */
  workName?: string;
  /**
   * @remarks
   * Work type. Possible values:
   * - DATAPRODUCT: Data Portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * - dashboardOfflineQuery: Self-service Data Extraction
   * - SCREEN: Data Wall
   * - DATAFORM: Data Entry
   * - ANALYSIS: Ad-hoc Analysis
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
   * ccd3428c-****-****-a608-26bae29dffee
   */
  worksId?: string;
  /**
   * @remarks
   * ID of the workspace to which the work belongs.
   * 
   * @example
   * c5f86ad2-ef53-4c51-8720-162ecfdb****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * asdas
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
      directory: QueryReadableResourcesListByUserIdV2ResponseBodyResultDirectory,
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

export class QueryReadableResourcesListByUserIdV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C********05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the query result.
   */
  result?: QueryReadableResourcesListByUserIdV2ResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: Request succeeded
   * - false: Request failed
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
      result: { 'type': 'array', 'itemType': QueryReadableResourcesListByUserIdV2ResponseBodyResult },
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

