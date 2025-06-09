// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricStoreRequest extends $dara.Model {
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
   * The type of the metric data. Example: prometheus.
   * 
   * @example
   * prometheus
   */
  metricType?: string;
  /**
   * @remarks
   * The type of the Metricstore. For example, you can set the parameter to standard to query Standard Metricstores.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The name of the Metricstore.
   * 
   * This parameter is required.
   * 
   * @example
   * my_metric_store
   */
  name?: string;
  /**
   * @remarks
   * The number of shards in the Metricstore.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The retention period of the metric data in the Metricstore. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      autoSplit: 'autoSplit',
      hotTtl: 'hot_ttl',
      infrequentAccessTTL: 'infrequentAccessTTL',
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
      hotTtl: 'number',
      infrequentAccessTTL: 'number',
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

