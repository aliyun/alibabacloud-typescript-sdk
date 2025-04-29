// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 110840611
   */
  appId?: string;
  /**
   * @remarks
   * The AppKey of the application. The AppKey is used for calling an API.
   * 
   * This parameter is required.
   * 
   * @example
   * 203708622
   */
  appKey?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

