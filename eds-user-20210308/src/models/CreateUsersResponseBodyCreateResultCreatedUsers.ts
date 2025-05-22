// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersResponseBodyCreateResultCreatedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test1
   */
  endUserId?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The display name of the end user.
   * 
   * @example
   * Bean
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks of the end user.
   * 
   * @example
   * remark1
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

