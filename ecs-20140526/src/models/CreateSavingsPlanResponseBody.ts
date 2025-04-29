// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavingsPlanResponseBody extends $dara.Model {
  orderId?: string;
  requestId?: string;
  savingsPlanId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      savingsPlanId: 'SavingsPlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      savingsPlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

