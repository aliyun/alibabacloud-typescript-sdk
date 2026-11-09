// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAuthIdentityRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID of the device. This parameter is required when the identity type is CLIENT.
   * 
   * @example
   * GID_test@@@test
   */
  clientId?: string;
  /**
   * @remarks
   * The identity type. Valid values:
   * - USER: Username only.
   * - CLIENT: Specific to the client.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-111****
   */
  instanceId?: string;
  /**
   * @remarks
   * The secret.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  secret?: string;
  /**
   * @remarks
   * The signature verification method. Valid values:
   * - ORIGIN: Original value comparison. The password is directly compared with the secret.
   * - SIGNED: Signature verification. The clientId is signed by using HmacSHA1 and the secret, and then the signature is compared with the password.
   * 
   * This parameter is required.
   * 
   * @example
   * SIGNED
   */
  signMode?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      identityType: 'IdentityType',
      instanceId: 'InstanceId',
      secret: 'Secret',
      signMode: 'SignMode',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      identityType: 'string',
      instanceId: 'string',
      secret: 'string',
      signMode: 'string',
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

