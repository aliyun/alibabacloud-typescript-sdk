// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactRepositoryCredentialsResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * STS.xxx
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The AccessKey secret.
   * 
   * @example
   * xxx
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * eyJ0aW1lIjoiMTUyNjU0OTc5:0705733****
   */
  password?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * xxx
   */
  securityToken?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      password: 'Password',
      securityToken: 'SecurityToken',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      password: 'string',
      securityToken: 'string',
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

