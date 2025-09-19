// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeVersionByUuidsRequest extends $dara.Model {
  /**
   * @remarks
   * The version to which you want to upgrade the client.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.9
   */
  upgradeVersion?: string;
  /**
   * @remarks
   * The UUIDs of the assets on which you want to run the detection task.
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

