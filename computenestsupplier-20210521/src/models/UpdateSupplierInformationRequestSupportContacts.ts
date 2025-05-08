// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSupplierInformationRequestSupportContacts extends $dara.Model {
  /**
   * @remarks
   * The type of  contact information
   * 
   * @example
   * Email
   */
  type?: string;
  /**
   * @remarks
   * The value of contact information
   * 
   * @example
   * supplier@example.com
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

