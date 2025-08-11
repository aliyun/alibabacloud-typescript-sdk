// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksByOrganizationResponseBodyResultDataDirectory extends $dara.Model {
  /**
   * @remarks
   * ID of the directory to which it belongs.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  /**
   * @remarks
   * Name of the directory to which it belongs.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Hierarchical structure of the directory ID, separated by『/』.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * Hierarchical structure of the directory name, separated by『/』.
   * 
   * @example
   * Attention
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
   * Third-party embedding status. Possible values:
   * 
   * - 0: Embedding not enabled
   * - 1: Embedding enabled
   * 
   * @example
   * 1
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * Notes for the work.
   * 
   * @example
   * Attention
   */
  description?: string;
  /**
   * @remarks
   * Directory to which the work belongs.
   */
  directory?: QueryWorksByOrganizationResponseBodyResultDataDirectory;
  /**
   * @remarks
   * Timestamp (in milliseconds) when the work was created.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Millisecond-level timestamp of the work modification.
   * 
   * @example
   * 1572334870000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work modifier.
   * 
   * @example
   * test
   */
  modifyName?: string;
  /**
   * @remarks
   * The UserID of the work\\"s owner in Quick BI.
   * 
   * @example
   * test
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the work\\"s owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * Whether it is public
   * 
   * @example
   * true
   */
  publicFlag?: boolean;
  /**
   * @remarks
   * The expiration date for the report to be made public
   * 
   * @example
   * 1721366354000
   */
  publicInvalidTime?: number;
  /**
   * @remarks
   * The security policy for collaborative authorization of the work. Values:
   * - 0: Private
   * - 12: Authorize specific members
   * - 1 or 11: Authorize all space members
   * 
   * >- If you are using the old version of permissions, the returned value is 1.
   * >- If you are using the new version of permissions, the returned value is 11.
   * 
   * @example
   * 1
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Value range:
   * 
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
   * The name of the work.
   * 
   * @example
   * test
   */
  workName?: string;
  /**
   * @remarks
   * The type of the work. Value range:
   * 
   * - DATAPRODUCT: Data portal
   * - PAGE: Dashboard
   * - REPORT: Spreadsheet
   * - dashboardOfflineQuery: Self-service data retrieval
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
   * test
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the work belongs.
   * 
   * @example
   * test
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
   * Details of the work list.
   */
  data?: QueryWorksByOrganizationResponseBodyResultData[];
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of rows per page set when requesting the interface.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of rows.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  /**
   * @remarks
   * Total number of pages.
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
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns a list of all works under the organization that meet the request criteria.
   */
  result?: QueryWorksByOrganizationResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
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

