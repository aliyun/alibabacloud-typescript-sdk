// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias to attach.
   * 
   * You can attach up to 10 aliases in one request. Separate multiple aliases with commas. Each alias can be up to 128 bytes long. Chinese characters count as three bytes each. A device can have up to 128 aliases attached. An alias can be attached to up to 128 devices.
   * 
   * This parameter is required.
   * 
   * @example
   * test_alias
   */
  aliasName?: string;
  /**
   * @remarks
   * Your AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The unique identifier of the device in Mobile Push. It is 32 characters long and contains only numbers and lowercase letters.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      appKey: 'number',
      deviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

