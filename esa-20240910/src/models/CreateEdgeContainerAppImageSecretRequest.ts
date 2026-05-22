// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppImageSecretRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  registry?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      password: 'Password',
      registry: 'Registry',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      password: 'string',
      registry: 'string',
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

