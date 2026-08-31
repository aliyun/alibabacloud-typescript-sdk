// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity extends $dara.Model {
  /**
   * @remarks
   * The ID of the business unit.
   * 
   * @example
   * 7137404445633152
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the business unit.
   * 
   * @example
   * LD_train
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The display name of the dimension.
   * 
   * @example
   * 上药erp数据源
   */
  dimensionDisplayName?: string;
  /**
   * @remarks
   * The ID of the dimension.
   * 
   * @example
   * 68014359
   */
  dimensionId?: number;
  /**
   * @remarks
   * The name of the dimension.
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
   * The code of the standard.
   * 
   * @example
   * hr_person_id
   */
  code?: string;
  /**
   * @remarks
   * The ID of the standard.
   * 
   * @example
   * 120350
   */
  id?: number;
  /**
   * @remarks
   * The name of the standard.
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
   * The associated entity. This parameter is returned when the business type is DIMENSION.
   */
  associatedEntity?: GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity;
  /**
   * @remarks
   * The business type. Valid values:
   * - INDEX: metric.
   * - STAT_PERIOD: statistical period.
   * - DIMENSION: dimension.
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
   * The data type of the column.
   * 
   * @example
   * double
   */
  dataType?: string;
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the column.
   * 
   * @example
   * Store traffic conversion rate
   */
  displayName?: string;
  /**
   * @remarks
   * The GUID of the column.
   * 
   * @example
   * dp_table.300023201.ld_fashion.dws_lulu_location.conversion_rate
   */
  guid?: string;
  /**
   * @remarks
   * The data classification level.
   * 
   * @example
   * L4
   */
  levelShortName?: string;
  /**
   * @remarks
   * The name of the column.
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
   * The attribute type. Valid values: BUSINESS (business attribute), MANAGEMENT (management attribute), TECHNOLOGY (technical attribute).
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
   * Supervising department
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

export class GetCatalogAssetDetailsResponseBodyDataDirectoriesDirectoryChain extends $dara.Model {
  /**
   * @remarks
   * The directory description.
   * 
   * @example
   * Data assets related to transactions
   */
  directoryDescription?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 2001
   */
  directoryId?: number;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * Transaction domain
   */
  directoryName?: string;
  /**
   * @remarks
   * The folder level.
   * 
   * @example
   * 1
   */
  level?: number;
  static names(): { [key: string]: string } {
    return {
      directoryDescription: 'DirectoryDescription',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryDescription: 'string',
      directoryId: 'number',
      directoryName: 'string',
      level: 'number',
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
   * The complete directory hierarchy chain from the top-level directory to the current directory, including the current directory.
   */
  directoryChain?: GetCatalogAssetDetailsResponseBodyDataDirectoriesDirectoryChain[];
  /**
   * @remarks
   * The directory description.
   * 
   * @example
   * Data tables related to order details
   */
  directoryDescription?: string;
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
   * Online e-commerce platform
   */
  directoryName?: string;
  /**
   * @remarks
   * The topic description.
   * 
   * @example
   * Core data asset catalog for the entire company, covering all online and offline channels
   */
  topicDescription?: string;
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
   * Omni-channel data topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      directoryChain: 'DirectoryChain',
      directoryDescription: 'DirectoryDescription',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      topicDescription: 'TopicDescription',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryChain: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataDirectoriesDirectoryChain },
      directoryDescription: 'string',
      directoryId: 'number',
      directoryName: 'string',
      topicDescription: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directoryChain)) {
      $dara.Model.validateArray(this.directoryChain);
    }
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
   * John
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
   * John
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
   * John
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

export class GetCatalogAssetDetailsResponseBodyDataQualityScoreRadarCatalogScores extends $dara.Model {
  /**
   * @remarks
   * The dimension name.
   * 
   * @example
   * Completeness
   */
  catalog?: string;
  /**
   * @remarks
   * The number of field-level rules.
   * 
   * @example
   * 7
   */
  fieldRuleCount?: number;
  /**
   * @remarks
   * The pass rate.
   * 
   * @example
   * 0.83
   */
  passRate?: number;
  /**
   * @remarks
   * The number of passed rules.
   * 
   * @example
   * 10
   */
  passRuleCount?: number;
  /**
   * @remarks
   * The dimension score.
   * 
   * @example
   * 85.5
   */
  score?: number;
  /**
   * @remarks
   * The number of table-level rules.
   * 
   * @example
   * 5
   */
  tableRuleCount?: number;
  /**
   * @remarks
   * The number of validated rules.
   * 
   * @example
   * 12
   */
  validateRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      fieldRuleCount: 'FieldRuleCount',
      passRate: 'PassRate',
      passRuleCount: 'PassRuleCount',
      score: 'Score',
      tableRuleCount: 'TableRuleCount',
      validateRuleCount: 'ValidateRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      fieldRuleCount: 'number',
      passRate: 'number',
      passRuleCount: 'number',
      score: 'number',
      tableRuleCount: 'number',
      validateRuleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCatalogAssetDetailsResponseBodyDataQualityScoreRadar extends $dara.Model {
  /**
   * @remarks
   * The list of dimension scores.
   */
  catalogScores?: GetCatalogAssetDetailsResponseBodyDataQualityScoreRadarCatalogScores[];
  /**
   * @remarks
   * The number of passed rules.
   * 
   * @example
   * 10
   */
  passRuleCount?: number;
  /**
   * @remarks
   * The total quality score.
   * 
   * @example
   * 85.5
   */
  totalScore?: number;
  /**
   * @remarks
   * The number of validated rules.
   * 
   * @example
   * 12
   */
  validateRuleCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogScores: 'CatalogScores',
      passRuleCount: 'PassRuleCount',
      totalScore: 'TotalScore',
      validateRuleCount: 'ValidateRuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogScores: { 'type': 'array', 'itemType': GetCatalogAssetDetailsResponseBodyDataQualityScoreRadarCatalogScores },
      passRuleCount: 'number',
      totalScore: 'number',
      validateRuleCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogScores)) {
      $dara.Model.validateArray(this.catalogScores);
    }
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
   * John
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
   * The environment to which the asset belongs.
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
   * The scheduling type. Valid values: NORMAL (timed scheduling), MANUAL (manual scheduling).
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
   * The node type. Example valid values: DLINK (offline integration), PYTHON37 (Python compute node).
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
   * The API call mode. Returned when the asset type is API. Valid values: 1=Synchronous call, 2=Asynchronous call.
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
   * Default API group
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
   * The API operation type. Returned when the asset type is API. Valid values: 1=Get, 2=List, 3=Create, 4=Update, 5=Delete.
   * 
   * @example
   * 1
   */
  apiRequestMethod?: string;
  /**
   * @remarks
   * The description of the asset.
   * 
   * @example
   * abc
   */
  assetDescription?: string;
  /**
   * @remarks
   * The URL of the asset catalog detail page.
   * 
   * @example
   * https://dataphin.poc.lydaas.com/market/catalog/detail/table/...
   */
  assetDetailUrl?: string;
  /**
   * @remarks
   * The display name of the asset. This parameter is returned when the asset type is TABLE, INDEX, or BIZ_INDEX.
   * 
   * @example
   * abc表
   */
  assetDisplayName?: string;
  /**
   * @remarks
   * The source of the asset. TABLE (physical table) returns "Dataphin-workspace type-project Chinese name (project English name)". TABLE (logical table) returns "Dataphin-workspace type-data domain Chinese name (data domain English name)". TABLE (data source table) returns "source system name-data source name-database/schema name". INDEX (standard modeling metric) returns the asset source of the associated aggregate logical table. INDEX (custom metric) returns the asset source of the source table. API returns "data service project name". PAGE returns "application system name".
   * 
   * @example
   * Dataphin-中间层-服饰零售 (LD_Fashion)
   */
  assetFrom?: string;
  /**
   * @remarks
   * The full name of the asset. This parameter is returned when the asset type is TABLE or INDEX.
   * 
   * @example
   * dwd_all.abc
   */
  assetFullName?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * abc
   */
  assetName?: string;
  /**
   * @remarks
   * The tags of the asset.
   */
  assetTags?: string[];
  /**
   * @remarks
   * The asset type. Valid values:
   * - TABLE: table, including views and materialized views.
   * - INDEX: technical metric.
   * - BIZ_INDEX: business metric.
   * - API: API.
   * - PAGE: dashboard.
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The BI workspace or folder to which the asset belongs. Returned when the asset type is PAGE (dashboard).
   * 
   * @example
   * dataphin演示空间
   */
  biCatalog?: string;
  /**
   * @remarks
   * The ID of the data domain to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 6865277495315392
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the data domain to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
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
   * The collection count.
   * 
   * @example
   * 0
   */
  collectionCount?: number;
  /**
   * @remarks
   * The list of columns. This parameter is returned when the asset type is TABLE.
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
   * The ID of the data domain. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 49837403
   */
  dataCellId?: string;
  /**
   * @remarks
   * The name of the data domain. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * Course domain
   */
  dataCellName?: string;
  /**
   * @remarks
   * The name of the data source to which the asset belongs. This parameter is returned when the asset type is TABLE (data source tables only) or INDEX (technical metrics whose source table is a data source table only).
   * 
   * @example
   * demo_mysql
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the data source to which the asset belongs. This parameter is returned when the asset type is TABLE (data source tables only) or INDEX (technical metrics whose source table is a data source table only).
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
   * The time of the first listing.
   * 
   * @example
   * 2025-05-22 10:06:20
   */
  firstOnShelveTime?: string;
  /**
   * @remarks
   * The user who performed the first listing.
   */
  firstOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser;
  /**
   * @remarks
   * The statistical granularity name of the technical metric. Returned when the asset type is INDEX.
   * 
   * @example
   * Course
   */
  granularity?: string;
  /**
   * @remarks
   * The GUID of the asset, which serves as the unique identifier of the asset.
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
   * - true: The table is a partitioned table.
   * - false: The table is not a partitioned table.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The time of the last DDL change.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The time of the last DML update.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  lastDmlTime?: string;
  /**
   * @remarks
   * The time of the last listing.
   * 
   * @example
   * 2025-05-22 10:06:20
   */
  lastOnShelveTime?: string;
  /**
   * @remarks
   * The user who performed the last listing.
   */
  lastOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser;
  /**
   * @remarks
   * The listing maintenance user groups.
   */
  maintainUserGroups?: string[];
  /**
   * @remarks
   * The IDs of the listing maintenance users.
   */
  maintainUserIds?: string[];
  /**
   * @remarks
   * The maximum sensitivity level. This parameter is returned when the asset type is TABLE.
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
   * The partition key. Returned when the asset type is TABLE.
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
   * The visibility scope type of the profiling report. This parameter is returned only when the asset type is TABLE or INDEX. Valid values:
   * - ALL_USERS_CAN_VIEW: Visible to all users.
   * - PART_USERS_CAN_VIEW: Visible to some users.
   * - ALL_USERS_CAN_NOT_VIEW: Not visible to any users.
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
   * The ID of the project to which the asset belongs. This parameter is returned when the asset type is TABLE (physical tables only) or INDEX (technical metrics whose source table is a physical table only).
   * 
   * @example
   * 6865331517728384
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the project to which the asset belongs. This parameter is returned when the asset type is TABLE (physical tables only) or INDEX (technical metrics whose source table is a physical table only).
   * 
   * @example
   * train
   */
  projectName?: string;
  /**
   * @remarks
   * The quality score radar chart information. This parameter is returned only when includeDetailedAttributes is set to true. It contains the total score, the number of passed/validated rules, and the score details for each dimension.
   */
  qualityScoreRadar?: GetCatalogAssetDetailsResponseBodyDataQualityScoreRadar;
  /**
   * @remarks
   * The view count.
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
   * The subtype. Valid values:
   * - DIM_NORMAL: common logical dimension table.
   * - DIM_ENUM: enumeration logical dimension table.
   * - DIM_VIRTUAL: virtual logical dimension table.
   * - SUM_BIZ_UNIT: aggregate logical table.
   * - FACT_EVENT: event fact logical table.
   * - FACT_SNAPSHOT: snapshot fact logical table.
   * - DATASOURCE_TABLE: data source table.
   * - PHYSICAL_TABLE: physical table.
   * - DATASOURCE_VIEW: view (data source view).
   * - PHYSICAL_VIEW: physical view.
   * - MATERIALIZED_VIEW: materialized view.
   * - BIZ_INDEX: business metric.
   * - INDEX: technical metric (standard modeling metric).
   * - CUSTOM_INDEX: technical metric (custom metric).
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
   * The storage size. This parameter is returned only when the asset type is TABLE.
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
      qualityScoreRadar: 'QualityScoreRadar',
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
      qualityScoreRadar: GetCatalogAssetDetailsResponseBodyDataQualityScoreRadar,
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
    if(this.qualityScoreRadar && typeof (this.qualityScoreRadar as any).validate === 'function') {
      (this.qualityScoreRadar as any).validate();
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
   * The backend response exception details.
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

