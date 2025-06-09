// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerGroupHeartBeatRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of shards whose data is being consumed.
   * 
   * This parameter is required.
   */
  body?: number[];
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
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      consumer: 'consumer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': 'number' },
      consumer: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

