// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The RAM role of a trusted entity that is an Alibaba Cloud account. For more information about how to create a RAM role, see Create a RAM role for a trusted Alibaba Cloud account.
   * The Alibaba Cloud account that owns the AnalyticDB for MySQL cluster must be added as a trusted account to the RAM role.
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
   */
  columnsShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view the cluster IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters in the destination region.
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
   * The valid values and their descriptions are as follows:
   * Single: The source is a single-line JSON record.
   * Multi: The source is a JSON array. A single JSON record is returned as the output.
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
   * The user-defined name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  dbName?: string;
  /**
   * @remarks
   * The configuration for full synchronization.
   * 
   * @example
   * 2ACU
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The Hudi configuration for the destination.
   * 
   * @example
   * hoodie.keep.min.commits=20
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * The configuration for incremental synchronization.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ACU
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * The number of nested JSON layers to parse. Valid values:
   * 0: No parsing is performed.
   * 1: One layer is parsed.
   * 2: Two layers are parsed.
   * 3: Three layers are parsed.
   * 4: Four layers are parsed.
   * By default, one layer is parsed. For more information about the JSON parsing policy for nested data, see JSON parsing levels and schema field inference examples.
   * 
   * @example
   * 0
   */
  jsonParseLevel?: number;
  /**
   * @remarks
   * The ID of the Kafka instance. Obtain the ID from the Kafka console.
   * 
   * @example
   * xxx
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * The ID of the Kafka topic. Obtain the ID from the Kafka console.
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
   * The number of entries to consume in a single batch.
   * 
   * @example
   * 50000
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @remarks
   * The destination lakehouse address. This must be a complete OSS path.
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
   * The primary key settings. This parameter supports the UUID policy and the mapping policy. The policies are described as follows.
   * UUID policy: "Strategy": "uuid".
   * Mapping policy:
   * "Strategy": "mapping",
   * "Values":[
   * "f1",
   * "f2"
   * ],
   * "RecordVersionField","xxx"
   * \\`RecordVersionField\\` specifies the Hudi record version.
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
   * The initial consumer offset for Kafka.
   * Valid values:
   * begin_cursor, end_cursor, and timestamp.
   * These values correspond to the earliest offset, the latest offset, and a specified time.
   * 
   * This parameter is required.
   * 
   * @example
   * begincursor
   */
  startingOffsets?: string;
  /**
   * @remarks
   * The user-defined name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * testTB
   */
  tableName?: string;
  /**
   * @remarks
   * The generation rule for the destination.
   * 
   * @example
   * xxx
   */
  targetGenerateRule?: string;
  /**
   * @remarks
   * The type of the destination.
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

