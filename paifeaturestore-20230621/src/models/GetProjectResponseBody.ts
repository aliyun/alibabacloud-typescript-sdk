// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBody extends $dara.Model {
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
   * 90
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
   * C33E160C-BFCA-5719-B958-942850E949F6
   */
  requestId?: string;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

