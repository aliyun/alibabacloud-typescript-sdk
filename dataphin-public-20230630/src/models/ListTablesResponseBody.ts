// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyPageResultTableListStreamTableConfig extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
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
  assetTagList?: string[];
  /**
   * @example
   * 2011
   */
  bizUnitId?: number;
  /**
   * @example
   * LD_test01
   */
  bizUnitName?: string;
  /**
   * @example
   * test
   */
  comment?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30011211
   */
  creator?: string;
  /**
   * @example
   * 211
   */
  dataDomainId?: number;
  /**
   * @example
   * 211
   */
  dataDomainName?: string;
  /**
   * @example
   * 3301
   */
  dataSourceId?: number;
  /**
   * @example
   * 学生
   */
  displayName?: string;
  /**
   * @example
   * dev
   */
  env?: string;
  /**
   * @example
   * 2
   */
  fileId?: string;
  /**
   * @example
   * 10011
   */
  guid?: string;
  isBasicMode?: boolean;
  isPartitionTable?: boolean;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastDmlTime?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  lastQueryTime?: string;
  /**
   * @example
   * 30
   */
  lifeCycle?: number;
  /**
   * @example
   * t_test01
   */
  name?: string;
  /**
   * @example
   * 30011211
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  parentModelId?: string;
  /**
   * @example
   * 1011
   */
  projectId?: number;
  /**
   * @example
   * testPrj
   */
  projectName?: string;
  /**
   * @example
   * 1
   */
  securityLevel?: number;
  /**
   * @example
   * 高级
   */
  securityLevelAbbreviation?: string;
  /**
   * @example
   * 高级
   */
  securityLevelName?: string;
  /**
   * @example
   * HIVE
   */
  storageType?: string;
  streamTableConfig?: ListTablesResponseBodyPageResultTableListStreamTableConfig[];
  /**
   * @example
   * 10241024
   */
  tableSizeInBytes?: number;
  /**
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
  tableList?: ListTablesResponseBodyPageResultTableList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListTablesResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

