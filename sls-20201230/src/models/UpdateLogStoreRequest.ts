// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";
import { ShardingPolicy } from "./ShardingPolicy";


export class UpdateLogStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record public IP addresses. Default value: false.
   * 
   * - true: records public IP addresses.
   * 
   * - false: does not record public IP addresses.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically split a shard.
   * 
   * - true: automatically splits a shard.
   * 
   * - false: does not automatically split a shard.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * Specifies whether to enable web tracking. Default value: false.
   * 
   * - true: enables web tracking.
   * 
   * - false: does not enable web tracking.
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The encryption configuration.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot tier of the Logstore. Minimum value: 7. Unit: days. Valid values: 7 to 3000. After the retention period of the hot tier ends, the data is moved to the Infrequent Access (IA) storage class. For more information, see [Automatic Storage Tiering](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The retention period for data in the IA storage class. Data in this storage class has no minimum retention period. Data must be stored for at least 30 days before it is moved to Archive storage.
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
   * The maximum number of shards to which a shard can be split. The value must be an integer from 1 to 256.
   * 
   * > This parameter is required if autoSplit is set to true.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * SLS provides two types of Logstores: Standard and Query.
   * 
   * - **standard**: supports one-stop data analytics. This type of Logstore is suitable for scenarios such as real-time monitoring, interactive analysis, and building a complete observability system.
   * 
   * - **query**: supports high-performance queries. The index traffic cost of a Query Logstore is about half that of a Standard Logstore. However, a Query Logstore does not support SQL analysis. This type of Logstore is suitable for scenarios that involve large data volumes, long retention periods of weeks or months, and no log analysis.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * > You cannot update the number of shards with this operation. To change the number of shards, call the SplitShard or MergeShards operation.
   * 
   * @example
   * 2
   * 
   * @deprecated
   */
  shardCount?: number;
  /**
   * @remarks
   * The hash-based write configuration.
   */
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The type of observable data. Valid values:
   * 
   * - None: logs. This is the default value.
   * 
   * - Metrics: metrics.
   * 
   * @example
   * None
   * 
   * @deprecated
   */
  telemetryType?: string;
  /**
   * @remarks
   * The data retention period. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, the data is permanently retained.
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

