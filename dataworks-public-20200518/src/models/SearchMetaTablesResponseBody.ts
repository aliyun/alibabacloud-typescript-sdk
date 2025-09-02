// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMetaTablesResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster.
   * 
   * @example
   * abc
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the metadatabase.
   * 
   * @example
   * abc
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the metatable. Valid values:
   * 
   * *   0: table
   * *   1: view
   * 
   * @example
   * 0
   */
  entityType?: number;
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   1: production environment
   * *   0: development environment
   * 
   * @example
   * 1
   */
  envType?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace owner.
   * 
   * @example
   * 123
   */
  ownerId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 323
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The schema information of the table. You must configure this parameter if you enable the three-layer model of MaxCompute.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The GUID of the metatable.
   * 
   * @example
   * odps.engine_name.test_name
   */
  tableGuid?: string;
  /**
   * @remarks
   * The name of the metatable.
   * 
   * @example
   * test_name
   */
  tableName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 12345
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      entityType: 'EntityType',
      envType: 'EnvType',
      ownerId: 'OwnerId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      schema: 'Schema',
      tableGuid: 'TableGuid',
      tableName: 'TableName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      entityType: 'number',
      envType: 'number',
      ownerId: 'string',
      projectId: 'number',
      projectName: 'string',
      schema: 'string',
      tableGuid: 'string',
      tableName: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of metatables.
   */
  dataEntityList?: SearchMetaTablesResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of metatables.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': SearchMetaTablesResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMetaTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The search results.
   */
  data?: SearchMetaTablesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1031203110005
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified parameters are invalid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SearchMetaTablesResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

