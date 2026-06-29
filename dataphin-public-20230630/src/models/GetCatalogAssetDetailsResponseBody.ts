// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity extends $dara.Model {
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 7137404445633152
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The business unit name.
   * 
   * @example
   * LD_train
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The dimension display name.
   * 
   * @example
   * 上药erp数据源
   */
  dimensionDisplayName?: string;
  /**
   * @remarks
   * The dimension ID.
   * 
   * @example
   * 68014359
   */
  dimensionId?: number;
  /**
   * @remarks
   * The dimension name.
   * 
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
   * @remarks
   * The standard code.
   * 
   * @example
   * hr_person_id
   */
  code?: string;
  /**
   * @remarks
   * The standard ID.
   * 
   * @example
   * 120350
   */
  id?: number;
  /**
   * @remarks
   * The standard name.
   * 
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
  /**
   * @remarks
   * The associated entity. Returned when the business type is DIMENSION.
   */
  associatedEntity?: GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity;
  /**
   * @remarks
   * The business type. Valid values:
   * - INDEX: Metric.
   * - STAT_PERIOD: Statistical period.
   * - DIMENSION: Dimension.
   * 
   * @example
   * DIMENSION
   */
  bizType?: string;
  /**
   * @remarks
   * The data classification.
   * 
   * @example
   * /交易信息/0000001
   */
  classifyName?: string;
  /**
   * @remarks
   * The field data type.
   * 
   * @example
   * double
   */
  dataType?: string;
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The field display name.
   * 
   * @example
   * 门店客流转化率
   */
  displayName?: string;
  /**
   * @remarks
   * The field GUID.
   * 
   * @example
   * dp_table.300023201.ld_fashion.dws_lulu_location.conversion_rate
   */
  guid?: string;
  /**
   * @remarks
   * The data sensitivity level.
   * 
   * @example
   * L4
   */
  levelShortName?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * conversion_rate
   */
  name?: string;
  /**
   * @remarks
   * The quality score.
   * 
   * @example
   * 0.0
   */
  qualityScore?: number;
  /**
   * @remarks
   * The associated standards.
   */
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
   * @remarks
   * The attribute type. Valid values:
   * - BUSINESS: Business attribute.
   * - MANAGEMENT: Management attribute.
   * - TECHNOLOGY: Technical attribute.
   * 
   * @example
   * MANAGEMENT
   */
  attrType?: string;
  /**
   * @remarks
   * The attribute code.
   * 
   * @example
   * gkglbm
   */
  code?: string;
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * 归口管理部门
   */
  name?: string;
  /**
   * @remarks
   * The attribute value.
   * 
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
   * @remarks
   * The directory ID.
   * 
   * @example
   * 102260
   */
  directoryId?: number;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * 线上电商平台
   */
  directoryName?: string;
  /**
   * @remarks
   * The topic ID.
   * 
   * @example
   * 101676
   */
  topicId?: number;
  /**
   * @remarks
   * The topic name.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The project ID.
   * 
   * @example
   * 6865331517728384
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
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
  /**
   * @remarks
   * The business unit to which the node belongs.
   * 
   * @example
   * test
   */
  bizUnit?: string;
  /**
   * @remarks
   * The environment to which the node belongs.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_7443633109495119872
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 2345
   */
  nodeName?: string;
  /**
   * @remarks
   * The scheduling method. Valid values:
   * - NORMAL: Timed scheduling.
   * - MANUAL: Manual scheduling.
   * 
   * @example
   * NORMAL
   */
  nodeScheduleType?: string;
  /**
   * @remarks
   * The list of O&M owners.
   */
  owners?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosOwners[];
  /**
   * @remarks
   * The project to which the node belongs.
   */
  project?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosProject;
  /**
   * @remarks
   * The node type. Example valid values: DLINK (offline integration) and PYTHON37 (Python compute node).
   * 
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
   * @remarks
   * The API call mode. Returned when the asset type is API. Valid values: 1 (synchronous call) and 2 (asynchronous call).
   * 
   * @example
   * 1
   */
  apiCallMode?: string;
  /**
   * @remarks
   * The API group name. Returned when the asset type is API.
   * 
   * @example
   * 默认API分组
   */
  apiGroupName?: string;
  /**
   * @remarks
   * The API ID. Returned when the asset type is API.
   * 
   * @example
   * 10441
   */
  apiId?: number;
  /**
   * @remarks
   * The API operation type. Returned when the asset type is API. Valid values: 1 (Get), 2 (List), 3 (Create), 4 (Update), and 5 (Delete).
   * 
   * @example
   * 1
   */
  apiRequestMethod?: string;
  /**
   * @remarks
   * The asset description.
   * 
   * @example
   * abc
   */
  assetDescription?: string;
  /**
   * @remarks
   * The URL of the asset catalog details page.
   * 
   * @example
   * https://dataphin.poc.lydaas.com/market/catalog/detail/table/...
   */
  assetDetailUrl?: string;
  /**
   * @remarks
   * The asset display name. Returned when the asset type is TABLE, INDEX, or BIZ_INDEX.
   * 
   * @example
   * abc表
   */
  assetDisplayName?: string;
  /**
   * @remarks
   * The asset source. For TABLE (physical table), the value is in the format of "Dataphin-Workspace Type-Project Chinese Name (Project English Name)". For TABLE (logical table), the value is in the format of "Dataphin-Workspace Type-Data Domain Chinese Name (Data Domain English Name)". For TABLE (data source table), the value is in the format of "Source System Name-Data Source Name-Database/Schema Name". For INDEX (standard modeling metric), the value is the asset source of the associated aggregate table. For INDEX (custom metric), the value is the asset source of the source table. For API, the value is the data service project name. For PAGE, the value is the application system name.
   * 
   * @example
   * Dataphin-中间层-服饰零售 (LD_Fashion)
   */
  assetFrom?: string;
  /**
   * @remarks
   * The full name of the asset. Returned when the asset type is TABLE or INDEX.
   * 
   * @example
   * dwd_all.abc
   */
  assetFullName?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * abc
   */
  assetName?: string;
  /**
   * @remarks
   * The asset tags.
   */
  assetTags?: string[];
  /**
   * @remarks
   * The asset type. Valid values: TABLE (table, including views and materialized views), INDEX (technical metric), BIZ_INDEX (business metric), API, and PAGE (dashboard).
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The BI workspace or directory to which the asset belongs. Returned when the asset type is PAGE (dashboard).
   * 
   * @example
   * dataphin演示空间
   */
  biCatalog?: string;
  /**
   * @remarks
   * The ID of the business unit to which the asset belongs. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 6865277495315392
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the business unit to which the asset belongs. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 服饰零售（LD_Fashion）
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The total number of charts. Returned when the asset type is PAGE (dashboard).
   * 
   * @example
   * 23
   */
  chartCount?: number;
  /**
   * @remarks
   * The number of favorites.
   * 
   * @example
   * 0
   */
  collectionCount?: number;
  /**
   * @remarks
   * The field list. Returned when the asset type is TABLE.
   */
  columns?: GetCatalogAssetDetailsResponseBodyDataColumns[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  createTime?: string;
  /**
   * @remarks
   * The custom attributes. Returned when includeDetailedAttributes is set to true.
   */
  customAttributes?: GetCatalogAssetDetailsResponseBodyDataCustomAttributes[];
  /**
   * @remarks
   * The ID of the subject domain to which the asset belongs. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 49837403
   */
  dataCellId?: string;
  /**
   * @remarks
   * The name of the subject domain to which the asset belongs. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 课程域
   */
  dataCellName?: string;
  /**
   * @remarks
   * The name of the data source to which the asset belongs. Returned when the asset type is TABLE (data source tables only) or INDEX (technical metrics whose source table is a data source table only).
   * 
   * @example
   * demo_mysql
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the data source to which the asset belongs. Returned when the asset type is TABLE (data source tables only) or INDEX (technical metrics whose source table is a data source table only).
   * 
   * @example
   * 7305549302863001856
   */
  datasourceId?: number;
  /**
   * @remarks
   * The directories to which the asset belongs, including topic ID, topic name, directory ID, and directory name.
   */
  directories?: GetCatalogAssetDetailsResponseBodyDataDirectories[];
  /**
   * @remarks
   * The first listing time.
   * 
   * @example
   * 2025-05-22 10:06:20
   */
  firstOnShelveTime?: string;
  /**
   * @remarks
   * The user who first listed the asset.
   */
  firstOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser;
  /**
   * @remarks
   * The statistical granularity name of the technical metric. Returned when the asset type is INDEX.
   * 
   * @example
   * 课程
   */
  granularity?: string;
  /**
   * @remarks
   * The asset GUID, which serves as the unique identifier of the asset.
   * 
   * @example
   * dp_ds_table.300023201.7311626611751680256.load_test.abc
   */
  guid?: string;
  /**
   * @remarks
   * The usage instructions.
   * 
   * @example
   * test
   */
  instruction?: string;
  /**
   * @remarks
   * Indicates whether the asset is deleted.
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table. Returned when the asset type is TABLE. Valid values:
   * - true: Yes.
   * - false: No.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The last DDL change time.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The last DML update time.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  lastDmlTime?: string;
  /**
   * @remarks
   * The last listing time.
   * 
   * @example
   * 2025-05-22 10:06:20
   */
  lastOnShelveTime?: string;
  /**
   * @remarks
   * The user who last listed the asset.
   */
  lastOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser;
  /**
   * @remarks
   * The listing maintenance user groups.
   */
  maintainUserGroups?: string[];
  /**
   * @remarks
   * The listing maintenance personnel.
   */
  maintainUserIds?: string[];
  /**
   * @remarks
   * The highest sensitivity level. Returned when the asset type is TABLE.
   * 
   * @example
   * L3
   */
  maxSecurityLevel?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  modifyTime?: string;
  /**
   * @remarks
   * The owner.
   */
  owner?: GetCatalogAssetDetailsResponseBodyDataOwner;
  /**
   * @remarks
   * The partition field. Returned when the asset type is TABLE.
   * 
   * @example
   * ds
   */
  partitionKey?: string;
  /**
   * @remarks
   * The primary key. Returned when the asset type is TABLE.
   * 
   * @example
   * employee_id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The visibility scope type of the profiling report. Returned when the asset type is TABLE or INDEX. Valid values:
   * - ALL_USERS_CAN_VIEW: Visible to all users.
   * - PART_USERS_CAN_VIEW: Visible to some users.
   * - ALL_USERS_CAN_NOT_VIEW: Not visible to any user.
   * 
   * @example
   * ALL_USERS_CAN_VIEW
   */
  profilingReportViewScopeType?: string;
  /**
   * @remarks
   * The user groups within the profiling report visibility scope.
   */
  profilingReportViewScopeUserGroups?: string[];
  /**
   * @remarks
   * The users within the profiling report visibility scope.
   */
  profilingReportViewScopeUserIds?: string[];
  /**
   * @remarks
   * The ID of the project to which the asset belongs. Returned when the asset type is TABLE (physical tables only) or INDEX (technical metrics whose source table is a physical table only).
   * 
   * @example
   * 6865331517728384
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the project to which the asset belongs. Returned when the asset type is TABLE (physical tables only) or INDEX (technical metrics whose source table is a physical table only).
   * 
   * @example
   * train
   */
  projectName?: string;
  /**
   * @remarks
   * The number of views.
   * 
   * @example
   * 5
   */
  readCount?: number;
  /**
   * @remarks
   * The visibility scope type. Valid values:
   * - ALL_USERS_CAN_VIEW: Visible to all users.
   * - PART_USERS_CAN_VIEW: Visible to some users.
   * - PART_USERS_CAN_NOT_VIEW: Not visible to some users.
   * 
   * @example
   * ALL_USERS_CAN_VIEW
   */
  shelveViewScopeType?: string;
  /**
   * @remarks
   * The user groups within the visibility scope.
   */
  shelveViewScopeUserGroups?: string[];
  /**
   * @remarks
   * The users within the visibility scope.
   */
  shelveViewScopeUserIds?: string[];
  /**
   * @remarks
   * The output nodes. Returned when the asset type is TABLE.
   */
  simpleNodeInfos?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfos[];
  /**
   * @remarks
   * The subtype. Valid values: DIM_NORMAL (common logical dimension table), DIM_ENUM (enumeration logical dimension table), DIM_VIRTUAL (virtual logical dimension table), SUM_BIZ_UNIT (aggregate table), FACT_EVENT (event fact logical table), FACT_SNAPSHOT (snapshot fact logical table), DATASOURCE_TABLE (data source table), PHYSICAL_TABLE (physical table), DATASOURCE_VIEW (data source view), PHYSICAL_VIEW (physical view), MATERIALIZED_VIEW (materialized view), BIZ_INDEX (business metric), INDEX (technical metric - standard modeling metric), and CUSTOM_INDEX (technical metric - custom metric).
   * 
   * @example
   * DIM_NORMAL
   */
  subType?: string;
  /**
   * @remarks
   * The GUID of the aggregate table to which the asset belongs. Returned when the asset type is INDEX.
   * 
   * @example
   * odps.300023201.test.ads_gross
   */
  sumTableGuid?: string;
  /**
   * @remarks
   * The name of the aggregate table to which the asset belongs. Returned when the asset type is INDEX.
   * 
   * @example
   * ads_gross
   */
  sumTableName?: string;
  /**
   * @remarks
   * The lifecycle. Returned when the asset type is TABLE.
   * 
   * @example
   * 36000
   */
  tableLifeCycle?: string;
  /**
   * @remarks
   * The storage size in bytes. Returned when the asset type is TABLE.
   * 
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
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data catalog asset details.
   */
  data?: GetCatalogAssetDetailsResponseBodyData;
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
   * The details of the backend response exception.
   * 
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
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

