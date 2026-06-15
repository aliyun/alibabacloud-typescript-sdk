// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @remarks
   * The feature entity name.
   * 
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  /**
   * @remarks
   * The feature view ID.
   * 
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The feature view name.
   * 
   * @example
   * featureView1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the feature view.
   * 
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the data source for the registered table.
   * 
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @remarks
   * The name of the data source for the registered table.
   * 
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @remarks
   * The registered table name.
   * 
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * The TTL (Time to Live) of features in the feature view, in seconds.
   * 
   * @example
   * 90
   */
  TTL?: number;
  /**
   * @remarks
   * The type of the feature view. Valid values:
   * 
   * ● Batch feature
   * 
   * ● Stream feature
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether data is written to the online feature store.
   * 
   * @example
   * false
   */
  writeToFeatureDB?: boolean;
  static names(): { [key: string]: string } {
    return {
      featureEntityName: 'FeatureEntityName',
      featureViewId: 'FeatureViewId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      registerDatasourceId: 'RegisterDatasourceId',
      registerDatasourceName: 'RegisterDatasourceName',
      registerTable: 'RegisterTable',
      TTL: 'TTL',
      type: 'Type',
      writeToFeatureDB: 'WriteToFeatureDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureEntityName: 'string',
      featureViewId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      projectName: 'string',
      registerDatasourceId: 'string',
      registerDatasourceName: 'string',
      registerTable: 'string',
      TTL: 'number',
      type: 'string',
      writeToFeatureDB: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeatureViewsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The feature view list.
   */
  featureViews?: ListFeatureViewsResponseBodyFeatureViews[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C03B2680-AC9C-59CD-93C5-8142B92537FA
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of feature views.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      featureViews: 'FeatureViews',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureViews: { 'type': 'array', 'itemType': ListFeatureViewsResponseBodyFeatureViews },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.featureViews)) {
      $dara.Model.validateArray(this.featureViews);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

