// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShardingPolicy } from "./ShardingPolicy";


export class GetMetricStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the public IP address and log receive time are recorded.
   * 
   * @example
   * false
   */
  appendMeta?: boolean;
  /**
   * @remarks
   * Indicates whether automatic sharding is enabled.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * The creation time, as a UNIX timestamp.
   * 
   * @example
   * 1698933894
   */
  createTime?: number;
  /**
   * @remarks
   * The storage duration of data in the hot tier, in days.
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The storage duration in the infrequent access (IA) tier, in days.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The last modification time, as a UNIX timestamp.
   * 
   * @example
   * 1712023974
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The maximum number of shards for automatic sharding.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The category of the Metricstore, such as prometheus.
   * 
   * @example
   * prometheus
   */
  metricType?: string;
  /**
   * @remarks
   * The specification type of the Metricstore, such as standard.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The name of the Metricstore.
   * 
   * @example
   * my_metric_store
   */
  name?: string;
  /**
   * @remarks
   * The ID of the write processor associated with the Metricstore.
   */
  processorId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The hash write configuration.
   */
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The data retention period, in days.
   * 
   * @example
   * 7
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      createTime: 'createTime',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      lastModifyTime: 'lastModifyTime',
      maxSplitShard: 'maxSplitShard',
      metricType: 'metricType',
      mode: 'mode',
      name: 'name',
      processorId: 'processorId',
      shardCount: 'shardCount',
      shardingPolicy: 'shardingPolicy',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      createTime: 'number',
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      lastModifyTime: 'number',
      maxSplitShard: 'number',
      metricType: 'string',
      mode: 'string',
      name: 'string',
      processorId: 'string',
      shardCount: 'number',
      shardingPolicy: ShardingPolicy,
      ttl: 'number',
    };
  }

  validate() {
    if(this.shardingPolicy && typeof (this.shardingPolicy as any).validate === 'function') {
      (this.shardingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

