// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueueConsumersResponseBodyDataConsumers extends $dara.Model {
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * sgen-1
   */
  consumerTag?: string;
  static names(): { [key: string]: string } {
    return {
      consumerTag: 'ConsumerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

