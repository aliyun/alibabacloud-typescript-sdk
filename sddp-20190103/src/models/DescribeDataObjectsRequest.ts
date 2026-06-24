// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the API.
   * 
   * @example
   * 1
   */
  APIVersion?: number;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * bucketName
   */
  bucket?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dataBaseName
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the data domain to which the data asset belongs.
   * 
   * @example
   * 2
   */
  domainId?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The code of the file category.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The type of the OSS file.
   * 
   * > This parameter is valid only for querying data assets of the OSS type. You can call the [DescribeDocTypes](https://help.aliyun.com/document_detail/2536492.html) operation to obtain the supported OSS file types. Use the value of the `Code` parameter in the response.
   * 
   * @example
   * 100001
   */
  fileType?: number;
  /**
   * @remarks
   * The keyword of the instance ID.
   * 
   * @example
   * 8vb54hn2g9j191ddz
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * logstore
   */
  logStore?: string;
  /**
   * @remarks
   * Specifies whether to query data at the Logstore level. The Simple Log Service data catalog has two layers. Set this parameter to 1 to query data at the Logstore level.
   * 
   * @example
   * 1
   */
  logStoreFlag?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * The model ID of the industry-specific rule template. You can specify multiple IDs. Separate them with commas (,).
   * 
   * > You can call the [DescribeTemplateAllRules](https://help.aliyun.com/document_detail/2536491.html) operation to obtain the model ID of the industry-specific rule template.
   * 
   * @example
   * 101
   */
  modelIds?: string;
  /**
   * @remarks
   * The data labels to be queried. You can specify multiple data labels. Separate them with commas (,). Valid values:
   * 
   * - **101**: personal sensitive information
   * 
   * - **102**: personal information
   * 
   * - **107**: general information
   * 
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @remarks
   * The number of data assets to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the parent asset categories to be queried. You can specify multiple IDs. Separate them with commas (,).
   * 
   * @example
   * 234,236,238
   */
  parentCategoryIds?: string;
  /**
   * @remarks
   * The path of the file.
   * 
   * @example
   * road
   */
  path?: string;
  /**
   * @remarks
   * The ID of the product.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The IDs of the products to which the data assets to be queried belong. You can specify multiple product IDs. Separate them with commas (,). We recommend that you specify this parameter. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: TableStore
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * - **7**: PolarDB-X
   * 
   * - **8**: PolarDB
   * 
   * - **9**: ADB-PG
   * 
   * - **10**: OceanBase
   * 
   * - **11**: MongoDB
   * 
   * - **25**: Redis
   * 
   * > If you want to query data assets that belong to OSS, you cannot query data assets of other products. By default, data assets of products other than OSS are queried.
   * 
   * @example
   * 1,5
   */
  productIds?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * project
   */
  project?: string;
  /**
   * @remarks
   * The keyword of the data asset to be queried.
   * 
   * @example
   * t_sddp_selfmysql_pers0
   */
  queryName?: string;
  /**
   * @remarks
   * The region in which the data asset catalog resides.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the sensitivity levels. You can specify multiple sensitivity level IDs. Separate them with commas (,).
   * 
   * @example
   * 1,2,3
   */
  riskLevelIdList?: string;
  /**
   * @remarks
   * The sensitivity level of the data asset. You can specify multiple sensitivity levels. Separate them with commas (,).
   * 
   * - **2**: S1, low sensitivity level
   * 
   * - **3**: S2, medium sensitivity level
   * 
   * - **4**: S3, high sensitivity level
   * 
   * - **5**: S4, highest sensitivity level
   * 
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @remarks
   * The IDs of the rules. You can specify multiple rule IDs. Separate them with commas (,).
   * 
   * @example
   * 1,2,3
   */
  ruleIds?: string;
  /**
   * @remarks
   * The region where the data asset resides. Valid values:
   * 
   * - **cn-beijing**: China (Beijing)
   * 
   * - **cn-zhangjiakou**: China (Zhangjiakou)
   * 
   * - **cn-huhehaote**: China (Hohhot)
   * 
   * - **cn-hangzhou**: China (Hangzhou)
   * 
   * - **cn-shanghai**: China (Shanghai)
   * 
   * - **cn-shenzhen**: China (Shenzhen)
   * 
   * - **cn-hongkong**: China (Hong Kong)
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * TableName
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * > You can call the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) operation to obtain the ID of the industry-specific rule template.
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
      dbName: 'DbName',
      domainId: 'DomainId',
      featureType: 'FeatureType',
      fileCategoryCode: 'FileCategoryCode',
      fileType: 'FileType',
      instanceId: 'InstanceId',
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
      dbName: 'string',
      domainId: 'number',
      featureType: 'number',
      fileCategoryCode: 'number',
      fileType: 'number',
      instanceId: 'string',
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

