// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias to detach.
   * 
   * An alias supports up to 128 bytes (one Chinese character counts as 3 bytes). This field is required when UnbindAll is false. You can detach up to 10 aliases at once. Separate multiple aliases with commas.
   * 
   * @example
   * test_alias
   */
  aliasName?: string;
  /**
   * @remarks
   * The AppKey.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The unique device identifier for push notifications. It is 32 characters long and consists of digits and lowercase letters.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  deviceId?: string;
  /**
   * @remarks
   * Whether to detach all aliases. Default is false.
   * 
   * If true, detaches all aliases currently bound to the device. If false, detaches only the aliases specified in AliasName.
   * 
   * @example
   * false
   */
  unbindAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      appKey: 'AppKey',
      deviceId: 'DeviceId',
      unbindAll: 'UnbindAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      appKey: 'number',
      deviceId: 'string',
      unbindAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

