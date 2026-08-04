// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterUpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * John
   */
  name?: string;
  /**
   * @remarks
   * The phone number of the user.
   * 
   * @example
   * 13800000000
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

