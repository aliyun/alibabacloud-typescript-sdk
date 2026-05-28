// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShardingPolicy } from "./ShardingPolicy";


export class UpdateMetricStoreRequest extends $dara.Model {
  appendMeta?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic sharding.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  hotTtl?: number;
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The maximum number of shards into which existing shards can be automatically split. This parameter is valid only when you set the autoSplit parameter to true.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Metricstore.
   * 
   * @example
   * standard
   */
  mode?: string;
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The retention period of the metric data. Unit: days.
   * 
   * @example
   * 7
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      appendMeta: 'appendMeta',
      autoSplit: 'autoSplit',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      maxSplitShard: 'maxSplitShard',
      mode: 'mode',
      shardingPolicy: 'shardingPolicy',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appendMeta: 'boolean',
      autoSplit: 'boolean',
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      maxSplitShard: 'number',
      mode: 'string',
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

