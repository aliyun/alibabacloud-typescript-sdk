// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsHiveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configurations.
   * 
   * @example
   * -
   */
  advancedConfig?: string;
  /**
   * @remarks
   * The policy to handle tables with the same name in the destination cluster.
   * 
   * @example
   * Intercept: reports error and aborts.
   * Ignore: ignores and continues migrating the relevant tables.
   * Skip: skips related tables and only migrates other tables.
   */
  conflictStrategy?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 40
   */
  datasourceId?: number;
  /**
   * @remarks
   * The number of AnalyticDB compute units (ACUs) required for data migration.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The path of the destination data lakehouse in an Object Storage Service (OSS) bucket.
   * 
   * This parameter is required.
   */
  ossLocation?: string;
  /**
   * @remarks
   * The number of tasks that are allowed in parallel.
   * 
   * @example
   * 8
   */
  parallelism?: number;
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
  /**
   * @remarks
   * The name of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The expression that allows objects to be synchronized.
   * 
   * @example
   * *
   */
  syncAllowExpression?: string;
  /**
   * @remarks
   * The expression that denies objects to be synchronized.
   * 
   * @example
   * abc
   */
  syncDenyExpression?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * OSS
   */
  targetType?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx-20240224100253
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      advancedConfig: 'AdvancedConfig',
      conflictStrategy: 'ConflictStrategy',
      DBClusterId: 'DBClusterId',
      datasourceId: 'DatasourceId',
      fullComputeUnit: 'FullComputeUnit',
      ossLocation: 'OssLocation',
      parallelism: 'Parallelism',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      syncAllowExpression: 'SyncAllowExpression',
      syncDenyExpression: 'SyncDenyExpression',
      targetType: 'TargetType',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedConfig: 'string',
      conflictStrategy: 'string',
      DBClusterId: 'string',
      datasourceId: 'number',
      fullComputeUnit: 'string',
      ossLocation: 'string',
      parallelism: 'number',
      regionId: 'string',
      resourceGroup: 'string',
      syncAllowExpression: 'string',
      syncDenyExpression: 'string',
      targetType: 'string',
      workloadName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

