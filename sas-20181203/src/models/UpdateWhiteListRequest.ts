// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Image repository ID.
   * > You can obtain this parameter by calling the [PageImageRegistry](~~PageImageRegistry~~) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 19882
   */
  registryId?: number;
  /**
   * @remarks
   * Whitelist list. If there are multiple whitelisted addresses, separate them with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.XXX.XXX,192.180.XXX.XXX
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      registryId: 'RegistryId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registryId: 'number',
      whiteList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

