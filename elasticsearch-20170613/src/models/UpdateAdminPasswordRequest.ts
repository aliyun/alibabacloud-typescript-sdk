// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdminPasswordRequest extends $dara.Model {
  /**
   * @example
   * es_password
   */
  esAdminPassword?: string;
  /**
   * @remarks
   * Indicates whether the password was updated. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      esAdminPassword: 'esAdminPassword',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esAdminPassword: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

