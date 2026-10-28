// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The RAM role whose trusted entity is an Alibaba Cloud account. For more information about how to create a RAM role, see Create a RAM role for a trusted Alibaba Cloud account.
   * In the RAM role, the Alibaba Cloud account to which AnalyticDB for MySQL belongs must be configured as a trusted account for the Alibaba Cloud account to which the Kafka instance belongs.
   * 
   * @example
   * aps
   */
  acrossRole?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source Kafka instance belongs.
   * 
   * @example
   * 123************
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
   * The column information.
   * 
   * This parameter is required.
   */
  columnsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (3.0) clusters in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Kafka message type. Valid values: json, general_canal_json, mongo_canal_json, dataworks_json, and shareplex_json.
   * 
   * @example
   * json
   */
  dataFormatType?: string;
  /**
   * @remarks
   * The data output format. Valid values:
   * - Single: The source is a single-line JSON record.
   * - Multi: The source is a JSON array. A single JSON record must be output.
   * 
   * @example
   * Single
   */
  dataOutputFormat?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 1
   */
  datasourceId?: number;
  /**
   * @remarks
   * The custom database name.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  dbName?: string;
  /**
   * @remarks
   * The full synchronization configurations.
   * 
   * @example
   * 2ACU
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The destination Hudi configurations.
   * 
   * @example
   * hoodie.keep.min.commits=20
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * The incremental synchronization configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ACU
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * The nesting parse level for JSON. Valid values:
   * - 0: No parsing.
   * - 1: Parse one level.
   * - 2: Parse two levels.
   * - 3: Parse three levels.
   * - 4: Parse four levels.
   * Default value: 1. For more information about the JSON nesting parse strategy, see JSON parse levels and schema field inference examples.
   * 
   * @example
   * 0
   */
  jsonParseLevel?: number;
  /**
   * @remarks
   * Instance ID of the Kafka instance. You can obtain instance ID in the Kafka console.
   * 
   * @example
   * xxx
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * The ID of the Kafka topic. You can obtain the ID in the Kafka console.
   * 
   * @example
   * test
   */
  kafkaTopic?: string;
  /**
   * @remarks
   * The ID of the lakehouse.
   * 
   * @example
   * 123
   */
  lakehouseId?: number;
  /**
   * @remarks
   * The maximum number of messages to consume per trigger.
   * 
   * @example
   * 50000
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @remarks
   * The destination lakehouse address, which is a complete OSS path.
   * 
   * @example
   * oss://test-xx-zzz/yyy/
   */
  ossLocation?: string;
  /**
   * @remarks
   * The output data format.
   * 
   * @example
   * HUDI
   */
  outputFormat?: string;
  /**
   * @remarks
   * The partition information.
   * 
   * **if can be null:**
   * true
   */
  partitionSpecsShrink?: string;
  /**
   * @remarks
   * The primary key settings, including the UUID strategy and the mapping strategy. Details:
   * UUID strategy: "Strategy": "uuid".
   * Mapping strategy:
   * "Strategy": "mapping",
   * "Values":[
   *  "f1",
   *  "f2"
   * ],
   * "RecordVersionField","xxx"
   * RecordVersionField specifies the Hudi record version.
   * 
   * @example
   * "Strategy": "mapping"
   */
  primaryKeyDefinition?: string;
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
   * This parameter is required.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The starting consumption offset for Kafka. Valid values:
   * - begin_cursor: The earliest offset.
   * - end_cursor: The latest offset.
   * - timestamp: A specified time.
   * 
   * This parameter is required.
   * 
   * @example
   * begincursor
   */
  startingOffsets?: string;
  /**
   * @remarks
   * The custom table name.
   * 
   * This parameter is required.
   * 
   * @example
   * testTB
   */
  tableName?: string;
  /**
   * @remarks
   * The destination generation rule.
   * 
   * @example
   * xxx
   */
  targetGenerateRule?: string;
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
      dataFormatType: 'DataFormatType',
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
      dataFormatType: 'string',
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

