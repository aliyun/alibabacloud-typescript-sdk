// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByOrganizationResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
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
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
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

export class QueryWorksByOrganizationResponseBodyResultData extends $dara.Model {
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
  auth3rdFlag?: number;
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
   * The directory to which the work belongs.
   */
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  /**
   * @remarks
   * The timestamp when the work was created, in milliseconds.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The timestamp when the work was last modified, in milliseconds.
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the user who last modified the work.
   * 
   * @example
   * John
   */
  modifyName?: string;
  /**
   * @remarks
   * The Quick BI user ID of the work owner.
   * 
   * @example
   * The name of the workspace to which the work belongs
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work owner.
   * 
   * @example
   * Jane
   */
  ownerName?: string;
  /**
   * @remarks
   * Indicates whether the work is public.
   * 
   * @example
   * true
   */
  publicFlag?: boolean;
  /**
   * @remarks
   * The expiration date for the public report, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1721366354000
   */
  publicInvalidTime?: number;
  /**
   * @remarks
   * The security policy for collaborative authorization of the work. Valid values:
   * - 0: Private.
   * - 12: Authorized to specified members.
   * - 1 or 11: Authorized to all workspace members.
   * 
   * >- If you use the legacy permissions, the return value is 1.
   * >- If you use the new permissions, the return value is 11.
   * 
   * @example
   * 1
   */
  securityLevel?: string;
  /**
   * @remarks
   * The report status. Valid values:
   * 
   * - 0: Unpublished.
   * - 1: Published.
   * - 2: Modified but not published.
   * - 3: Offline.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The name of the work.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Valid values:
   * 
   * - DATAPRODUCT: data portal
   * - PAGE: dashboard
   * - REPORT: workbook
   * - dashboardOfflineQuery: custom query
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
   * 897ce25e-****-****-af84-d13c5610****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the work belongs.
   * 
   * @example
   * The Alibaba Cloud account name of the user who last modified the work
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
      auth3rdFlag: 'Auth3rdFlag',
      description: 'Description',
      directory: 'Directory',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      modifyName: 'ModifyName',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      publicFlag: 'PublicFlag',
      publicInvalidTime: 'PublicInvalidTime',
      securityLevel: 'SecurityLevel',
      status: 'Status',
      workName: 'WorkName',
      workType: 'WorkType',
      worksId: 'WorksId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth3rdFlag: 'number',
      description: 'string',
      directory: QueryWorksByOrganizationResponseBodyResultDataDirectory,
      gmtCreate: 'string',
      gmtModify: 'string',
      modifyName: 'string',
      ownerId: 'string',
      ownerName: 'string',
      publicFlag: 'boolean',
      publicInvalidTime: 'number',
      securityLevel: 'string',
      status: 'number',
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

export class QueryWorksByOrganizationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The details of the works list.
   */
  data?: QueryWorksByOrganizationResponseBodyResultData[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page specified in the request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalNum: 'TotalNum',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryWorksByOrganizationResponseBodyResultData },
      pageNum: 'number',
      pageSize: 'number',
      totalNum: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksByOrganizationResponseBody extends $dara.Model {
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
   * The list of all works in the organization that match the request conditions.
   */
  result?: QueryWorksByOrganizationResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
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
      result: QueryWorksByOrganizationResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

