// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the multi-cluster feature is enabled. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  enableAutoMc?: boolean;
  /**
   * @remarks
   * The database engine of the cluster. Valid values:
   * 
   * *  AnalyticDB
   */
  engine?: string[];
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   **Interactive**
   * *   **Job**
   * 
   * >  For more information about resource groups, see [Resource group overview](https://help.aliyun.com/document_detail/428610.html).
   */
  groupType?: string[];
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * AnalyticDB_CPU
   */
  keyName?: string;
  /**
   * @remarks
   * Specifies whether to select the metric. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableAutoMc: 'EnableAutoMc',
      engine: 'Engine',
      groupType: 'GroupType',
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoMc: 'boolean',
      engine: { 'type': 'array', 'itemType': 'string' },
      groupType: { 'type': 'array', 'itemType': 'string' },
      keyName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.engine)) {
      $dara.Model.validateArray(this.engine);
    }
    if(Array.isArray(this.groupType)) {
      $dara.Model.validateArray(this.groupType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBodyViewDetailCategories extends $dara.Model {
  /**
   * @remarks
   * The name of the metric category. Valid values:
   * 
   * *   **Node**
   * *   **DiskData**
   * *   **WorkLoad**
   * *   **ResourceGroup**
   * 
   * @example
   * Node
   */
  category?: string;
  /**
   * @remarks
   * The metrics.
   */
  keys?: DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategoriesKeys },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBodyViewDetail extends $dara.Model {
  /**
   * @remarks
   * The metric category.
   */
  categories?: DescribePerformanceViewAttributeResponseBodyViewDetailCategories[];
  /**
   * @remarks
   * Specifies whether to enable the filter interaction feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  chartLinked?: boolean;
  /**
   * @remarks
   * The number of charts to display in each row.
   * 
   * @example
   * 2
   */
  chartsPerLine?: number;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      chartLinked: 'ChartLinked',
      chartsPerLine: 'ChartsPerLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': DescribePerformanceViewAttributeResponseBodyViewDetailCategories },
      chartLinked: 'boolean',
      chartsPerLine: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePerformanceViewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * >  This parameter is returned only if Resource Access Management (RAM) permission verification failed.
   * 
   * @example
   * {
   *     "PolicyType": "AccountLevelIdentityBasedPolicy",
   *     "AuthPrincipalOwnerId": "1*****************7",
   *     "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcKwyhk62IeYly4hQ+5IpXjkh1GQXuDRCQ==",
   *     "AuthPrincipalType": "SubUser",
   *     "AuthPrincipalDisplayName": "2***************9",
   *     "NoPermissionType": "ImplicitDeny",
   *     "AuthAction": "adb:DescribeExcessivePrimaryKeys"
   * }
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The type of the view.
   * 
   * @example
   * Basic
   */
  createFromViewType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * @example
   * amv-bp198m028ih55xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to populate the names of the metrics in the original monitoring view when you view the monitoring view. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fillOriginViewKeys?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E031AABF-BD56-5966-A063-4283EF18DB45
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the monitoring view.
   */
  viewDetail?: DescribePerformanceViewAttributeResponseBodyViewDetail;
  /**
   * @remarks
   * The name of the view.
   * 
   * @example
   * Basic
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      requestId: 'RequestId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      requestId: 'string',
      viewDetail: DescribePerformanceViewAttributeResponseBodyViewDetail,
      viewName: 'string',
    };
  }

  validate() {
    if(this.viewDetail && typeof (this.viewDetail as any).validate === 'function') {
      (this.viewDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

