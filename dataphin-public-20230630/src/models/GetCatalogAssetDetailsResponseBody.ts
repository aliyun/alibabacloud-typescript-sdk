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
   * SPH ERP data source
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
   * The associated entity. Returned when the business type is DIMENSION.
   */
  associatedEntity?: GetCatalogAssetDetailsResponseBodyDataColumnsAssociatedEntity;
  /**
   * @remarks
   * The business type. Valid values: INDEX (metric), STAT_PERIOD (statistical period), and DIMENSION (dimension).
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
   * /Transaction information/0000001
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
   * The data grade.
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
   * The type of the attribute. Valid values: BUSINESS (business attribute), MANAGEMENT (management attribute), and TECHNOLOGY (technical attribute).
   * 
   * @example
   * MANAGEMENT
   */
  attrType?: string;
  /**
   * @remarks
   * The code of the attribute.
   * 
   * @example
   * gkglbm
   */
  code?: string;
  /**
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * Managing department
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
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
   * The description of the directory.
   * 
   * @example
   * Transaction-related data assets
   */
  directoryDescription?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 2001
   */
  directoryId?: number;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * Transaction domain
   */
  directoryName?: string;
  /**
   * @remarks
   * The directory level.
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
   * The complete hierarchy chain of the directory, from the top-level directory to the current directory, including the current directory.
   */
  directoryChain?: GetCatalogAssetDetailsResponseBodyDataDirectoriesDirectoryChain[];
  /**
   * @remarks
   * The description of the directory.
   * 
   * @example
   * Data tables related to order details
   */
  directoryDescription?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 102260
   */
  directoryId?: number;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * Online e-commerce platform
   */
  directoryName?: string;
  /**
   * @remarks
   * The description of the topic.
   * 
   * @example
   * Core data asset catalog for the entire company, covering all online and offline channels
   */
  topicDescription?: string;
  /**
   * @remarks
   * The ID of the topic.
   * 
   * @example
   * 101676
   */
  topicId?: number;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * Omnichannel data topic
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
   * The display name of the user.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The display name of the user.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The display name of the user.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The number of checked rules.
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
   * The number of checked rules.
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
   * The display name of the user.
   * 
   * @example
   * Zhang San
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
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
   * The ID of the project.
   * 
   * @example
   * 6865331517728384
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project.
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
   * The environment.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * n_7443633109495119872
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * 2345
   */
  nodeName?: string;
  /**
   * @remarks
   * The scheduling mode. Valid values: NORMAL (periodic scheduling) and MANUAL (manual scheduling).
   * 
   * @example
   * NORMAL
   */
  nodeScheduleType?: string;
  /**
   * @remarks
   * The O&M owners.
   */
  owners?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosOwners[];
  /**
   * @remarks
   * The project to which the node belongs.
   */
  project?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfosProject;
  /**
   * @remarks
   * The type of the node. Example valid values: DLINK (offline integration) and PYTHON37 (Python computing node).
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
   * The call mode of the API. This parameter is returned when the asset type is API. Valid values: 1 (synchronous call) and 2 (asynchronous call).
   * 
   * @example
   * 1
   */
  apiCallMode?: string;
  /**
   * @remarks
   * The name of the API group. This parameter is returned when the asset type is API.
   * 
   * @example
   * Default API group
   */
  apiGroupName?: string;
  /**
   * @remarks
   * The API ID. This parameter is returned when the asset type is API.
   * 
   * @example
   * 10441
   */
  apiId?: number;
  /**
   * @remarks
   * The type of the API operation. This parameter is returned when the asset type is API. Valid values: 1 (Get), 2 (List), 3 (Create), 4 (Update), and 5 (Delete).
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
   * The URL to the asset catalog details.
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
   * Table abc
   */
  assetDisplayName?: string;
  /**
   * @remarks
   * The source of the asset. If the asset type is TABLE (physical table), the format is Dataphin-space type-project Chinese name (project English name). If the asset type is TABLE (logical table), the format is Dataphin-space type-data block Chinese name (data block English name). If the asset type is TABLE (data source table), the format is source system name-data source name-database or schema name. If the asset type is INDEX (standardized modeling metric), the value is the asset source of the associated aggregate logical table. If the asset type is INDEX (custom metric), the value is the asset source of the source table. If the asset type is API, the value is the data service project name. If the asset type is PAGE, the value is the application system name.
   * 
   * @example
   * Dataphin-Middle layer-Apparel retail (LD_Fashion)
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
   * The asset type. Valid values: TABLE (tables, including views and materialized views), INDEX (technical metrics), BIZ_INDEX (business metrics), API, and PAGE (dashboards).
   * 
   * @example
   * TABLE
   */
  assetType?: string;
  /**
   * @remarks
   * The BI workspace or directory. This parameter is returned when the asset type is PAGE (dashboard).
   * 
   * @example
   * Dataphin demo workspace
   */
  biCatalog?: string;
  /**
   * @remarks
   * The ID of the data block to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 6865277495315392
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the data block to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * Apparel retail (LD_Fashion)
   */
  bizUnitName?: string;
  /**
   * @remarks
   * The total number of charts. This parameter is returned when the asset type is PAGE (dashboard).
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
   * The list of columns. Returned when the asset type is TABLE.
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
   * The custom attributes. This parameter is returned when includeDetailedAttributes is set to true.
   */
  customAttributes?: GetCatalogAssetDetailsResponseBodyDataCustomAttributes[];
  /**
   * @remarks
   * The ID of the data domain. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source tables are logical tables only).
   * 
   * @example
   * 49837403
   */
  dataCellId?: string;
  /**
   * @remarks
   * The name of the data domain. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source tables are logical tables only).
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
   * The directories to which the asset belongs, including the topic ID, topic name, directory ID, and directory name.
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
   * The first listing user.
   */
  firstOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataFirstOnShelveUser;
  /**
   * @remarks
   * The name of the statistical granularity for the technical metric. This parameter is returned when the asset type is INDEX.
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
   * Specifies whether the table is a partitioned table. This parameter is returned when the asset type is TABLE. Valid values: true and false.
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The last DDL time.
   * 
   * @example
   * 2024-10-11 16:10:19
   */
  lastDdlTime?: string;
  /**
   * @remarks
   * The last update time.
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
   * The last listing user.
   */
  lastOnShelveUser?: GetCatalogAssetDetailsResponseBodyDataLastOnShelveUser;
  /**
   * @remarks
   * The listing maintainer groups.
   */
  maintainUserGroups?: string[];
  /**
   * @remarks
   * The listing maintainers.
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
   * The partition field. This parameter is returned when the asset type is TABLE.
   * 
   * @example
   * ds
   */
  partitionKey?: string;
  /**
   * @remarks
   * The primary key. This parameter is returned when the asset type is TABLE.
   * 
   * @example
   * employee_id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The visibility scope type of the profiling report. This parameter is returned when the asset type is TABLE or INDEX. Valid values:
   * - ALL_USERS_CAN_VIEW: Visible to all users.
   * - PART_USERS_CAN_VIEW: Visible to some users.
   * - ALL_USERS_CAN_NOT_VIEW: Invisible to all users.
   * 
   * @example
   * ALL_USERS_CAN_VIEW
   */
  profilingReportViewScopeType?: string;
  /**
   * @remarks
   * The user groups within the visibility scope of the profiling report.
   */
  profilingReportViewScopeUserGroups?: string[];
  /**
   * @remarks
   * The users within the visibility scope of the profiling report.
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
   * The quality score radar chart information. This parameter is returned when includeDetailedAttributes is set to true. It includes the total score, the number of passed and checked rules, and the score details for each dimension.
   */
  qualityScoreRadar?: GetCatalogAssetDetailsResponseBodyDataQualityScoreRadar;
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
   * - PART_USERS_CAN_NOT_VIEW: Invisible to some users.
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
   * The output nodes. This parameter is returned when the asset type is TABLE.
   */
  simpleNodeInfos?: GetCatalogAssetDetailsResponseBodyDataSimpleNodeInfos[];
  /**
   * @remarks
   * The subtype. Valid values: DIM_NORMAL (common logical dimension table), DIM_ENUM (enumeration logical dimension table), DIM_VIRTUAL (virtual logical dimension table), SUM_BIZ_UNIT (aggregate logical table), FACT_EVENT (event fact logical table), FACT_SNAPSHOT (snapshot fact logical table), DATASOURCE_TABLE (data source table), PHYSICAL_TABLE (physical table), DATASOURCE_VIEW (data source view), PHYSICAL_VIEW (physical view), MATERIALIZED_VIEW (materialized view), BIZ_INDEX (business metric), INDEX (technical metric - standardized modeling metric), and CUSTOM_INDEX (technical metric - custom metric).
   * 
   * @example
   * DIM_NORMAL
   */
  subType?: string;
  /**
   * @remarks
   * The GUID of the summary table. This parameter is returned when the asset type is INDEX.
   * 
   * @example
   * odps.300023201.test.ads_gross
   */
  sumTableGuid?: string;
  /**
   * @remarks
   * The name of the summary table. This parameter is returned when the asset type is INDEX.
   * 
   * @example
   * ads_gross
   */
  sumTableName?: string;
  /**
   * @remarks
   * The lifecycle. This parameter is returned when the asset type is TABLE.
   * 
   * @example
   * 36000
   */
  tableLifeCycle?: string;
  /**
   * @remarks
   * The storage size. This parameter is returned when the asset type is TABLE.
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
   * The backend exception details.
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
   * Indicates whether the request is successful.
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

