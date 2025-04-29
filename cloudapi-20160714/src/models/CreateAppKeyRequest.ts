// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 111053351
   */
  appId?: string;
  /**
   * @remarks
   * The application AppKey.
   * 
   * @example
   * 204203237
   */
  appKey?: string;
  /**
   * @remarks
   * The application AppSecret.
   * 
   * @example
   * 6f0a4ad7918a4b41a57fc087d5b066d0
   */
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appKey: 'AppKey',
      appSecret: 'AppSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appKey: 'string',
      appSecret: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

