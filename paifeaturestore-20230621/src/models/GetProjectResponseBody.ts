// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBody extends $dara.Model {
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
   * The type of the offline data source. For example, `MaxCompute`.
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
   * 90
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
   * - Hologres
   * 
   * - Redis
   * 
   * @example
   * Hologres
   */
  onlineDatasourceType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the project owner.
   * 
   * @example
   * 1232132543543****
   */
  owner?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
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
      requestId: 'RequestId',
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
      requestId: 'string',
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

