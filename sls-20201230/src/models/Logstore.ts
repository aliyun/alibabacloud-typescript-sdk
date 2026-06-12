// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EncryptConf } from "./EncryptConf";
import { ShardingPolicy } from "./ShardingPolicy";


export class Logstore extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the client\\"s public IP address in the log data. The default is false.
   * 
   * - true: Records the public IP address.
   * 
   * - false: Does not record the public IP address.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto split.
   * 
   * - true: Enables auto split.
   * 
   * - false: Disables auto split.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * The creation time of the Logstore, specified as a UNIX timestamp (the number of seconds since January 1, 1970, 00:00:00 UTC).
   * 
   * @example
   * 1453949705
   */
  createTime?: number;
  enableModify?: boolean;
  /**
   * @remarks
   * Specifies whether to enable WebTracking. The default value is false.
   * 
   * - true: Enables WebTracking.
   * 
   * - false: Disables WebTracking.
   * 
   * @example
   * false
   */
  enableTracking?: boolean;
  /**
   * @remarks
   * The data encryption configuration.
   */
  encryptConf?: EncryptConf;
  /**
   * @remarks
   * The number of days to retain data in the hot storage tier. The minimum value is 30.
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The number of days to retain data in the infrequent access storage tier.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The time the Logstore was last modified, specified as a UNIX timestamp (the number of seconds since January 1, 1970, 00:00:00 UTC).
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
   * The maximum number of shards that an auto split can create. Valid values: 1 to 64.
   * 
   * @example
   * 6
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * Log Service provides two types of Logstores: Standard and Query.
   * 
   * - **Standard**: Supports the full suite of Log Service data analysis features. This mode is ideal for real-time monitoring, interactive analysis, and building complete observability solutions.
   * 
   * - **Query**: Optimized for high-performance queries with indexing traffic costs that are approximately half those of the Standard mode. This mode does not support SQL analysis and is best for use cases involving large data volumes and long retention periods, where complex log analysis is not a requirement.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The IngestProcessor ID.
   */
  processorId?: string;
  /**
   * @remarks
   * The product type of the logs.
   * 
   * @example
   * aliyun
   */
  productType?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of shards in the Logstore.
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
   * The type of log data. Valid values:
   * 
   * - Metrics: The Logstore is optimized for time-series storage.
   * 
   * - None: The Logstore uses standard storage for logs.
   * 
   * @example
   * Metrics
   */
  telemetryType?: string;
  /**
   * @remarks
   * The data retention period in days. Valid values: 1 to 3,650. A value of 3,650 indicates permanent storage.
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
      enableModify: 'enableModify',
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
      createTime: 'number',
      enableModify: 'boolean',
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

