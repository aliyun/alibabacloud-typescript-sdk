// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppImageSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to retrieve the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The password for the image registry.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The address of the image registry.
   * 
   * This parameter is required.
   * 
   * @example
   * cr-cn-shanghai.edas.aliyuncs.com
   */
  registry?: string;
  /**
   * @remarks
   * The username for the image registry.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
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

