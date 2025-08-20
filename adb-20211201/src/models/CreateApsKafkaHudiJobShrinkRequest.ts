// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobShrinkRequest extends $dara.Model {
  /**
   * @example
   * aps
   */
  acrossRole?: string;
  /**
   * @example
   * 123************
   */
  acrossUid?: string;
  /**
   * @example
   * -
   */
  advancedConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  columnsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @example
   * Single
   */
  dataOutputFormat?: string;
  /**
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  dbName?: string;
  /**
   * @example
   * 2ACU
   */
  fullComputeUnit?: string;
  /**
   * @example
   * hoodie.keep.min.commits=20
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2ACU
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  jsonParseLevel?: number;
  /**
   * @example
   * xxx
   */
  kafkaClusterId?: string;
  /**
   * @example
   * test
   */
  kafkaTopic?: string;
  /**
   * @example
   * 123
   */
  lakehouseId?: number;
  /**
   * @example
   * 50000
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @example
   * oss://test-xx-zzz/yyy/
   */
  ossLocation?: string;
  /**
   * @example
   * HUDI
   */
  outputFormat?: string;
  /**
   * **if can be null:**
   * true
   */
  partitionSpecsShrink?: string;
  /**
   * @example
   * "Strategy": "mapping"
   */
  primaryKeyDefinition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * begincursor
   */
  startingOffsets?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testTB
   */
  tableName?: string;
  /**
   * @example
   * xxx
   */
  targetGenerateRule?: string;
  /**
   * @example
   * OSS
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      acrossRole: 'AcrossRole',
      acrossUid: 'AcrossUid',
      advancedConfig: 'AdvancedConfig',
      columnsShrink: 'Columns',
      DBClusterId: 'DBClusterId',
      dataOutputFormat: 'DataOutputFormat',
      datasourceId: 'DatasourceId',
      dbName: 'DbName',
      fullComputeUnit: 'FullComputeUnit',
      hudiAdvancedConfig: 'HudiAdvancedConfig',
      incrementalComputeUnit: 'IncrementalComputeUnit',
      jsonParseLevel: 'JsonParseLevel',
      kafkaClusterId: 'KafkaClusterId',
      kafkaTopic: 'KafkaTopic',
      lakehouseId: 'LakehouseId',
      maxOffsetsPerTrigger: 'MaxOffsetsPerTrigger',
      ossLocation: 'OssLocation',
      outputFormat: 'OutputFormat',
      partitionSpecsShrink: 'PartitionSpecs',
      primaryKeyDefinition: 'PrimaryKeyDefinition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      sourceRegionId: 'SourceRegionId',
      startingOffsets: 'StartingOffsets',
      tableName: 'TableName',
      targetGenerateRule: 'TargetGenerateRule',
      targetType: 'TargetType',
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
      dataOutputFormat: 'string',
      datasourceId: 'number',
      dbName: 'string',
      fullComputeUnit: 'string',
      hudiAdvancedConfig: 'string',
      incrementalComputeUnit: 'string',
      jsonParseLevel: 'number',
      kafkaClusterId: 'string',
      kafkaTopic: 'string',
      lakehouseId: 'number',
      maxOffsetsPerTrigger: 'number',
      ossLocation: 'string',
      outputFormat: 'string',
      partitionSpecsShrink: 'string',
      primaryKeyDefinition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      sourceRegionId: 'string',
      startingOffsets: 'string',
      tableName: 'string',
      targetGenerateRule: 'string',
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

