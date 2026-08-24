// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier used for canary release evaluation.
   * 
   * @example
   * 1
   */
  APIVersion?: number;
  /**
   * @remarks
   * The OSS bucket filter.
   * 
   * @example
   * bucketName
   */
  bucket?: string;
  /**
   * @remarks
   * The page number in a paged query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  cursor?: string;
  cursorDirection?: string;
  /**
   * @remarks
   * The database name filter.
   * 
   * @example
   * dataBaseName
   */
  dbName?: string;
  /**
   * @remarks
   * The data domain ID to which the data asset belongs.
   * 
   * @example
   * 2
   */
  domainId?: number;
  engineType?: string;
  /**
   * @remarks
   * The facet dimension for associated filtering in the data catalog. Valid values: rule (category), task (task), instance (instance), and db (database). If this parameter is not specified or is empty, the original list and count query is performed (behavior unchanged). If a valid value is specified, the list query is skipped and only content.hitValues is returned. If an invalid value is specified, a parameter error is returned.
   * 
   * @example
   * instance
   */
  facetType?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The file category code.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The OSS file type supported for detection.
   * 
   * > You can call [DescribeDocTypes](https://help.aliyun.com/document_detail/2536492.html) to obtain the supported OSS file types. Use the Code field value from the response. This parameter is valid only for OSS asset queries.
   * 
   * @example
   * 100001
   */
  fileType?: number;
  /**
   * @remarks
   * The keyword of the asset instance ID.
   * 
   * @example
   * 8vb54hn2g9j191ddz
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to filter revision items.
   * 
   * @example
   * 0
   */
  isRevision?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The SLS Logstore filter.
   * 
   * @example
   * logstore
   */
  logStore?: string;
  /**
   * @remarks
   * The data catalog SLS page has two layers. This parameter indicates whether the query is at the Logstore dimension.
   * 
   * @example
   * 1
   */
  logStoreFlag?: number;
  /**
   * @remarks
   * The member accounts ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The model IDs of the industry template, separated by commas.
   * > You can call [DescribeTemplateAllRules](https://help.aliyun.com/document_detail/2536491.html) to obtain the industry template model IDs.
   * 
   * @example
   * 101
   */
  modelIds?: string;
  /**
   * @remarks
   * The data tags to query, separated by commas. Valid values:
   * - **101**: personal sensitive information.
   * - **102**: personal information.
   * - **107**: general information.
   * 
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @remarks
   * The maximum number of data asset instances to return per page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of parent category IDs of the templates to query, separated by commas.
   * 
   * @example
   * 234,236,238
   */
  parentCategoryIds?: string;
  /**
   * @remarks
   * The file path filter.
   * 
   * @example
   * road
   */
  path?: string;
  /**
   * @remarks
   * The product of the data catalog.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * We recommend that you specify this parameter. The list of product IDs to query, separated by commas. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * > OSS is mutually exclusive with other products. If OSS is included in the query, no other products can be specified. By default, non-OSS products are queried.
   * 
   * @example
   * 1,5
   */
  productIds?: string;
  /**
   * @remarks
   * The SLS project filter.
   * 
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The keyword of the data object to query.
   * 
   * @example
   * t_sddp_selfmysql_pers0
   */
  queryName?: string;
  /**
   * @remarks
   * The region of the data catalog display page.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The risk level filter.
   * 
   * @example
   * 1,2,3
   */
  riskLevelIdList?: string;
  /**
   * @remarks
   * The risk levels of the data assets to query. Separate multiple values with commas (,).
   * - **2**: S1, low risk level.
   * - **3**: S2, medium risk level.
   * - **4**: S3, high risk level.
   * - **5**: S4, highest risk level.
   * 
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @remarks
   * The rule filter.
   * 
   * @example
   * 1,2,3
   */
  ruleIds?: string;
  /**
   * @remarks
   * The region where the asset resides. Valid values:
   * - **cn-beijing**: China (Beijing).
   * - **cn-zhangjiakou**: China (Zhangjiakou).
   * - **cn-huhehaote**: China (Hohhot).
   * - **cn-hangzhou**: China (Hangzhou).
   * - **cn-shanghai**: China (Shanghai).
   * - **cn-shenzhen**: China (Shenzhen).
   * - **cn-hongkong**: Hong Kong (China).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The task name filter.
   * 
   * @example
   * TableName
   */
  tableName?: string;
  /**
   * @remarks
   * The task ID filter.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The industry template ID.
   * 
   * > You can call [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) to obtain the industry template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      APIVersion: 'APIVersion',
      bucket: 'Bucket',
      currentPage: 'CurrentPage',
      cursor: 'Cursor',
      cursorDirection: 'CursorDirection',
      dbName: 'DbName',
      domainId: 'DomainId',
      engineType: 'EngineType',
      facetType: 'FacetType',
      featureType: 'FeatureType',
      fileCategoryCode: 'FileCategoryCode',
      fileType: 'FileType',
      instanceId: 'InstanceId',
      isRevision: 'IsRevision',
      lang: 'Lang',
      logStore: 'LogStore',
      logStoreFlag: 'LogStoreFlag',
      memberAccount: 'MemberAccount',
      modelIds: 'ModelIds',
      modelTagIds: 'ModelTagIds',
      pageSize: 'PageSize',
      parentCategoryIds: 'ParentCategoryIds',
      path: 'Path',
      productId: 'ProductId',
      productIds: 'ProductIds',
      project: 'Project',
      queryName: 'QueryName',
      regionId: 'RegionId',
      riskLevelIdList: 'RiskLevelIdList',
      riskLevels: 'RiskLevels',
      ruleIds: 'RuleIds',
      serviceRegionId: 'ServiceRegionId',
      tableName: 'TableName',
      taskId: 'TaskId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIVersion: 'number',
      bucket: 'string',
      currentPage: 'number',
      cursor: 'string',
      cursorDirection: 'string',
      dbName: 'string',
      domainId: 'number',
      engineType: 'string',
      facetType: 'string',
      featureType: 'number',
      fileCategoryCode: 'number',
      fileType: 'number',
      instanceId: 'string',
      isRevision: 'number',
      lang: 'string',
      logStore: 'string',
      logStoreFlag: 'number',
      memberAccount: 'number',
      modelIds: 'string',
      modelTagIds: 'string',
      pageSize: 'number',
      parentCategoryIds: 'string',
      path: 'string',
      productId: 'number',
      productIds: 'string',
      project: 'string',
      queryName: 'string',
      regionId: 'string',
      riskLevelIdList: 'string',
      riskLevels: 'string',
      ruleIds: 'string',
      serviceRegionId: 'string',
      tableName: 'string',
      taskId: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

