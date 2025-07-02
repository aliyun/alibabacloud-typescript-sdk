// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeliveryOption } from "./DeliveryOption";


export class EventSinkConfig extends $dara.Model {
  deliveryOption?: DeliveryOption;
  static names(): { [key: string]: string } {
    return {
      deliveryOption: 'deliveryOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOption: DeliveryOption,
    };
  }

  validate() {
    if(this.deliveryOption && typeof (this.deliveryOption as any).validate === 'function') {
      (this.deliveryOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

