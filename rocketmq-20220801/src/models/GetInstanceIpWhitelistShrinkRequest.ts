// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceIpWhitelistShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The  filter IP address whitelists.
   */
  ipWhitelistsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelistsShrink: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

