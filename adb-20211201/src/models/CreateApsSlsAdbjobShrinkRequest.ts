// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsSlsADBJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The role name for cross-account access.
   * 
   * @example
   * test-role
   */
  acrossRole?: string;
  /**
   * @remarks
   * The UID for cross-account access.
   * 
   * @example
   * 123456
   */
  acrossUid?: string;
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
   * The column information.
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  columnsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*********
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 327
   */
  datasourceId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * dbName
   */
  dbName?: string;
  /**
   * @remarks
   * The dirty data processing mode.
   * 
   * This parameter is required.
   * 
   * @example
   * -
   */
  dirtyDataHandleMode?: string;
  /**
   * @remarks
   * The dirty data processing mode.
   * 
   * @example
   * STOP
   */
  dirtyDataProcessPattern?: string;
  /**
   * @remarks
   * Specifies whether to enable exactly-once semantics.
   * 
   * @example
   * false
   */
  exactlyOnce?: string;
  /**
   * @remarks
   * The number of AnalyticDB compute units (ACUs) for full data synchronization.
   * 
   * @example
   * 16
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The Hudi advanced configuration.
   * 
   * @example
   * -
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * The number of AnalyticDB compute units (ACUs) for incremental data synchronization.
   * 
   * @example
   * 168
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * lakehosue ID。
   * 
   * @example
   * 123
   */
  lakehouseId?: number;
  /**
   * @remarks
   * The maximum offset.
   * 
   * @example
   * -
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @remarks
   * The OSS address.
   * 
   * @example
   * oss://test*
   */
  ossLocation?: string;
  /**
   * @remarks
   * The output format.
   * 
   * @example
   * -
   */
  outputFormat?: string;
  /**
   * @remarks
   * The partition information.
   * 
   * @example
   * -
   */
  partitionSpecsShrink?: string;
  /**
   * @remarks
   * The password.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  password?: string;
  /**
   * @remarks
   * The primary key definition.
   * 
   * @example
   * -
   */
  primaryKeyDefinition?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  project?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group name.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The region ID of the source cluster.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The starting offset for delivery.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  startingOffsets?: string;
  /**
   * @remarks
   * sls Store。
   * 
   * @example
   * test
   */
  store?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The generation rule for the destination.
   * 
   * @example
   * -
   */
  targetGenerateRule?: string;
  /**
   * @remarks
   * The destination type.
   * 
   * @example
   * ADB
   */
  targetType?: string;
  /**
   * @remarks
   * The UNIX timestamp conversion configuration.
   * 
   * @example
   * -
   */
  unixTimestampConvertShrink?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * user_test
   */
  userName?: string;
  /**
   * @remarks
   * The workload name.
   * 
   * This parameter is required.
   * 
   * @example
   * sls-******
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      advancedConfig: 'AdvancedConfig',
      columnsShrink: 'Columns',
      DBClusterId: 'DBClusterId',
      datasourceId: 'DatasourceId',
      dbName: 'DbName',
      dirtyDataHandleMode: 'DirtyDataHandleMode',
      dirtyDataProcessPattern: 'DirtyDataProcessPattern',
      exactlyOnce: 'ExactlyOnce',
      fullComputeUnit: 'FullComputeUnit',
      hudiAdvancedConfig: 'HudiAdvancedConfig',
      incrementalComputeUnit: 'IncrementalComputeUnit',
      lakehouseId: 'LakehouseId',
      maxOffsetsPerTrigger: 'MaxOffsetsPerTrigger',
      ossLocation: 'OssLocation',
      outputFormat: 'OutputFormat',
      partitionSpecsShrink: 'PartitionSpecs',
      password: 'Password',
      primaryKeyDefinition: 'PrimaryKeyDefinition',
      project: 'Project',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      sourceRegionId: 'SourceRegionId',
      startingOffsets: 'StartingOffsets',
      store: 'Store',
      tableName: 'TableName',
      targetGenerateRule: 'TargetGenerateRule',
      targetType: 'TargetType',
      unixTimestampConvertShrink: 'UnixTimestampConvert',
      userName: 'UserName',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrossRole: 'string',
      acrossUid: 'string',
      advancedConfig: 'string',
      columnsShrink: 'string',
      DBClusterId: 'string',
      datasourceId: 'number',
      dbName: 'string',
      dirtyDataHandleMode: 'string',
      dirtyDataProcessPattern: 'string',
      exactlyOnce: 'string',
      fullComputeUnit: 'string',
      hudiAdvancedConfig: 'string',
      incrementalComputeUnit: 'string',
      lakehouseId: 'number',
      maxOffsetsPerTrigger: 'number',
      ossLocation: 'string',
      outputFormat: 'string',
      partitionSpecsShrink: 'string',
      password: 'string',
      primaryKeyDefinition: 'string',
      project: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      sourceRegionId: 'string',
      startingOffsets: 'string',
      store: 'string',
      tableName: 'string',
      targetGenerateRule: 'string',
      targetType: 'string',
      unixTimestampConvertShrink: 'string',
      userName: 'string',
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

