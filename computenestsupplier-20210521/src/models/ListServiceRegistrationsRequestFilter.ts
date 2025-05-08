// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRegistrationsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Name of the filter field. Allowed values:
   * 
   * - ServiceId: Service ID.
   * 
   * - RegistrationId: Registration ID.
   * 
   * - Status: Registration status. Allowed values: Submitted, Approved, Rejected, Canceled, and Executed.
   * 
   * @example
   * Canceled
   */
  name?: string;
  /**
   * @remarks
   * List of filter values.
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

