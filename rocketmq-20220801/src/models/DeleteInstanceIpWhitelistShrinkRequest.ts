// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceIpWhitelistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address whitelist.
   * 
   * @example
   * 0.0.0.0/0
   * 
   * @deprecated
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The IP address whitelist.
   */
  ipWhitelistsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      ipWhitelistsShrink: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      ipWhitelistsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

