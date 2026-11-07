// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZooKeeperSaslUserRequestSaslUser extends $dara.Model {
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The original password. This parameter is required if you want to change the password.
   * 
   * @example
   * origin-password
   */
  originPassword?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * xxxxxx
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      originPassword: 'OriginPassword',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      originPassword: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateZooKeeperSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-tl327w****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the changes take effect immediately.
   * 
   * @example
   * true
   */
  reload?: boolean;
  /**
   * @remarks
   * The list of SASL users to update.
   * 
   * This parameter is required.
   */
  saslUser?: UpdateZooKeeperSaslUserRequestSaslUser[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      reload: 'Reload',
      saslUser: 'SaslUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      reload: 'boolean',
      saslUser: { 'type': 'array', 'itemType': UpdateZooKeeperSaslUserRequestSaslUser },
    };
  }

  validate() {
    if(Array.isArray(this.saslUser)) {
      $dara.Model.validateArray(this.saslUser);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

