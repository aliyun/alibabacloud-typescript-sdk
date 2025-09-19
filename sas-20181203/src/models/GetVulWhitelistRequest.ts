// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist.
   * 
   * @example
   * 1275
   */
  vulWhitelistId?: number;
  static names(): { [key: string]: string } {
    return {
      vulWhitelistId: 'VulWhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulWhitelistId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

