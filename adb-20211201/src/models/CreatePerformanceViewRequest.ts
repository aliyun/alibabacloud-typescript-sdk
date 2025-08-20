// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePerformanceViewRequestViewDetailCategoriesKeys extends $dara.Model {
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
      keyName: 'KeyName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePerformanceViewRequestViewDetailCategories extends $dara.Model {
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
  keys?: CreatePerformanceViewRequestViewDetailCategoriesKeys[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      keys: { 'type': 'array', 'itemType': CreatePerformanceViewRequestViewDetailCategoriesKeys },
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

export class CreatePerformanceViewRequestViewDetail extends $dara.Model {
  /**
   * @remarks
   * The metric categories.
   */
  categories?: CreatePerformanceViewRequestViewDetailCategories[];
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
      categories: { 'type': 'array', 'itemType': CreatePerformanceViewRequestViewDetailCategories },
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

export class CreatePerformanceViewRequest extends $dara.Model {
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
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ub9grke1****
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
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the monitoring view.
   * 
   * This parameter is required.
   */
  viewDetail?: CreatePerformanceViewRequestViewDetail;
  /**
   * @remarks
   * The name of the view.
   * 
   * This parameter is required.
   * 
   * @example
   * viewname
   */
  viewName?: string;
  static names(): { [key: string]: string } {
    return {
      createFromViewType: 'CreateFromViewType',
      DBClusterId: 'DBClusterId',
      fillOriginViewKeys: 'FillOriginViewKeys',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      viewDetail: 'ViewDetail',
      viewName: 'ViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createFromViewType: 'string',
      DBClusterId: 'string',
      fillOriginViewKeys: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      viewDetail: CreatePerformanceViewRequestViewDetail,
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

