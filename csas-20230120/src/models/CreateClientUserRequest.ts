// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 10797
   */
  departmentId?: string;
  /**
   * @remarks
   * User description.
   * 
   * @example
   * 示例用户
   */
  description?: string;
  /**
   * @remarks
   * Email address.
   * 
   * This parameter is required.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * ID of the custom identity source configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * 727
   */
  idpConfigId?: string;
  /**
   * @remarks
   * Mobile phone number without country code.
   * 
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @remarks
   * Password. If empty, a random password is generated automatically.
   * 
   * @example
   * kehudiyi
   */
  password?: string;
  /**
   * @remarks
   * Username.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

