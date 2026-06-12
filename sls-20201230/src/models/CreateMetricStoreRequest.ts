// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ShardingPolicy } from "./ShardingPolicy";


export class CreateMetricStoreRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to record the public IP address of the client. The default value is false.
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
   * Specifies whether to enable automatic shard splitting.
   * 
   * @example
   * true
   */
  autoSplit?: boolean;
  /**
   * @remarks
   * The period for which data is stored in the hot tier. Unit: days. The value must be at least 7 and cannot be greater than the value of ttl. If you set this parameter to -1, all data is stored in the hot tier for the duration specified by ttl.
   * 
   * When the hot storage period ends, the data is moved to the IA storage class. For more information, see [Tiered Storage of Hot and Cold Data](https://help.aliyun.com/document_detail/308645.html).
   * 
   * @example
   * 60
   */
  hotTtl?: number;
  /**
   * @remarks
   * The retention period of data in the IA storage class. Unit: days. The minimum value is 30. After this period, data is moved to Archive Storage.
   * 
   * @example
   * 30
   */
  infrequentAccessTTL?: number;
  /**
   * @remarks
   * The maximum number of shards into which a shard can be split. This parameter is valid only if autoSplit is set to true.
   * 
   * @example
   * 64
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The type of the Metricstore. Only prometheus is supported. The default value is prometheus.
   * 
   * @example
   * prometheus
   */
  metricType?: string;
  /**
   * @remarks
   * The type of the Metricstore. Only standard is supported. The default value is standard.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The name of the Metricstore to create.
   * 
   * This parameter is required.
   * 
   * @example
   * my_metric_store
   */
  name?: string;
  /**
   * @remarks
   * The number of [shards](https://help.aliyun.com/document_detail/28976.html) for the Metricstore.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The write hashing configuration.
   */
  shardingPolicy?: ShardingPolicy;
  /**
   * @remarks
   * The data retention period of the Metricstore. Unit: days.
   * 
   * This parameter is required.
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
      metricType: 'metricType',
      mode: 'mode',
      name: 'name',
      shardCount: 'shardCount',
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
      metricType: 'string',
      mode: 'string',
      name: 'string',
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

