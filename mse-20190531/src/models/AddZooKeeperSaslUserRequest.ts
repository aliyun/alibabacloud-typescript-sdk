// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddZooKeeperSaslUserRequestSaslUser extends $dara.Model {
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * traaqwrasdf
   */
  password?: string;
  /**
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
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  reload?: boolean;
  /**
   * @remarks
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

