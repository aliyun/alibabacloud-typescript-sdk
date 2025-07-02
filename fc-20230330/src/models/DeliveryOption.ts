// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeliveryOption extends $dara.Model {
  /**
   * @example
   * 2
   */
  concurrency?: number;
  /**
   * @example
   * RawData
   */
  eventSchema?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      eventSchema: 'eventSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      eventSchema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

