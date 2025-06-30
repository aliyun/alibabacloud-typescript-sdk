// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the security audit feature. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  auditStatus?: number;
  /**
   * @remarks
   * Specifies whether DSC is authorized to access the data asset.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  authStatus?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values: **MySQL, MariaDB, Oracle, PostgreSQL, and SQLServer**.
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
   * 2
   */
  featureType?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * instance-demo-****
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which the data asset to query belongs. Valid values: **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data asset to query belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 1
   */
  productId?: number;
  /**
   * @remarks
   * The content based on which a fuzzy search is performed.
   * 
   * @example
   * 1
   */
  searchKey?: string;
  /**
   * @remarks
   * The data asset type based on which a fuzzy search is performed.
   * 
   * *   **InstanceId**: the ID of the instance.
   * *   **InstanceName**: the name of the instance.
   * *   **DatabaseName**: the name of the database.
   * 
   * @example
   * InstanceId
   */
  searchType?: string;
  /**
   * @remarks
   * The region in which the data asset resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/214257.html).
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

