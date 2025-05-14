// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewsResponseBodyFeatureViews extends $dara.Model {
  /**
   * @example
   * featureEntity1
   */
  featureEntityName?: string;
  /**
   * @example
   * 3
   */
  featureViewId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * featureView1
   */
  name?: string;
  /**
   * @example
   * 12321421412****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * project1
   */
  projectName?: string;
  /**
   * @example
   * 4
   */
  registerDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  registerDatasourceName?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @example
   * 90
   */
  TTL?: number;
  /**
   * @example
   * Batch
   */
  type?: string;
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

