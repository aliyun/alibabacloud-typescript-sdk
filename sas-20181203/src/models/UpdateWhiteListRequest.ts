// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * The image repository ID.
   * >You can call the [PageImageRegistry](~~PageImageRegistry~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 19882
   */
  registryId?: number;
  /**
   * @remarks
   * The whitelist. Separate multiple whitelisted addresses with commas (,).
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

