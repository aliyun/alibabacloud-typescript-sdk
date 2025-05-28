// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceIpWhitelistRequest extends $dara.Model {
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
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipWhitelists)) {
      $dara.Model.validateArray(this.ipWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

