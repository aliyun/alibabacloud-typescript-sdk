// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeVersionByUuidsRequest extends $dara.Model {
  /**
   * @remarks
   * The target version to which you want to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.9
   */
  upgradeVersion?: string;
  /**
   * @remarks
   * The list of UUIDs of the assets to be checked.
   * 
   * This parameter is required.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      upgradeVersion: 'UpgradeVersion',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      upgradeVersion: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

