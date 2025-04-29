// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderPreValidateResponseBodyModuleItemInvoice extends $dara.Model {
  supportSpecial?: boolean;
  static names(): { [key: string]: string } {
    return {
      supportSpecial: 'support_special',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportSpecial: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

