// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerGroupLagResponseBodyDataTotalLag extends $dara.Model {
  /**
   * @remarks
   * Delivery delay time, in seconds
   * 
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @remarks
   * The number of messages being consumed.
   * 
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @remarks
   * Last consumption time
   * 
   * @example
   * 1735629607846
   */
  lastConsumeTimestamp?: number;
  /**
   * @remarks
   * Ready message count
   * 
   * @example
   * 1
   */
  readyCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryDuration: 'deliveryDuration',
      inflightCount: 'inflightCount',
      lastConsumeTimestamp: 'lastConsumeTimestamp',
      readyCount: 'readyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDuration: 'number',
      inflightCount: 'number',
      lastConsumeTimestamp: 'number',
      readyCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

