// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsResponseBodyDataAssetListDirectories extends $dara.Model {
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
   * Online E-commerce Platform
   */
  directoryName?: string;
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
   * Omni-channel Data Topic
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

export class ListCatalogAssetsResponseBodyDataAssetList extends $dara.Model {
  /**
   * @remarks
   * The API call mode. Returned when the asset type is API. Valid values:
   * - 1: Synchronous call.
   * - 2: Asynchronous call.
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
   * Default API Group
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
   * The API operation type. Returned when the asset type is API. Valid values:
   * - 1: Get.
   * - 2: List.
   * - 3: Create.
   * - 4: Update.
   * - 5: Delete.
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
   * The display name of the asset. This parameter is returned when the asset type is TABLE, INDEX, or BIZ_INDEX.
   * 
   * @example
   * abc table
   */
  assetDisplayName?: string;
  /**
   * @remarks
   * The source of the asset. For TABLE (physical table), the value is returned in the format of "Dataphin-Workspace Type-Project Chinese Name (Project English Name)". For TABLE (logical table), the value is returned in the format of "Dataphin-Workspace Type-Data Domain Chinese Name (Data Domain English Name)". For TABLE (data source table), the value is returned in the format of "Source System Name-Data Source Name-Database/Schema Name". For INDEX (standard modeling metric), the value is the asset source of the associated aggregate table. For INDEX (custom metric), the value is the asset source of the source table. For API, the value is the data service project name. For PAGE, the value is the application system name.
   * 
   * @example
   * Dataphin-Middle Layer-Fashion Retail (LD_Fashion)
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
   * The BI space or folder to which the asset belongs. Returned when the asset type is PAGE (dashboard).
   * 
   * @example
   * dataphin demo space
   */
  biCatalog?: string;
  /**
   * @remarks
   * The ID of the business unit to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 6865277495315392
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The name of the business unit to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * Fashion Retail (LD_Fashion)
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
   * The ID of the data domain to which the asset belongs. This parameter is returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * 49837403
   */
  dataCellId?: string;
  /**
   * @remarks
   * The name of the data domain to which the asset belongs. Returned when the asset type is TABLE (logical tables only) or INDEX (technical metrics whose source table is a logical table only).
   * 
   * @example
   * Course Domain
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
  directories?: ListCatalogAssetsResponseBodyDataAssetListDirectories[];
  /**
   * @remarks
   * The statistical granularity name of the technical metric. This parameter is returned when the asset type is INDEX.
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
   * Indicates whether the asset is deleted.
   */
  isDeleted?: boolean;
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
   * The subtype of the asset. Valid values:
   * - DIM_NORMAL: common logical dimension table.
   * - DIM_ENUM: enumeration logical dimension table.
   * - DIM_VIRTUAL: virtual logical dimension table.
   * - SUM_BIZ_UNIT: aggregate table.
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
   * The GUID of the aggregate table to which the asset belongs. This parameter is returned when the asset type is INDEX.
   * 
   * @example
   * odps.300023201.test.ads_gross
   */
  sumTableGuid?: string;
  /**
   * @remarks
   * The name of the aggregate table to which the asset belongs. This parameter is returned when the asset type is INDEX.
   * 
   * @example
   * ads_gross
   */
  sumTableName?: string;
  static names(): { [key: string]: string } {
    return {
      apiCallMode: 'ApiCallMode',
      apiGroupName: 'ApiGroupName',
      apiId: 'ApiId',
      apiRequestMethod: 'ApiRequestMethod',
      assetDescription: 'AssetDescription',
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
      dataCellId: 'DataCellId',
      dataCellName: 'DataCellName',
      dataSourceName: 'DataSourceName',
      datasourceId: 'DatasourceId',
      directories: 'Directories',
      granularity: 'Granularity',
      guid: 'Guid',
      isDeleted: 'IsDeleted',
      maxSecurityLevel: 'MaxSecurityLevel',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      subType: 'SubType',
      sumTableGuid: 'SumTableGuid',
      sumTableName: 'SumTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCallMode: 'string',
      apiGroupName: 'string',
      apiId: 'number',
      apiRequestMethod: 'string',
      assetDescription: 'string',
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
      dataCellId: 'string',
      dataCellName: 'string',
      dataSourceName: 'string',
      datasourceId: 'number',
      directories: { 'type': 'array', 'itemType': ListCatalogAssetsResponseBodyDataAssetListDirectories },
      granularity: 'string',
      guid: 'string',
      isDeleted: 'boolean',
      maxSecurityLevel: 'string',
      projectId: 'number',
      projectName: 'string',
      subType: 'string',
      sumTableGuid: 'string',
      sumTableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetTags)) {
      $dara.Model.validateArray(this.assetTags);
    }
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogAssetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asset list.
   */
  assetList?: ListCatalogAssetsResponseBodyDataAssetList[];
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
      assetList: 'AssetList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetList: { 'type': 'array', 'itemType': ListCatalogAssetsResponseBodyDataAssetList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetList)) {
      $dara.Model.validateArray(this.assetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogAssetsResponseBody extends $dara.Model {
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
   * The data catalog asset list.
   */
  data?: ListCatalogAssetsResponseBodyData;
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
      data: ListCatalogAssetsResponseBodyData,
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

