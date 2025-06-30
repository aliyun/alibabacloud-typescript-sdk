// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightCreateOrderRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contactPhone?: string;
  static names(): { [key: string]: string } {
    return {
      contactEmail: 'contact_email',
      contactName: 'contact_name',
      contactPhone: 'contact_phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactEmail: 'string',
      contactName: 'string',
      contactPhone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

