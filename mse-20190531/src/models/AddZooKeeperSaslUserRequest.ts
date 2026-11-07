// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZooKeeperSaslUserRequestSaslUser extends $dara.Model {
  /**
   * @remarks
   * The description of the user.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * traaqwrasdf
   */
  password?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class AddZooKeeperSaslUserRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh (default): Chinese, en: English.
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
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to restart the cluster to immediately load the SASL users.
   * 
   * @example
   * true
   */
  reload?: boolean;
  /**
   * @remarks
   * The list of SASL users to add.
   * 
   * This parameter is required.
   */
  saslUser?: AddZooKeeperSaslUserRequestSaslUser[];
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
      saslUser: { 'type': 'array', 'itemType': AddZooKeeperSaslUserRequestSaslUser },
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

