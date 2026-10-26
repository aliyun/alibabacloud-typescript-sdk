// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWorksResponseBodyResultDirectory extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  id?: string;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * Test folder
   */
  name?: string;
  /**
   * @remarks
   * The hierarchical structure of the folder IDs, separated by forward slashes (/).
   * 
   * @example
   * 83d37ba6-d909-48a2-a517-f4d05c3a****
   */
  pathId?: string;
  /**
   * @remarks
   * The hierarchical structure of the folder names, separated by forward slashes (/).
   * 
   * @example
   * Test folder
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

export class QueryWorksResponseBodyResultGlobalParamVoList extends $dara.Model {
  /**
   * @remarks
   * The field type. Valid values:
   * 
   * - enum: Enumeration.
   * - string: Text.
   * - number: Numeric value.
   * - datetime: Date and time.
   * 
   * @example
   * string
   */
  dataType?: string;
  /**
   * @remarks
   * The alias of the parameter.
   * 
   * @example
   * lastQueryAt
   */
  paramAlias?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * lastQueryAt
   */
  paramName?: string;
  /**
   * @remarks
   * Indicates whether the parameter is required.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      paramAlias: 'ParamAlias',
      paramName: 'ParamName',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      paramAlias: 'string',
      paramName: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The third-party embedding status. Valid values:
   * 
   * - 0: Embedding is not enabled.
   * - 1: Embedding is enabled.
   * 
   * @example
   * 0
   */
  auth3rdFlag?: number;
  /**
   * @remarks
   * The description of the data work.
   * 
   * @example
   * Remark
   */
  description?: string;
  /**
   * @remarks
   * The folder to which the data work belongs.
   */
  directory?: QueryWorksResponseBodyResultDirectory;
  /**
   * @remarks
   * The global parameter array.
   */
  globalParamVoList?: QueryWorksResponseBodyResultGlobalParamVoList[];
  /**
   * @remarks
   * The millisecond-level timestamp when the data work was created.
   * 
   * @example
   * 1496651577000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The millisecond-level timestamp when the data work was updated.
   * 
   * @example
   * 1496651577000
   */
  gmtModify?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the user who updated the data work.
   * 
   * @example
   * Zhang San
   */
  modifyName?: string;
  /**
   * @remarks
   * The Quick BI user ID of the data work owner.
   * 
   * @example
   * 9187a612aa474e2a8ac1414d5529****
   */
  ownerId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account name of the data work owner.
   * 
   * @example
   * Zhang San
   */
  ownerName?: string;
  /**
   * @remarks
   * Indicates whether the data work is public.
   * 
   * @example
   * true
   */
  publicFlag?: boolean;
  /**
   * @remarks
   * The expiration date for public access to the report, represented as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1721366354000
   */
  publicInvalidTime?: number;
  /**
   * @remarks
   * The security policy for collaborative authorization of the data work. Valid values:
   * - 0: Private.
   * - 12: Authorized to specified members.
   * - 1 or 11: Authorized to all workspace members.
   * 
   * >- If you use the legacy permissions, the value 1 is returned.
   * >- If you use the new permissions, the value 11 is returned.
   * 
   * @example
   * 0
   */
  securityLevel?: string;
  /**
   * @remarks
   * The status of the report. Valid values:
   * 
   * - 0: Unpublished.
   * - 1: Published.
   * - 2: Modified but unpublished.
   * - 3: Offline.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The name of the data work.
   * 
   * @example
   * Test report
   */
  workName?: string;
  /**
   * @remarks
   * The type of the data work to query. Leave this parameter empty to query all types. Valid values:
   * 
   * - DATAPRODUCT: Data portal.
   * - PAGE: Dashboard.
   * - FULLPAGE: Full-screen dashboard.
   * - REPORT: Workbook.
   * - dashboardOfflineQuery: Self-service data retrieval.
   * 
   * @example
   * PAGE
   */
  workType?: string;
  /**
   * @remarks
   * The ID of the data work.
   * 
   * @example
   * 95296e95-ca89-4c7d-8af9-dedf0ad0****
   */
  worksId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the data work belongs.
   * 
   * @example
   * 87c6b145-090c-43e1-9426-8f93be23****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the data work belongs.
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
      globalParamVoList: 'GlobalParamVoList',
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
      directory: QueryWorksResponseBodyResultDirectory,
      globalParamVoList: { 'type': 'array', 'itemType': QueryWorksResponseBodyResultGlobalParamVoList },
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
    if(Array.isArray(this.globalParamVoList)) {
      $dara.Model.validateArray(this.globalParamVoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryWorksResponseBody extends $dara.Model {
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
   * The details of the data work.
   */
  result?: QueryWorksResponseBodyResult;
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
      result: QueryWorksResponseBodyResult,
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

