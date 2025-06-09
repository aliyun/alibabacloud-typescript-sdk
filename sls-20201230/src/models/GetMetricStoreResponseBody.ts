// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetricStoreResponseBody extends $dara.Model {
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
   * The retention period. Unit: days.
   * 
   * @example
   * 7
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      autoSplit: 'autoSplit',
      createTime: 'createTime',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
      lastModifyTime: 'lastModifyTime',
      maxSplitShard: 'maxSplitShard',
      metricType: 'metricType',
      mode: 'mode',
      name: 'name',
      shardCount: 'shardCount',
      ttl: 'ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSplit: 'boolean',
      createTime: 'number',
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
      lastModifyTime: 'number',
      maxSplitShard: 'number',
      metricType: 'string',
      mode: 'string',
      name: 'string',
      shardCount: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

