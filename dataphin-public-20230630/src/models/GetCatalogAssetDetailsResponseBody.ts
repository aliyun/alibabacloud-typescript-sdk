// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity extends $dara.Model {
  /**
   * @example
   * 7137404445633152
   */
  bizUnitId?: number;
  /**
   * @example
   * LD_train
   */
  bizUnitName?: string;
  /**
   * @example
   * 上药erp数据源
   */
  dimensionDisplayName?: string;
  /**
   * @example
   * 68014359
   */
  dimensionId?: number;
  /**
   * @example
   * etl_source
   */
  dimensionName?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      dimensionDisplayName: 'DimensionDisplayName',
      dimensionId: 'DimensionId',
      dimensionName: 'DimensionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitId: 'number',
      bizUnitName: 'string',
      dimensionDisplayName: 'string',
      dimensionId: 'number',
      dimensionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataColumnsStandards extends $dara.Model {
  /**
   * @example
   * hr_person_id
   */
  code?: string;
  /**
   * @example
   * 120350
   */
  id?: number;
  /**
   * @example
   * id
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataColumns extends $dara.Model {
  associatedEntity?: GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity;
  /**
   * @example
   * DIMENSION
   */
  bizType?: string;
  /**
   * @example
   * /交易信息/0000001
   */
  classifyName?: string;
  /**
   * @example
   * double
   */
  dataType?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 门店客流转化率
   */
  displayName?: string;
  /**
   * @example
   * dp_table.300023201.ld_fashion.dws_lulu_location.conversion_rate
   */
  guid?: string;
  /**
   * @example
   * L4
   */
  levelShortName?: string;
  /**
   * @example
   * conversion_rate
   */
  name?: string;
  /**
   * @example
   * 0.0
   */
  qualityScore?: number;
  standards?: GetCatalogAssetDetailsResponseBodyDataColumnsStandards[];
  static names(): { [key: string]: string } {
    return {
      associatedEntity: 'AssociatedEntity',
      bizType: 'BizType',
      classifyName: 'ClassifyName',
      dataType: 'DataType',
      description: 'Description',
      displayName: 'DisplayName',
      guid: 'Guid',
      levelShortName: 'LevelShortName',
      name: 'Name',
      qualityScore: 'QualityScore',
      standards: 'Standards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedEntity: GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity,
      bizType: 'string',
      classifyName: 'string',
      dataType: 'string',
      description: 'string',
      displayName: 'string',
      guid: 'string',
      levelShortName: 'string',
      name: 'string',
      qualityScore: 'number',
      standards: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataColumnsStandards },
    };
  }

  validate() {
    if(this.associatedEntity && typeof (this.associatedEntity as any).validate === 'function') {
      (this.associatedEntity as any).validate();
    }
    if(Array.isArray(this.standards)) {
      $dara.Model.validateArray(this.standards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataCustomAttributes extends $dara.Model {
  /**
   * @example
   * MANAGEMENT
   */
  attrType?: string;
  /**
   * @example
   * gkglbm
   */
  code?: string;
  /**
   * @example
   * 归口管理部门
   */
  name?: string;
  /**
   * @example
   * abc
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attrType: 'AttrType',
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrType: 'string',
      code: 'string',
      name: 'string',
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

export class GetCatalogAssetDetailsResponseBodyDataDirectories extends $dara.Model {
  /**
   * @example
   * 102260
   */
  directoryId?: number;
  /**
   * @example
   * 线上电商平台
   */
  directoryName?: string;
  /**
   * @example
   * 101676
   */
  topicId?: number;
  /**
   * @example
   * 全渠道数据专题
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'number',
      directoryName: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser extends $dara.Model {
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser extends $dara.Model {
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataOwner extends $dara.Model {
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosOwners extends $dara.Model {
  /**
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @example
   * 12345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosProject extends $dara.Model {
  /**
   * @example
   * 6865331517728384
   */
  projectId?: string;
  /**
   * @example
   * fashion_cdm
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfos extends $dara.Model {
  bizUnit?: string;
  /**
   * @example
   * PROD
   */
  env?: string;
  /**
   * @example
   * n_7443633109495119872
   */
  nodeId?: string;
  /**
   * @example
   * 2345
   */
  nodeName?: string;
  /**
   * @example
   * NORMAL
   */
  nodeScheduleType?: string;
  owners?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosOwners[];
  project?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosProject;
  /**
   * @example
   * DLINK
   */
  subBizType?: string;
  static names(): { [key: string]: string } {
    return {
      bizUnit: 'BizUnit',
      env: 'Env',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeScheduleType: 'NodeScheduleType',
      owners: 'Owners',
      project: 'Project',
      subBizType: 'SubBizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnit: 'string',
      env: 'string',
      nodeId: 'string',
      nodeName: 'string',
      nodeScheduleType: 'string',
      owners: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosOwners },
      project: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosProject,
      subBizType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  apiCallMode?: string;
  /**
   * @example
   * 默认API分组
   */
  apiGroupName?: string;
  /**
   * @example
   * 10441
   */
  apiId?: number;
  /**
   * @example
   * 1
   */
  apiRequestMethod?: string;
  /**
   * @example
   * abc
   */
  assetDescription?: string;
  /**
   * @example
   * https://dataphin.poc.lydaas.com/market/catalog/detail/table/...
   */
  assetDetailUrl?: string;
  /**
   * @example
   * abc表
   */
  assetDisplayName?: string;
  /**
   * @example
   * Dataphin-中间层-服饰零售 (LD_Fashion)
   */
  assetFrom?: string;
  /**
   * @example
   * dwd_all.abc
   */
  assetFullName?: string;
  /**
   * @example
   * abc
   */
  assetName?: string;
  assetTags?: string[];
  /**
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @example
   * dataphin演示空间
   */
  biCatalog?: string;
  /**
   * @example
   * 6865277495315392
   */
  bizUnitId?: number;
  /**
   * @example
   * 服饰零售（LD_Fashion）
   */
  bizUnitName?: string;
  /**
   * @example
   * 23
   */
  chartCount?: number;
  /**
   * @example
   * 0
   */
  collectionCount?: number;
  columns?: GetCatalogAssetDetailsResponseBodyDataColumns[];
  /**
   * @example
   * 2024-10-11 16:10:19
   */
  createTime?: string;
  customAttributes?: GetCatalogAssetDetailsResponseBodyDataCustomAttributes[];
  /**
   * @example
   * 49837403
   */
  dataCellId?: string;
  /**
   * @example
   * 课程域
   */
  dataCellName?: string;
  /**
   * @example
   * demo_mysql
   */
  dataSourceName?: string;
  /**
   * @example
   * 7305549302863001856
   */
  datasourceId?: number;
  directories?: GetCatalogAssetDetailsResponseBodyDataDirectories[];
  /**
   * @example
   * 2025-05-22 10:06:20
   */
  firstOnShelveTime?: string;
  firstOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser;
  /**
   * @example
   * 课程
   */
  granularity?: string;
  /**
   * @example
   * dp_ds_table.300023201.7311626611751680256.load_test.abc
   */
  guid?: string;
  instruction?: string;
  isDeleted?: boolean;
  isPartitionTable?: boolean;
  /**
   * @example
   * 2024-10-11 16:10:19
   */
  lastDdlTime?: string;
  /**
   * @example
   * 2024-10-11 16:10:19
   */
  lastDmlTime?: string;
  /**
   * @example
   * 2025-05-22 10:06:20
   */
  lastOnShelveTime?: string;
  lastOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser;
  maintainUserGroups?: string[];
  maintainUserIds?: string[];
  /**
   * @example
   * L3
   */
  maxSecurityLevel?: string;
  /**
   * @example
   * 2024-10-11 16:10:19
   */
  modifyTime?: string;
  owner?: GetCatalogAssetDetailsResponseBodyDataOwner;
  /**
   * @example
   * ds
   */
  partitionKey?: string;
  /**
   * @example
   * employee_id
   */
  primaryKey?: string;
  /**
   * @example
   * ALL_USERS_CAN_VIEW
   */
  profilingReportViewScopeType?: string;
  profilingReportViewScopeUserGroups?: string[];
  profilingReportViewScopeUserIds?: string[];
  /**
   * @example
   * 6865331517728384
   */
  projectId?: number;
  /**
   * @example
   * train
   */
  projectName?: string;
  /**
   * @example
   * 5
   */
  readCount?: number;
  /**
   * @example
   * ALL_USERS_CAN_VIEW
   */
  shelveViewScopeType?: string;
  shelveViewScopeUserGroups?: string[];
  shelveViewScopeUserIds?: string[];
  simpleNodeInfos?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfos[];
  /**
   * @example
   * DIM_NORMAL
   */
  subType?: string;
  /**
   * @example
   * odps.300023201.test.ads_gross
   */
  sumTableGuid?: string;
  /**
   * @example
   * ads_gross
   */
  sumTableName?: string;
  /**
   * @example
   * 36000
   */
  tableLifeCycle?: string;
  /**
   * @example
   * 0
   */
  tableSizeInBytes?: number;
  static names(): { [key: string]: string } {
    return {
      apiCallMode: 'ApiCallMode',
      apiGroupName: 'ApiGroupName',
      apiId: 'ApiId',
      apiRequestMethod: 'ApiRequestMethod',
      assetDescription: 'AssetDescription',
      assetDetailUrl: 'AssetDetailUrl',
      assetDisplayName: 'AssetDisplayName',
      assetFrom: 'AssetFrom',
      assetFullName: 'AssetFullName',
      assetName: 'AssetName',
      assetTags: 'AssetTags',
      assetType: 'AssetType',
      biCatalog: 'BiCatalog',
      bizUnitId: 'BizUnitId',
      bizUnitName: 'BizUnitName',
      chartCount: 'ChartCount',
      collectionCount: 'CollectionCount',
      columns: 'Columns',
      createTime: 'CreateTime',
      customAttributes: 'CustomAttributes',
      dataCellId: 'DataCellId',
      dataCellName: 'DataCellName',
      dataSourceName: 'DataSourceName',
      datasourceId: 'DatasourceId',
      directories: 'Directories',
      firstOnShelveTime: 'FirstOnShelveTime',
      firstOnShelveUser: 'FirstOnShelveUser',
      granularity: 'Granularity',
      guid: 'Guid',
      instruction: 'Instruction',
      isDeleted: 'IsDeleted',
      isPartitionTable: 'IsPartitionTable',
      lastDdlTime: 'LastDdlTime',
      lastDmlTime: 'LastDmlTime',
      lastOnShelveTime: 'LastOnShelveTime',
      lastOnShelveUser: 'LastOnShelveUser',
      maintainUserGroups: 'MaintainUserGroups',
      maintainUserIds: 'MaintainUserIds',
      maxSecurityLevel: 'MaxSecurityLevel',
      modifyTime: 'ModifyTime',
      owner: 'Owner',
      partitionKey: 'PartitionKey',
      primaryKey: 'PrimaryKey',
      profilingReportViewScopeType: 'ProfilingReportViewScopeType',
      profilingReportViewScopeUserGroups: 'ProfilingReportViewScopeUserGroups',
      profilingReportViewScopeUserIds: 'ProfilingReportViewScopeUserIds',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      readCount: 'ReadCount',
      shelveViewScopeType: 'ShelveViewScopeType',
      shelveViewScopeUserGroups: 'ShelveViewScopeUserGroups',
      shelveViewScopeUserIds: 'ShelveViewScopeUserIds',
      simpleNodeInfos: 'SimpleNodeInfos',
      subType: 'SubType',
      sumTableGuid: 'SumTableGuid',
      sumTableName: 'SumTableName',
      tableLifeCycle: 'TableLifeCycle',
      tableSizeInBytes: 'TableSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCallMode: 'string',
      apiGroupName: 'string',
      apiId: 'number',
      apiRequestMethod: 'string',
      assetDescription: 'string',
      assetDetailUrl: 'string',
      assetDisplayName: 'string',
      assetFrom: 'string',
      assetFullName: 'string',
      assetName: 'string',
      assetTags: { 'type': 'array', 'itemType': 'string' },
      assetType: 'string',
      biCatalog: 'string',
      bizUnitId: 'number',
      bizUnitName: 'string',
      chartCount: 'number',
      collectionCount: 'number',
      columns: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataColumns },
      createTime: 'string',
      customAttributes: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataCustomAttributes },
      dataCellId: 'string',
      dataCellName: 'string',
      dataSourceName: 'string',
      datasourceId: 'number',
      directories: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataDirectories },
      firstOnShelveTime: 'string',
      firstOnShelveUser: GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser,
      granularity: 'string',
      guid: 'string',
      instruction: 'string',
      isDeleted: 'boolean',
      isPartitionTable: 'boolean',
      lastDdlTime: 'string',
      lastDmlTime: 'string',
      lastOnShelveTime: 'string',
      lastOnShelveUser: GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser,
      maintainUserGroups: { 'type': 'array', 'itemType': 'string' },
      maintainUserIds: { 'type': 'array', 'itemType': 'string' },
      maxSecurityLevel: 'string',
      modifyTime: 'string',
      owner: GetCatalogAssetDetailsResponseBodyDataOwner,
      partitionKey: 'string',
      primaryKey: 'string',
      profilingReportViewScopeType: 'string',
      profilingReportViewScopeUserGroups: { 'type': 'array', 'itemType': 'string' },
      profilingReportViewScopeUserIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      projectName: 'string',
      readCount: 'number',
      shelveViewScopeType: 'string',
      shelveViewScopeUserGroups: { 'type': 'array', 'itemType': 'string' },
      shelveViewScopeUserIds: { 'type': 'array', 'itemType': 'string' },
      simpleNodeInfos: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfos },
      subType: 'string',
      sumTableGuid: 'string',
      sumTableName: 'string',
      tableLifeCycle: 'string',
      tableSizeInBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetTags)) {
      $dara.Model.validateArray(this.assetTags);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.customAttributes)) {
      $dara.Model.validateArray(this.customAttributes);
    }
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    if(this.firstOnShelveUser && typeof (this.firstOnShelveUser as any).validate === 'function') {
      (this.firstOnShelveUser as any).validate();
    }
    if(this.lastOnShelveUser && typeof (this.lastOnShelveUser as any).validate === 'function') {
      (this.lastOnShelveUser as any).validate();
    }
    if(Array.isArray(this.maintainUserGroups)) {
      $dara.Model.validateArray(this.maintainUserGroups);
    }
    if(Array.isArray(this.maintainUserIds)) {
      $dara.Model.validateArray(this.maintainUserIds);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    if(Array.isArray(this.profilingReportViewScopeUserGroups)) {
      $dara.Model.validateArray(this.profilingReportViewScopeUserGroups);
    }
    if(Array.isArray(this.profilingReportViewScopeUserIds)) {
      $dara.Model.validateArray(this.profilingReportViewScopeUserIds);
    }
    if(Array.isArray(this.shelveViewScopeUserGroups)) {
      $dara.Model.validateArray(this.shelveViewScopeUserGroups);
    }
    if(Array.isArray(this.shelveViewScopeUserIds)) {
      $dara.Model.validateArray(this.shelveViewScopeUserIds);
    }
    if(Array.isArray(this.simpleNodeInfos)) {
      $dara.Model.validateArray(this.simpleNodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetCatalogAssetDetailsResponseBodyData;
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCatalogAssetDetailsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

