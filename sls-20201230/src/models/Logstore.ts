// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";
import { ShardingPolicy } from "./ShardingPolicy";


export class Logstore extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record public IP addresses. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * The time at which the Logstore was created. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1453949705
   */
  createTime?: number;
  /**
   * @remarks
   * Specifies whether to enable the web tracking feature. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The configuration of data encryption.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The retention period of data in the hot storage tier of the Logstore. Minimum value: 30. Unit: days.
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The retention period of data in the Infrequent Access (IA) storage tier of the Logstore.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The time at which the Logstore was last modified. The value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1524155379
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * my-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. Valid values: 1 to 64.
   * 
   * @example
   * 6
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Logstore. Simple Log Service provides two types of Logstores: Standard Logstores and Query Logstores. Valid values:
   * 
   * *   **standard**: Standard Logstore. This type of Logstore supports the log analysis feature and is suitable for scenarios such as real-time monitoring and interactive analysis. You can also use this type of Logstore to build a comprehensive observability system.
   * *   **query**: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half that of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The ingest processor ID.
   */
  processorId?: string;
  /**
   * @remarks
   * The type of the service to which the logs belong.
   * 
   * @example
   * aliyun
   */
  productType?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The type of the data that you want to query. Valid values:
   * 
   * *   Metrics: metric data.
   * *   None: non-metric data.
   * 
   * @example
   * Metrics
   */
  telemetryType?: string;
  /**
   * @remarks
   * The log retention period. Unit: days. Valid values: 1 to 3650. If you set this parameter to 3650, logs are permanently stored.
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
      createTime: 'createTime',
      enableTracking: 'enable_tracking',
      encryptConf: 'encrypt_conf',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      lastModifyTime: 'lastModifyTime',
      logstoreName: 'logstoreName',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      processorId: 'processorId',
      productType: 'productType',
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
      createTime: 'number',
      enableTracking: 'boolean',
      encryptConf: EncryptConf,
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      lastModifyTime: 'number',
      logstoreName: 'string',
      maxSplitShard: 'number',
      mode: 'string',
      processorId: 'string',
      productType: 'string',
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

