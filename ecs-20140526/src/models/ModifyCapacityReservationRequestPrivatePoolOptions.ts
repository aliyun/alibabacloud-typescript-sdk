// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCapacityReservationRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The capacity reservation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crp-bp67acfmxazb4****
   */
  id?: string;
  /**
   * @remarks
   * The name of the capacity reservation. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

