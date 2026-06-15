// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The number of feature entities.
   * 
   * @example
   * 10
   */
  featureEntityCount?: number;
  /**
   * @remarks
   * The number of feature views.
   * 
   * @example
   * 10
   */
  featureViewCount?: number;
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
   * The modification time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The number of models.
   * 
   * @example
   * 5
   */
  modelCount?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * project1
   */
  name?: string;
  /**
   * @remarks
   * The offline data source ID.
   * 
   * @example
   * 4
   */
  offlineDatasourceId?: string;
  /**
   * @remarks
   * The offline data source name.
   * 
   * @example
   * datasource1
   */
  offlineDatasourceName?: string;
  /**
   * @remarks
   * The offline data source type.
   * 
   * @example
   * MaxCompute
   */
  offlineDatasourceType?: string;
  /**
   * @remarks
   * The offline data lifecycle, in days.
   * 
   * @example
   * 10
   */
  offlineLifecycle?: number;
  /**
   * @remarks
   * The online data source ID.
   * 
   * @example
   * 5
   */
  onlineDatasourceId?: string;
  /**
   * @remarks
   * The online data source name.
   * 
   * @example
   * datasource2
   */
  onlineDatasourceName?: string;
  /**
   * @remarks
   * The online data source type.
   * 
   * @example
   * Hologres
   */
  onlineDatasourceType?: string;
  /**
   * @remarks
   * The project owner.
   * 
   * @example
   * 1232132543543****
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
   * The workspace ID.
   * 
   * @example
   * 35523
   */
  workspaceId?: string;
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
      workspaceId: 'WorkspaceId',
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
      workspaceId: 'string',
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
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectsResponseBodyProjects[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of projects.
   * 
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

