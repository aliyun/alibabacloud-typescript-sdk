// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The audit status. Valid values:
   * 
   * - **1**: Auditing is enabled.
   * 
   * - **0**: Auditing is disabled.
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * The authorization status of the data asset instance.
   * 
   * - **0**: Unauthorized.
   * 
   * - **1**: Authorized.
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MariaDB**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * instance-demo-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese. This is the default value.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the product to query. Valid values: MaxCompute, OSS, ADS, OTS, and RDS.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The product type ID to query. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADS
   * 
   * - **4**: OTS
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The keyword for the fuzzy search of data assets.
   * 
   * @example
   * 1
   */
  searchKey?: string;
  /**
   * @remarks
   * The type of the fuzzy search for data assets. Valid values:
   * 
   * - **InstanceId**: The instance ID.
   * 
   * - **InstanceName**: The instance name.
   * 
   * - **DatabaseName**: The database name.
   * 
   * @example
   * InstanceId
   */
  searchType?: string;
  /**
   * @remarks
   * The region where the asset is located. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      authStatus: 'AuthStatus',
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      featureType: 'FeatureType',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      searchKey: 'SearchKey',
      searchType: 'SearchType',
      serviceRegionId: 'ServiceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      authStatus: 'number',
      currentPage: 'number',
      engineType: 'string',
      featureType: 'number',
      instanceId: 'string',
      lang: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'number',
      searchKey: 'string',
      searchType: 'string',
      serviceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

