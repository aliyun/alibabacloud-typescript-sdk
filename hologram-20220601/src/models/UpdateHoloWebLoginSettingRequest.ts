// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHoloWebLoginSettingRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  allowExternalAccountsLogin?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      allowExternalAccountsLogin: 'allowExternalAccountsLogin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      allowExternalAccountsLogin: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

