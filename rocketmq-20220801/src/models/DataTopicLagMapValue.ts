// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataTopicLagMapValue extends $dara.Model {
  /**
   * @remarks
   * The number of ready messages.
   * 
   * @example
   * 1
   */
  readyCount?: number;
  /**
   * @remarks
   * The number of inflight messages.
   * 
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @remarks
   * The delivery latency. Unit: seconds.
   * 
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @remarks
   * The timestamp of the last consumption.
   * 
   * @example
   * 1735629607846
   */
  lastConsumeTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      readyCount: 'readyCount',
      inflightCount: 'inflightCount',
      deliveryDuration: 'deliveryDuration',
      lastConsumeTimestamp: 'lastConsumeTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readyCount: 'number',
      inflightCount: 'number',
      deliveryDuration: 'number',
      lastConsumeTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

