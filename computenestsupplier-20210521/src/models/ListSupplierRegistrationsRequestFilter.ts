// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupplierRegistrationsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Name of the filter field. Allowed values:
   * 
   * - SupplierUid: The aliUid of supplier.
   * - SupplierName: The name of supplier.
   * - RegistrationId: Registration ID.
   * 
   * - Status: Registration status. Allowed values: Submitted, Approved, Rejected.
   * 
   * @example
   * SupplierUid
   */
  name?: string;
  /**
   * @remarks
   * Filter value.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

