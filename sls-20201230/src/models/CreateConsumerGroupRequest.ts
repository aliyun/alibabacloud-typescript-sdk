// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group. The name must be unique in a project.
   * 
   * This parameter is required.
   * 
   * @example
   * consumerGroupX
   */
  consumerGroup?: string;
  /**
   * @remarks
   * Specifies whether to consume data in sequence. Valid values:
   * 
   * *   true
   * 
   *     *   In a shard, data is consumed in ascending order based on the value of the \\*\\*__tag__:__receive_time__\\*\\* field.
   *     *   If a shard is split, data in the original shard is consumed first. Then, data in the new shards is consumed at the same time.
   *     *   If shards are merged, data in the original shards is consumed first. Then, data in the new shard is consumed.
   * 
   * *   false Data in all shards is consumed at the same time. If a new shard is generated after a shard is split or after shards are merged, data in the new shard is immediately consumed.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  order?: boolean;
  /**
   * @remarks
   * The timeout period. If the server does not receive heartbeats from a consumer within the timeout period, the server deletes the consumer. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 300
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'consumerGroup',
      order: 'order',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      order: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

