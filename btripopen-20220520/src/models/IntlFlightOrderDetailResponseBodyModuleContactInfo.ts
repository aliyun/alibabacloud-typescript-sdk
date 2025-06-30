// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModuleContactInfo extends $dara.Model {
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'contact_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

