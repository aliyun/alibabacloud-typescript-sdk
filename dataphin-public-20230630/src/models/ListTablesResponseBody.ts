// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyPageResultTableListStreamTableConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration item.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyPageResultTableList extends $dara.Model {
  /**
   * @remarks
   * The asset inventory tags.
   */
  assetTagList?: string[];
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 2011
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * LD_test01
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The table comment.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 30011211
   */
  creator?: string;
  /**
   * @remarks
   * The data domain ID.
   * 
   * @example
   * 211
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The subject area name.
   * 
   * @example
   * 211
   */
  dataDomainName?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @remarks
   * The table display name.
   * 
   * @example
   * Student
   */
  displayName?: string;
  /**
   * @remarks
   * The environment. Valid values: dev and prod.
   * 
   * @example
   * dev
   */
  env?: string;
  /**
   * @remarks
   * The file ID used to navigate to the ODM model.
   * 
   * @example
   * 2
   */
  fileId?: string;
  /**
   * @remarks
   * The table GUID.
   * 
   * @example
   * 10011
   */
  guid?: string;
  /**
   * @remarks
   * Specifies whether the project or business version to which the table belongs is in Basic mode.
   */
  isBasicMode?: boolean;
  /**
   * @remarks
   * Specifies whether the table is a partitioned table.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The time when the table DDL was last modified.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The time when the table data was last updated.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastDmlTime?: string;
  /**
   * @remarks
   * The time when the data was last viewed.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  lastQueryTime?: string;
  /**
   * @remarks
   * The lifecycle of the table, in days.
   * 
   * @example
   * 30
   */
  lifeCycle?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * t_test01
   */
  name?: string;
  /**
   * @remarks
   * The user ID of the table owner in Dataphin. This parameter may be empty if the owner is not bound.
   * 
   * @example
   * 30011211
   */
  owner?: string;
  /**
   * @remarks
   * The parent model ID used to navigate to the ODM model.
   * 
   * @example
   * 1
   */
  parentModelId?: string;
  /**
   * @remarks
   * The logical project ID.
   * 
   * @example
   * 1011
   */
  projectId?: number;
  /**
   * @remarks
   * The logical project name.
   * 
   * @example
   * testPrj
   */
  projectName?: string;
  /**
   * @remarks
   * The security classification.
   * 
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @remarks
   * The abbreviation of the security classification name.
   * 
   * @example
   * High
   */
  securityLevelAbbreviation?: string;
  /**
   * @remarks
   * The security classification name.
   * 
   * @example
   * High
   */
  securityLevelName?: string;
  /**
   * @remarks
   * The storage type. Valid values: HIVE and MAX_COMPUTE.
   * 
   * @example
   * HIVE
   */
  storageType?: string;
  /**
   * @remarks
   * The dynamic properties of the real-time metatable.
   */
  streamTableConfig?: ListTablesResponseBodyPageResultTableListStreamTableConfig[];
  /**
   * @remarks
   * The total storage size of the table, in bytes.
   * 
   * @example
   * 10241024
   */
  tableSizeInBytes?: number;
  /**
   * @remarks
   * The number of visits in the last 30 days.
   * 
   * @example
   * 22
   */
  visitCount30d?: number;
  static names(): { [key: string]: string } {
    return {
      assetTagList: 'AssetTagList',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataDomainId: 'DataDomainId',
      dataDomainName: 'DataDomainName',
      dataSourceId: 'DataSourceId',
      displayName: 'DisplayName',
      env: 'Env',
      fileId: 'FileId',
      guid: 'Guid',
      isBasicMode: 'IsBasicMode',
      isPartitionTable: 'IsPartitionTable',
      lastDdlTime: 'LastDdlTime',
      lastDmlTime: 'LastDmlTime',
      lastQueryTime: 'LastQueryTime',
      lifeCycle: 'LifeCycle',
      name: 'Name',
      owner: 'Owner',
      parentModelId: 'ParentModelId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      securityLevel: 'SecurityLevel',
      securityLevelAbbreviation: 'SecurityLevelAbbreviation',
      securityLevelName: 'SecurityLevelName',
      storageType: 'StorageType',
      streamTableConfig: 'StreamTableConfig',
      tableSizeInBytes: 'TableSizeInBytes',
      visitCount30d: 'VisitCount30d',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetTagList: { 'type': 'array', 'itemType': 'string' },
      bizUnitId: 'number',
      bizUnitName: 'string',
      comment: 'string',
      createTime: 'string',
      creator: 'string',
      dataDomainId: 'number',
      dataDomainName: 'string',
      dataSourceId: 'number',
      displayName: 'string',
      env: 'string',
      fileId: 'string',
      guid: 'string',
      isBasicMode: 'boolean',
      isPartitionTable: 'boolean',
      lastDdlTime: 'string',
      lastDmlTime: 'string',
      lastQueryTime: 'string',
      lifeCycle: 'number',
      name: 'string',
      owner: 'string',
      parentModelId: 'string',
      projectId: 'number',
      projectName: 'string',
      securityLevel: 'number',
      securityLevelAbbreviation: 'string',
      securityLevelName: 'string',
      storageType: 'string',
      streamTableConfig: { 'type': 'array', 'itemType': ListTablesResponseBodyPageResultTableListStreamTableConfig },
      tableSizeInBytes: 'number',
      visitCount30d: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetTagList)) {
      $dara.Model.validateArray(this.assetTagList);
    }
    if(Array.isArray(this.streamTableConfig)) {
      $dara.Model.validateArray(this.streamTableConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The table list.
   */
  tableList?: ListTablesResponseBodyPageResultTableList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      tableList: 'TableList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableList: { 'type': 'array', 'itemType': ListTablesResponseBodyPageResultTableList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP response code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListTablesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListTablesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

