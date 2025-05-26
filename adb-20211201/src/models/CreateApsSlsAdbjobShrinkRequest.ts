// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsSlsADBJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cross-account role.
   * 
   * @example
   * test-role
   */
  acrossRole?: string;
  /**
   * @remarks
   * The cross-account UID.
   * 
   * @example
   * 123456
   */
  acrossUid?: string;
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
   * The information about columns.
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
   * The name of the database.
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
   * Specifies whether to enable the consistency check.
   * 
   * @example
   * false
   */
  exactlyOnce?: string;
  /**
   * @remarks
   * The number of full AnalyticDB compute units (ACUs).
   * 
   * @example
   * 16
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The advanced configurations of Hudi.
   * 
   * @example
   * -
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * The number of increment ACUs.
   * 
   * @example
   * 168
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * The lakehouse ID.
   * 
   * @example
   * 123
   */
  lakehouseId?: number;
  /**
   * @remarks
   * The latest offset.
   * 
   * @example
   * -
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL.
   * 
   * @example
   * oss://test*
   */
  ossLocation?: string;
  /**
   * @remarks
   * The format of the output file.
   * 
   * @example
   * -
   */
  outputFormat?: string;
  /**
   * @remarks
   * The information about partition.
   * 
   * @example
   * -
   */
  partitionSpecsShrink?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  password?: string;
  /**
   * @remarks
   * The definition of the primary key.
   * 
   * @example
   * -
   */
  primaryKeyDefinition?: string;
  /**
   * @remarks
   * The name of the SLS project.
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
   * The name of the resource group.
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
   * The start offset.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  startingOffsets?: string;
  /**
   * @remarks
   * The SLS Logstore.
   * 
   * @example
   * test
   */
  store?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The rules for generating the destination database.
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
   * The timestamp conversion.
   * 
   * @example
   * -
   */
  unixTimestampConvertShrink?: string;
  /**
   * @remarks
   * The name of the database account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_test
   */
  userName?: string;
  /**
   * @remarks
   * The name of the workload.
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

