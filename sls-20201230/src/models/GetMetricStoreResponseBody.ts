// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShardingPolicy } from "./ShardingPolicy";


export class GetMetricStoreResponseBody extends $dara.Model {
  appendMeta?: boolean;
  /**
   * @remarks
   * Indicates whether the automatic sharding feature is enabled.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp.
   * 
   * @example
   * 1698933894
   */
  createTime?: number;
  hotTtl?: number;
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The last update time. The value is a UNIX timestamp.
   * 
   * @example
   * 1712023974
   */
  lastModifyTime?: number;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The metric type of the Metricstore. Example: prometheus.
   * 
   * @example
   * prometheus
   */
  metricType?: string;
  /**
   * @remarks
   * The specification type of the Metricstore. Example: standard.
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
  processorId?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The retention period. Unit: days.
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

