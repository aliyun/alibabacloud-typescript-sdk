// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePostPayOrderRequestServerlessConfig extends $dara.Model {
  /**
   * @remarks
   * The reserved capacity for publishing messages. You can specify only an integer for this parameter. Minimum value: 60.
   * 
   * >  The maximum capacity that you can reserve for an instance varies based on available resources in a region. The reserved capacity range displayed on the buy page shall prevail.
   * 
   * @example
   * 50
   */
  reservedPublishCapacity?: number;
  /**
   * @remarks
   * The reserved capacity for subscribing to messages. You can specify only an integer for this parameter. Minimum value: 50.
   * 
   * >  The maximum capacity that you can reserve for an instance varies based on available resources in a region. The reserved capacity range displayed on the buy page shall prevail.
   * 
   * @example
   * 50
   */
  reservedSubscribeCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      reservedPublishCapacity: 'ReservedPublishCapacity',
      reservedSubscribeCapacity: 'ReservedSubscribeCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedPublishCapacity: 'number',
      reservedSubscribeCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

