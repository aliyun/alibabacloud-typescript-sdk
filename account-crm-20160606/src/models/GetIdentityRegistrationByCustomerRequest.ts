// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityRegistrationByCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customerId?: string;
  static names(): { [key: string]: string } {
    return {
      customerId: 'CustomerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

