// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 张三的Git证书
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zhangsan
   */
  password?: string;
  /**
   * @example
   * PERSON
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USERNAME_PASSWORD
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zhangsan
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      password: 'password',
      scope: 'scope',
      type: 'type',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      password: 'string',
      scope: 'string',
      type: 'string',
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

