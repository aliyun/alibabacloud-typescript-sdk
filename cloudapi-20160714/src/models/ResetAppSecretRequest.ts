// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAppSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the application that is used to make an API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 60030986
   */
  appKey?: string;
  /**
   * @remarks
   * The new AppKey that you set must be globally unique.
   * 
   * @example
   * testAppKey
   */
  newAppKey?: string;
  /**
   * @remarks
   * The new key of the application. To improve compatibility, we recommend that you use other parameters.
   * 
   * @example
   * test***
   */
  newAppSecret?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      newAppKey: 'NewAppKey',
      newAppSecret: 'NewAppSecret',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      newAppKey: 'string',
      newAppSecret: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

