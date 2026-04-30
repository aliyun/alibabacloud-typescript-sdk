// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogAssetsResponseBodyDataAssetListDirectories extends $dara.Model {
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

export class ListCatalogAssetsResponseBodyDataAssetList extends $dara.Model {
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
  directories?: ListCatalogAssetsResponseBodyDataAssetListDirectories[];
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
  isDeleted?: boolean;
  /**
   * @example
   * L3
   */
  maxSecurityLevel?: string;
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
  assetList?: ListCatalogAssetsResponseBodyDataAssetList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListCatalogAssetsResponseBodyData;
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

