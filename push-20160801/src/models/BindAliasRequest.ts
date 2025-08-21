// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAliasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
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

