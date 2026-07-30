// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRemoveConsumerGroupConsumersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of consumer IDs to remove from the consumer group.
   * 
   * @example
   * ["cs-8c13d2b4f8a1"]
   */
  consumerIds?: string[];
  static names(): { [key: string]: string } {
    return {
      consumerIds: 'consumerIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.consumerIds)) {
      $dara.Model.validateArray(this.consumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

