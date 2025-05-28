// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceIpWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The  filter IP address whitelists.
   */
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

