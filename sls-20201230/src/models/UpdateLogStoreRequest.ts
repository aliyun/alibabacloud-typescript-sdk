// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";
import { ShardingPolicy } from "./ShardingPolicy";


export class UpdateLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record the public IP address and log arrival time. Default value: false.
   * 
   * - true: enables the feature. After this feature is enabled, Simple Log Service automatically adds the public IP address of the log source device and the time when the log arrives at the server to the Tag field of the log.
   * - false: disables the feature.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding. After this feature is enabled, a shard is automatically split when the write traffic continuously exceeds the limit, which improves write capacity. You must set maxSplitShard (the maximum number of shards after splitting) when you enable automatic sharding.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the WebTracking feature. Default value: false. You can use the WebTracking feature to collect and analyze user behavior data in browsers or mini programs, such as page views, purchase records, and time on site.
   * 
   * - true: enables WebTracking.
   * - false: disables WebTracking.
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The encryption configuration. Encryption is disabled by default.
   * 
   * Example 1 (enable default encryption):
   * ```
   * {
   *     "enable": true,
   *     "encrypt_conf": "default"
   * }
   * ```
   * Example 2 (enable BYOK encryption):
   * ```
   * {
   *     "enable": true,
   *     "encrypt_conf": "default",
   *     "user_cmk_info": {
   *         "cmk_key_id": "xxxxx",
   *         "arn": "acs:ram::112340000000:role/rolename",
   *         "region": "ap-southeast-1"
   *     }
   * }
   * ```
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot tier of the Logstore. Unit: days. Minimum value: 7. The value cannot exceed the value of ttl. By default, all data within the retention period is stored in the hot tier.
   * 
   * After the data storage time exceeds the configured hot data retention period, the data is moved to the infrequent access (IA) tier. When you enable the IA tier, the hot data retention period must be at least 7 days. For more information, see [Intelligent tiering](https://help.aliyun.com/document_detail/308645.html).
   * 
   * Examples:
   * - Scenario 1 (hot tier only, 30 days): `{"ttl": 30}` or `{"ttl": 30, "hot_ttl": 30}`
   * - Scenario 2 (hot tier 7 days, IA tier 23 days): `{"ttl": 30, "hot_ttl": 7}`
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * Infrequent access (IA) tier. No minimum storage time is required. Data must be stored for at least 30 days before being moved to the archive tier.
   * 
   * When the log retention period exceeds the sum of the hot tier retention period and the IA tier retention period, the remaining storage time is converted to archive tier storage.
   * 
   * Examples:
   * - Scenario 1 (hot tier 7 days, IA tier 23 days): `{"ttl": 30, "hot_ttl": 7}`
   * - Scenario 2 (hot tier 7 days, IA tier 30 days, archive tier 60 days): `{"ttl": 97, "hot_ttl": 7, "infrequentAccessTTL": 30}`
   * - Scenario 3 (hot tier 60 days, IA tier 0 days, archive tier 60 days): `{"ttl": 120, "hot_ttl": 60, "infrequentAccessTTL": 0}`
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards for automatic sharding. Minimum value: 1. Maximum value: 256.
   * 
   * > This parameter is required when autoSplit is set to true.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * Simple Log Service provides two types of Logstores: Standard and Query.
   * 
   * - **standard**: supports one-stop data analytics capabilities of Simple Log Service. This type is suitable for scenarios such as real-time monitoring, interactive analysis, and building complete observability systems.
   * - **query**: supports high-performance queries. The index traffic fee is approximately half that of the Standard type. However, SQL analysis is not supported. This type is suitable for scenarios with large data volumes, long storage periods (weeks or months), and no log analysis requirements.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * > This operation does not support updating the number of shards. You can modify the number of shards only by calling the SplitShard or MergeShards operation.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  shardCount?: number;
  /**
   * @remarks
   * The hash-based write configuration. When data is written, logs are routed to shards based on the configured hash policy. Before configuring this parameter, ensure that the hash ranges of shards are evenly distributed. This configuration may affect write capacity. Proceed with caution.
   */
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The type of observable data. The default value is log data. Valid values:
   * 
   * - None: log data. This is the default value.
   * - Metrics: time series data.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  telemetryType?: string;
  /**
   * @remarks
   * The data retention period. Unit: days. Valid values: 1 to 3650. A value of 3650 indicates permanent retention.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      shardCount: 'shardCount',
      shardingPolicy: 'shardingPolicy',
      telemetryType: 'telemetryType',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      shardCount: 'number',
      shardingPolicy: ShardingPolicy,
      telemetryType: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(this.encryptConf && typeof (this.encryptConf as any).validate === 'function') {
      (this.encryptConf as any).validate();
    }
    if(this.shardingPolicy && typeof (this.shardingPolicy as any).validate === 'function') {
      (this.shardingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

