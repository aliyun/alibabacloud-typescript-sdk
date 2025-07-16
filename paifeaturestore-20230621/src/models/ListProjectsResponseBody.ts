// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 10
   */
  featureEntityCount?: number;
  /**
   * @example
   * 10
   */
  featureViewCount?: number;
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
   * 5
   */
  modelCount?: number;
  /**
   * @example
   * project1
   */
  name?: string;
  /**
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @example
   * datasource1
   */
  offlineDatasourceName?: string;
  /**
   * @example
   * MaxCompute
   */
  offlineDatasourceType?: string;
  /**
   * @example
   * 10
   */
  offlineLifecycle?: number;
  /**
   * @example
   * 5
   */
  onlineDatasourceId?: string;
  /**
   * @example
   * datasource2
   */
  onlineDatasourceName?: string;
  /**
   * @example
   * Hologres
   */
  onlineDatasourceType?: string;
  /**
   * @example
   * 1232132543543****
   */
  owner?: string;
  /**
   * @example
   * 3
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      featureEntityCount: 'FeatureEntityCount',
      featureViewCount: 'FeatureViewCount',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      modelCount: 'ModelCount',
      name: 'Name',
      offlineDatasourceId: 'OfflineDatasourceId',
      offlineDatasourceName: 'OfflineDatasourceName',
      offlineDatasourceType: 'OfflineDatasourceType',
      offlineLifecycle: 'OfflineLifecycle',
      onlineDatasourceId: 'OnlineDatasourceId',
      onlineDatasourceName: 'OnlineDatasourceName',
      onlineDatasourceType: 'OnlineDatasourceType',
      owner: 'Owner',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      featureEntityCount: 'number',
      featureViewCount: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      modelCount: 'number',
      name: 'string',
      offlineDatasourceId: 'string',
      offlineDatasourceName: 'string',
      offlineDatasourceType: 'string',
      offlineLifecycle: 'number',
      onlineDatasourceId: 'string',
      onlineDatasourceName: 'string',
      onlineDatasourceType: 'string',
      owner: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  projects?: ListProjectsResponseBodyProjects[];
  /**
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

