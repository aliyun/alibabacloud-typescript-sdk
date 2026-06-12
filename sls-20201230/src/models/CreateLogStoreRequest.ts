// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";
import { ShardingPolicy } from "./ShardingPolicy";


export class CreateLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record the source **public IP address** and the **server reception time**. Default value: false.
   * 
   * - true: Log Service automatically appends the public IP address of the source device and the server reception time to the Tag field of logs.
   * 
   * - false: Log Service does not append the source public IP address or the server reception time.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic shard splitting. If you set this parameter to true, Log Service automatically splits a shard to increase write throughput when the write traffic to the shard continuously exceeds the service limit. If you enable automatic shard splitting, you must also specify `maxSplitShard`.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  enableModify?: boolean;
  /**
   * @remarks
   * Specifies whether to enable WebTracking. The default value is false. This feature lets you collect and analyze user behavior data from browsers or mini programs, such as page views, purchase history, and dwell time.
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The encryption configuration. This data structure includes the `enable`, `encrypt_type`, and `user_cmk_info` parameters. For more information, see [EncryptConf](https://help.aliyun.com/document_detail/409461.html).
   * 
   * Example 1 (Enable default encryption):
   * 
   * ```
   * {
   *     "enable": true,
   *     "encrypt_conf": "default"
   * }
   * ```
   * 
   * Example 2 (Enable BYOK encryption):
   * 
   * ```
   * {
   *     "enable": true,
   *     "encrypt_conf": "default",
   *     "user_cmk_info": {
   *         "cmk_key_id": "xxxxx",
   *         "arn": "acs:ram::112340000000:role/rolename",
   *         "region": "cn-hangzhou"
   *     }
   * }
   * ```
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot storage tier of the Logstore, in days. The value must be an integer from 7 to the value of `ttl`. If you do not specify this parameter, data is stored in the hot storage tier for the entire data retention period specified by `ttl`.
   * 
   * After the hot storage retention period expires, data is moved to the Infrequent Access (IA) storage tier. To enable IA storage, you must set the hot storage retention period to at least 7 days. For more information, see [Smart Tiered Storage](https://help.aliyun.com/document_detail/308645.html).
   * 
   * Examples:
   * 
   * - Scenario 1 (Store data in the hot storage tier for 30 days): `{"ttl": 30}` or `{"ttl": 30, "hot_ttl": 30}`
   * 
   * - Scenario 2 (Store data in the hot storage tier for 7 days and in the IA storage tier for 23 days): `{"ttl": 30, "hot_ttl": 7}`
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The retention period for Infrequent Access (IA) storage, in days. While this parameter has no minimum value, data must remain in the IA storage tier for at least 30 days before it can be moved to archive storage.
   * 
   * If the total retention period (`ttl`) is longer than the sum of the hot storage period (`hot_ttl`) and the IA storage period (`infrequentAccessTTL`), the remaining time is the archive storage period.
   * 
   * Examples:
   * 
   * - Scenario 1 (Store data in the hot storage tier for 7 days and in the IA storage tier for 23 days): `{"ttl": 30, "hot_ttl": 7}`
   * 
   * - Scenario 2 (Store data in the hot storage tier for 7 days, in the IA storage tier for 30 days, and in the archive storage tier for 60 days): `{"ttl": 97, "hot_ttl": 7, "infrequentAccessTTL": 30}`
   * 
   * - Scenario 3 (Store data in the hot storage tier for 60 days and in the archive storage tier for 60 days, with the IA storage period being 0 days): `{"ttl": 120, "hot_ttl": 60, "infrequentAccessTTL": 0}`
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The name of the Logstore. The name must meet the following requirements:
   * 
   * - The name must be unique within a project.
   * 
   * - The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * - The name must start and end with a lowercase letter or a digit.
   * 
   * - The name must be 2 to 63 characters long.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards after an automatic split. The value must be an integer from 1 to 256.
   * 
   * > This parameter is required if you set `autoSplit` to true.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * Log Service provides two types of Logstores: standard and query.
   * 
   * - **standard**: Supports end-to-end data analytics. This mode is suitable for scenarios such as real-time monitoring, interactive analysis, and building a complete observability system.
   * 
   * - **query**: Supports high-performance queries. The index traffic cost is approximately half that of the standard mode, but SQL analysis is not supported. This mode is suitable for scenarios that involve large volumes of data, long retention periods such as weeks or months, and do not require SQL-based analysis.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the IngestProcessor.
   * 
   * @example
   * processor-nginx-parser-001
   */
  processorId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Logstore belongs.
   * 
   * @example
   * rg-xxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * > You cannot update the shard count with this operation. To do so, call the SplitShard or MergeShards operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The configuration for hash-based writes. When you write data, logs are stored in a shard that is selected based on the configured hash-based sharding policy. Before you configure this parameter, make sure that the hash ranges of the shards are evenly distributed. Improper configuration may affect write performance. Configure this parameter with caution.
   */
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The type of observable data. Default value: log data. Valid values:
   * 
   * - **None**: log data. This is the default value.
   * 
   * - **Metrics**: Metrics data.
   * 
   * @example
   * None
   */
  telemetryType?: string;
  /**
   * @remarks
   * The data retention period in days. Valid values: 1 to 3,650. If you set this parameter to 3,650, data is stored permanently.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      enableModify: 'enableModify',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      processorId: 'processorId',
      resourceGroupId: 'resourceGroupId',
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
      enableModify: 'boolean',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      processorId: 'string',
      resourceGroupId: 'string',
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

