// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsHiveJobRequest extends $dara.Model {
  /**
   * @remarks
   * The advanced configuration.
   * 
   * @example
   * -
   */
  advancedConfig?: string;
  /**
   * @remarks
   * The policy for handling databases and tables with the same name at the destination.
   * 
   * @example
   * Intercept：报错拦截，暂停迁移
   * Ignore：忽略并继续执行，仍然迁移相关库表
   * Skip：跳过相关库表，只迁移其他库表
   */
  conflictStrategy?: string;
  /**
   * @remarks
   * The AnalyticDB for MySQL cluster ID.
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
   * The number of AnalyticDB compute units (ACUs) required for the migration.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The destination lakehouse address, which is a full OSS path.
   * 
   * This parameter is required.
   */
  ossLocation?: string;
  /**
   * @remarks
   * The number of parallel tasks.
   * 
   * @example
   * 8
   */
  parallelism?: number;
  /**
   * @remarks
   * The region ID of the O&M event.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
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
   * The expression that specifies the objects allowed for synchronization.
   * 
   * @example
   * *
   */
  syncAllowExpression?: string;
  /**
   * @remarks
   * The expression that specifies the objects allowed for synchronization.
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
   * The workload name.
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

