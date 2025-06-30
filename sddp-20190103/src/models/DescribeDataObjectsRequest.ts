// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * Page number for the paginated query. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * ID of the data domain to which the data asset belongs.
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
   * File category code.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * OSS file types that are supported for recognition.
   * 
   * > You can obtain the supported OSS file types by calling [DescribeDocTypes](https://help.aliyun.com/document_detail/2536492.html), using the Code field value from the response. This parameter is only valid for querying OSS-type assets.
   * 
   * @example
   * 100001
   */
  fileType?: number;
  /**
   * @remarks
   * Keyword for the asset instance ID.
   * 
   * @example
   * 8vb54hn2g9j191ddz
   */
  instanceId?: string;
  /**
   * @remarks
   * The language type for request and response messages, default is **zh_cn**. Values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Member account ID.
   * 
   * @example
   * **********8103
   */
  memberAccount?: number;
  /**
   * @remarks
   * Model IDs of the industry template, separated by commas.
   * > You can obtain the industry template model identifier ID by calling [DescribeTemplateAllRules](https://help.aliyun.com/document_detail/2536491.html).
   * 
   * @example
   * 101
   */
  modelIds?: string;
  /**
   * @remarks
   * Data labels to be queried, separated by commas. Values:
   * - **101**: Personal Sensitive Information.
   * - **102**: Personal Information.
   * - **107**: General Information.
   * 
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of data asset instances to display per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of parent category IDs for the template to be queried, separated by commas.
   * 
   * @example
   * 234,236,238
   */
  parentCategoryIds?: string;
  /**
   * @remarks
   * It is recommended to fill in the list of product IDs to be queried, separated by commas. Values:
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
   * > OSS is mutually exclusive with other products, meaning if OSS is included in the query, no other products can be listed; by default, non-OSS products are queried.
   * 
   * @example
   * 1,5
   */
  productIds?: string;
  /**
   * @remarks
   * Keyword for the data object to be queried.
   * 
   * @example
   * t_sddp_selfmysql_pers0
   */
  queryName?: string;
  /**
   * @remarks
   * Specify the risk levels of the data assets to be queried, separated by commas if multiple.
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
   * Region where the asset is located. Values:
   * - **cn-beijing**: North China 2 (Beijing).
   * - **cn-zhangjiakou**: North China 3 (Zhangjiakou).
   * - **cn-huhehaote**: North China 5 (Hohhot).
   * - **cn-hangzhou**: East China 1 (Hangzhou).
   * - **cn-shanghai**: East China 2 (Shanghai).
   * - **cn-shenzhen**: South China 1 (Shenzhen).
   * - **cn-hongkong**: Hong Kong, China.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * Industry template ID.
   * 
   * > You can obtain the industry template identifier ID by calling [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      domainId: 'DomainId',
      featureType: 'FeatureType',
      fileCategoryCode: 'FileCategoryCode',
      fileType: 'FileType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      memberAccount: 'MemberAccount',
      modelIds: 'ModelIds',
      modelTagIds: 'ModelTagIds',
      pageSize: 'PageSize',
      parentCategoryIds: 'ParentCategoryIds',
      productIds: 'ProductIds',
      queryName: 'QueryName',
      riskLevels: 'RiskLevels',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      domainId: 'number',
      featureType: 'number',
      fileCategoryCode: 'number',
      fileType: 'number',
      instanceId: 'string',
      lang: 'string',
      memberAccount: 'number',
      modelIds: 'string',
      modelTagIds: 'string',
      pageSize: 'number',
      parentCategoryIds: 'string',
      productIds: 'string',
      queryName: 'string',
      riskLevels: 'string',
      serviceRegionId: 'string',
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

