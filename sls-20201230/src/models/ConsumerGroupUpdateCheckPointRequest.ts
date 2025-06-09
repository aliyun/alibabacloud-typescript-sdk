// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerGroupUpdateCheckPointRequest extends $dara.Model {
  /**
   * @remarks
   * The value of the checkpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * MTUyNDE1NTM3OTM3MzkwODQ5Ng==
   */
  checkpoint?: string;
  /**
   * @remarks
   * The ID of the shard.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  shard?: number;
  /**
   * @remarks
   * The consumer.
   * 
   * This parameter is required.
   * 
   * @example
   * consumer_1
   */
  consumer?: string;
  /**
   * @remarks
   * Specifies whether to enable forceful updates. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * False
   */
  forceSuccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'checkpoint',
      shard: 'shard',
      consumer: 'consumer',
      forceSuccess: 'forceSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      shard: 'number',
      consumer: 'string',
      forceSuccess: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

