// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CredentialConfigConfigsRolesUserInfo extends $dara.Model {
  /**
   * @example
   * LT********
   */
  accessKeyId?: string;
  /**
   * @example
   * 456******
   */
  id?: string;
  /**
   * @example
   * ********
   */
  securityToken?: string;
  /**
   * @example
   * sub
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      id: 'Id',
      securityToken: 'SecurityToken',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      id: 'string',
      securityToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

