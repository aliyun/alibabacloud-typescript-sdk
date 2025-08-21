// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAliasRequest extends $dara.Model {
  /**
   * @example
   * test_alias
   */
  aliasName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b16557673****
   */
  deviceId?: string;
  /**
   * @example
   * true
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

