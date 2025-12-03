// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApsKafkaHudiJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Resource Access Management (RAM) role that is created for the trusted Alibaba Cloud account. For more information, see Create a RAM role for a trusted Alibaba Cloud account. The ARN of the RAM role that grants AnalyticDB for MySQL permission to access resources in the source account. Required for cross-account data ingestion.
   * 
   * @example
   * aps
   */
  acrossRole?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source Kafka belongs.
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
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  dataFormatType?: string;
  /**
   * @remarks
   * Enumeration value and description. Single: The source is a single-row JSON record. Multi: source is a JSON array. Output a single JSON record.
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
   * The name of the user-defined database.
   * 
   * This parameter is required.
   * 
   * @example
   * testDB
   */
  dbName?: string;
  /**
   * @remarks
   * The full synchronization configuration.
   * 
   * @example
   * 2ACU
   */
  fullComputeUnit?: string;
  /**
   * @remarks
   * The HUDI configuration of the destination.
   * 
   * @example
   * hoodie.keep.min.commits=20
   */
  hudiAdvancedConfig?: string;
  /**
   * @remarks
   * The incremental synchronization configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ACU
   */
  incrementalComputeUnit?: string;
  /**
   * @remarks
   * The number of layers that are parsed for nested JSON fields. Valid values: 0: Nested JSON fields are not parsed. 1: parses one layer. 2: Two layers are parsed. 3: Three layers are parsed. 4: Four layers are parsed. By default, one layer is parsed. For more information about how nested JSON fields are parsed, see the Examples of schema fields parsed with different numbers of layers section of this topic.
   * 
   * @example
   * 0
   */
  jsonParseLevel?: number;
  /**
   * @remarks
   * The ID of the Apache Kafka instance. You can get it in the Kafka console.
   * 
   * @example
   * xxx
   */
  kafkaClusterId?: string;
  /**
   * @remarks
   * Kafka Topic ID. You can get it in the Kafka console.
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
   * The maximum number of records to fetch in a single batch.
   * 
   * @example
   * 50000
   */
  maxOffsetsPerTrigger?: number;
  /**
   * @remarks
   * The path of the destination data lakehouse in an Object Storage Service (OSS) bucket.
   * 
   * @example
   * oss://test-xx-zzz/yyy/
   */
  ossLocation?: string;
  /**
   * @remarks
   * The format of the output data.
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
   * The primary key settings. Contains the uuid policy and mapping policy. The explanation is as follows. Uuid policy: "Strategy": "uuid". Mapping policy: "Strategy": "mapping", "Values":[ "f1", "f2" ], "RecordVersionField","xxx" The meaning of the RecordVersionField is the HUDI record version.
   * 
   * @example
   * "Strategy": "mapping"
   */
  primaryKeyDefinition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
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
   * This parameter is required.
   * 
   * @example
   * aps
   */
  resourceGroup?: string;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-hangzhou
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * Specifies the position from which to start consuming messages. Valid values: begin_cursor/end_cursor/timestamp Each corresponds to the earliest /latest /specified time respectively.
   * 
   * This parameter is required.
   * 
   * @example
   * begincursor
   */
  startingOffsets?: string;
  /**
   * @remarks
   * The name of the user-defined table.
   * 
   * This parameter is required.
   * 
   * @example
   * testTB
   */
  tableName?: string;
  /**
   * @remarks
   * The rules for generating the destination database.
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

